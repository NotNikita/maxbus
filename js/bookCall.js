const openPopupBtn = document.getElementById('openPopUpBtn');
const closePopupBtn = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.remove('active');
})

// Sending and validating scripts

function validateDataFromForm(strName, strPhone) {
    let regExpName = /[A-Za-zА-Яа-яЁё]{3,}/;
    let regExpPhone = /[0-9]{3} [0-9]{2} [0-9]{7}/;

    return [regExpName.test(strName), regExpPhone.test(strPhone)];
}

function getCurrData() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}

// submit Form From Input
submitFormFromInput = function () {
    let xname = document.forms["0"]["name"].value;
    let xphone = document.forms["0"]["phone"].value;
    const res = validateDataFromForm(xname, xphone).every(test => test === true);

    if (res) {
        Email.send({
            Host: "smtp.mail.ru",
            Username: "max.bus@list.ru",
            Password: "PBLZy3H7kAGerxhYYH7t",
            To: 'max.bus@list.ru',
            From: "max.bus@list.ru",
            Subject: `Запрос ${xname} на звонок`,
            Body: `Клиент ${xname} запросил звонок на номер ${xphone}. \n 
            Запрос поступил ${getCurrData()}`,
        }).then(
            message => alert("Запрос успешно отправлен")
        );
        popUp.classList.remove('active');
    }
}

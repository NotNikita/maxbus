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



// const phoneNumber = document.getElementById('phoneNumber');
// const clientName = document.getElementById('client_name');
const sendDataBtn = document.getElementById('sendDataPopUp');
const clName = document.getElementById('client_name');
const phone = document.getElementById('phoneNumber');


function sendData(form, client_name, phone_number) {
    if (client_name != null && phone_number.value != null) {
        Email.send({
            Host: "smtp.mail.ru",
            Username: "max.bus@list.ru",
            Password: "PBLZy3H7kAGerxhYYH7t",
            To: 'max.bus@list.ru',
            From: "max.bus@list.ru",
            Subject: `Запрос ${client_name.value} на звонок`,
            Body: `Клиент ${client_name.value} запросил звонок на номер ${phone_number.value}. \n 
            Запрос поступил ${getCurrData()}`,
        }).then(
            message => alert("Запрос успешно отправлен")
        );
        popUp.classList.remove('active');
    }
}

function getCurrData() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}
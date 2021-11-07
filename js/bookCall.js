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


function sendData() {
    const clName = document.getElementById('client_name').value;
    console.log(clName);
    // its fucking null
    const phone = document.getElementById('phoneNumber').value;
    console.log(phone);
    sleep(2000);
    // if (clName != null && phone != null) {
    //     Email.send({
    //         Host: "smtp.mail.ru",
    //         Username: "max.bus@list.ru",
    //         Password: "PBLZy3H7kAGerxhYYH7t",
    //         To: 'max.bus@list.ru',
    //         From: "max.bus@list.ru",
    //         Subject: `Запрос ${clName} на звонок`,
    //         Body: `Клиент ${clName} запросил звонок на номер ${phone}. \n 
    //         Запрос поступил ${getCurrData()}`,
    //     }).then(
    //         message => alert("Запрос успешно отправлен")
    //     );
    //     popUp.classList.remove('active');
    // }
}

function getCurrData() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}
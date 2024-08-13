

document.getElementById('enviar').addEventListener('click', (evt) => {
    const email = document.querySelector('.email').value;
    let msgCampo = document.querySelector('.msg-campo')
    evt.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
       
        msgCampo.classList.add('active');

    } else {
        msgCampo.classList.remove('active');
        msgCampo.classList.add('enviado');
        msgCampo.textContent = 'Email sent!';
        document.querySelector('.email').value ="";

        setTimeout(() => {
           
            msgCampo.classList.remove('enviado')
        }, 1000);
    }
});
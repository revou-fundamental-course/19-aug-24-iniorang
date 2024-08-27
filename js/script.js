document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('pesan');
    const enteredName = prompt('Halo, nama kamu siapa?:');
    if (enteredName) {
        if (welcomeMessage) {
            welcomeMessage.textContent = `Halo ${enteredName}, Selamat datang di Websiteku`;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('welcome');
    const enteredName = prompt('Halo, nama kamu siapa?:');
    if (enteredName) {
        if (welcomeMessage) {
            welcomeMessage.textContent = `Halo ${enteredName}, Selamat datang di Websiteku`;
        }
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const tgl = document.getElementById('tgl').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    if (nama && tgl && gender && pesan) {
        const hariini = new Date().toLocaleString();

        console.debug(pesan)
        console.debug(nama)
        console.debug(tgl)
        console.debug(gender)
        const hasilText = `Kini Pukul : ${hariini}\n\nNama: ${nama}\nTanggal Lahir: ${tgl}\nJenis Kelamin: ${gender}\nPesan: ${pesan}`;
        document.getElementById('hasil').value = hasilText;
    } else {
        alert('Semua kolom harus diisi!');
        return;
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


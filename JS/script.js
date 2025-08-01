// 1. Welcoming Speech (Sesuai instruksi #4)
// Fungsi ini akan meminta nama pengguna dan menampilkannya di span #welcome-speech
function updateWelcomeSpeech() {
    let userName = prompt("Halo! Siapa nama Anda?"); // Meminta nama dari pengguna
    const welcomeSpeechElement = document.getElementById('welcome-speech');

    // Memastikan elemen ada dan nama tidak kosong atau dibatalkan
    if (welcomeSpeechElement && userName) {
        welcomeSpeechElement.textContent = userName; // Menampilkan nama di elemen span
    } else if (welcomeSpeechElement) {
        welcomeSpeechElement.textContent = "Pengunjung"; // Jika nama kosong/dibatalkan, gunakan default
    }
}

// Panggil fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', updateWelcomeSpeech);


// 2. Validate Form "Message Us" & Show Value (Sesuai instruksi #5)
function validateForm() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const resultFormElement = document.getElementById('result-form');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Reset pesan error/hasil sebelumnya
    resultFormElement.textContent = '';
    resultFormElement.style.color = ''; // Hapus warna merah jika sebelumnya error

    // Validasi input
    if (name === '') {
        alert('Nama tidak boleh kosong!');
        nameInput.focus();
        return false;
    }

    if (email === '') {
        alert('Email tidak boleh kosong!');
        emailInput.focus();
        return false;
    }

    // Validasi format email sederhana
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Format email tidak valid!');
        emailInput.focus();
        return false;
    }

    if (message === '') {
        alert('Pesan tidak boleh kosong!');
        messageInput.focus();
        return false;
    }

    // Jika semua validasi lolos, tampilkan nilai input
    const submissionTime = new Date().toLocaleString(); // Waktu pengiriman

    resultFormElement.innerHTML = `
        <strong>Waktu Pengiriman:</strong> ${submissionTime}<br>
        <strong>Nama:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Pesan:</strong> ${message}
    `;

    // Bersihkan form setelah sukses (opsional)
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Pesan Anda berhasil dikirim!');
    return true; // Menandakan validasi berhasil
}
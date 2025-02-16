document.addEventListener("DOMContentLoaded", function() {
    let darkModeToggle = document.getElementById("dark-mode-toggle");
    let darkModeIcon = document.getElementById("dark-mode-icon");

    // Cek apakah dark mode sebelumnya aktif
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeIcon.innerHTML = '☀️'; // Matahari (terang)
    }

    // Toggle Dark Mode saat tombol diklik
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle('dark-mode');
        let isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);

        // Ganti ikon sesuai mode
        darkModeIcon.innerHTML = isDarkMode ? '☀️' : '🌙';
    });
});

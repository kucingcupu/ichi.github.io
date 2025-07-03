// assets/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Memilih elemen-elemen yang diperlukan dari DOM
    // Pastikan selector ini cocok persis dengan kelas di HTML Anda
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');
    const navLinks = document.querySelector('.nav-links'); // Daftar tautan navigasi (navigasi itu sendiri)
    const body = document.body;
    const overlay = document.querySelector('.mobile-nav-overlay');

    // Cek apakah semua elemen ditemukan sebelum menambahkan event listener
    // Ini penting untuk mencegah error jika elemen tidak ada di halaman
    if (menuToggle && mobileNavContainer && navLinks && overlay) {

        // Fungsi untuk mengaktifkan/menonaktifkan menu mobile
        function toggleMobileMenu() {
            // Toggle kelas 'active' pada container utama mobile nav
            // Ini akan memicu transisi CSS untuk menampilkan/menyembunyikan menu dan overlay
            mobileNavContainer.classList.toggle('active');

            // Toggle kelas 'active' pada tombol toggle itu sendiri
            // Ini akan memicu animasi perubahan ikon hamburger menjadi 'X'
            menuToggle.classList.toggle('active');

            // Toggle kelas 'no-scroll' pada elemen <body>
            // Ini akan mencegah scrolling pada halaman utama saat menu mobile terbuka
            body.classList.toggle('no-scroll');
        }

        // Menambahkan event listener untuk tombol toggle (hamburger)
        // Ketika tombol diklik, fungsi toggleMobileMenu akan dijalankan
        menuToggle.addEventListener('click', toggleMobileMenu);

        // Menambahkan event listener untuk overlay (area gelap di luar menu)
        // Ketika overlay diklik, fungsi toggleMobileMenu juga akan dijalankan
        // Ini memungkinkan pengguna menutup menu dengan mengklik di luar area navigasi
        overlay.addEventListener('click', toggleMobileMenu);

        // Opsional: Menambahkan event listener ke setiap link navigasi
        // Tujuannya agar menu otomatis tertutup saat salah satu link diklik
        navLinks.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function() {
                // Pastikan ini hanya berjalan jika lebar layar sesuai untuk tampilan mobile
                // Mencegah menu desktop tertutup jika ada event click pada link-nya
                if (window.innerWidth <= 768) { // Sesuaikan breakpoint ini dengan media query CSS Anda
                    toggleMobileMenu(); // Tutup menu
                }
            });
        });
    } else {
        // Pesan error di konsol jika ada elemen yang tidak ditemukan
        // Ini sangat membantu untuk debugging jika toggle tidak berfungsi
        console.error('Salah satu elemen navigasi mobile tidak ditemukan di DOM. Periksa HTML dan selector JavaScript Anda:', {
            menuToggle: menuToggle,
            mobileNavContainer: mobileNavContainer,
            navLinks: navLinks,
            overlay: overlay
        });
    }
});
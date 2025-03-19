document.addEventListener("DOMContentLoaded", function () {
    // Animasi Buku Bergerak Naik Turun (Hanya Jika Ada Elemen book)
    let book = document.getElementById("book");
    if (book) {
        let position = 0;
        let direction = 1; // 1 untuk turun, -1 untuk naik
        let isOpen = true;

        function animateBook() {
            position += direction * 3; // Kecepatan gerak atas-bawah

            if (position >= window.innerHeight - 150 || position <= 50) {
                direction *= -1; // Balik arah jika mencapai batas atas/bawah
                isOpen = !isOpen;
                book.textContent = isOpen ? "📖" : "📕"; // Berubah antara terbuka 📖 dan tertutup 📕
            }

            book.style.top = position + "px";
            requestAnimationFrame(animateBook);
        }

        // Set posisi awal buku
        book.style.position = "absolute";
        book.style.left = "50%";
        book.style.transform = "translateX(-50%)";

        animateBook();
    }

    // Pop-up di Halaman About (Hanya Jika Ada Elemen popup, profile, dan showProfile)
    let popup = document.getElementById("popup");
    let profile = document.getElementById("profile");
    let showProfileBtn = document.getElementById("showProfile");

    if (popup && profile && showProfileBtn) {
        setTimeout(() => {
            popup.style.display = "block";
        }, 200); // Muncul setelah 0,2 detik

        showProfileBtn.addEventListener("click", function () {
            popup.style.display = "none";
            profile.style.display = "block"; // Tampilkan biodata
        });
    }
});

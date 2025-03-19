document.addEventListener("DOMContentLoaded", function () {
    let book = document.getElementById("book");
    let position = 0;
    let direction = 1; // 1 untuk turun, -1 untuk naik
    let isOpen = true;

    function animateBook() {
        position += direction * 3; // Kecepatan gerak atas-bawah

        if (position >= window.innerHeight - 100 || position <= 0) {
            direction *= -1; // Balik arah jika mencapai batas atas/bawah
            isOpen = !isOpen;
            book.textContent = isOpen ? "📖" : "📕"; // Berubah antara terbuka 📖 dan tertutup 📕
        }

        book.style.top = position + "px";

        requestAnimationFrame(animateBook);
    }

    animateBook();
});

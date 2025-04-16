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
<script>
    function toggleChatbot() {
        const chatbot = document.getElementById("chatbot");
        chatbot.style.display = chatbot.style.display === "none" ? "flex" : "none";
    }

    function getBotReply(input) {
        input = input.toLowerCase();
        if (input.includes("halo") || input.includes("hai")) return "Halo juga! Ada yang bisa aku bantu? 😊";
        if (input.includes("buku")) return "Kamu cari buku apa nih? Kita punya banyak koleksi seru! 📚";
        if (input.includes("event")) return "Event terdekat: Seminar Digital Reading tanggal 15 Mei 2025 ya! ✨";
        if (input.includes("nama") || input.includes("siapa kamu")) return "Aku chatbot perpustakaan Angelika, siap bantu kamu cari ilmu! 🤖💕";
        if (input.includes("terima kasih")) return "Sama-sama sayangku 😍 Senang bisa bantu!";
        return "Hmm... aku belum ngerti maksudmu. Coba tanya yang lain ya! 😊💕";
    }

    function sendMessage() {
        const userInput = document.getElementById("userInput").value;
        if(userInput.trim() !== "") {
            const chatbox = document.getElementById("chatbox");
            chatbox.innerHTML += `<div class="message user">${userInput}</div>`;
            document.getElementById("userInput").value = "";

            setTimeout(() => {
                const reply = getBotReply(userInput);
                chatbox.innerHTML += `<div class="message bot">${reply}</div>`;
                chatbox.scrollTop = chatbox.scrollHeight;
            }, 500);
        }
    }
function toggleEventPopup() {
    const popup = document.getElementById("event-popup");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
}
</script>

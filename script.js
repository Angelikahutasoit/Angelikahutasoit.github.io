document.addEventListener("DOMContentLoaded", function () {
    // Buku yang mengikuti kursor
    let cursorBook = document.getElementById("cursor-book");

    document.addEventListener("mousemove", function (event) {
        let x = event.pageX;
        let y = event.pageY;

        // Efek smooth saat mengikuti kursor
        cursorBook.style.transform = translate(${x}px, ${y}px);
    });

    // Animasi buku di sudut kiri bawah dan kanan atas
    function animateCornerBook(book, startY, range) {
        let position = startY;
        let direction = 1; // 1 untuk naik, -1 untuk turun

        function moveBook() {
            position += direction * 2; // Kecepatan gerak naik turun

            if (position >= startY + range || position <= startY - range) {
                direction *= -1; // Balik arah jika mencapai batas
            }

            book.style.transform = translateY(${position}px);

            requestAnimationFrame(moveBook);
        }

        moveBook();
    }

    let leftBook = document.getElementById("left-book");
    let rightBook = document.getElementById("right-book");

    animateCornerBook(leftBook, 10, 15); // Buku kiri bawah bergerak 15px
    animateCornerBook(rightBook, 10, 20); // Buku kanan atas bergerak 20px
});

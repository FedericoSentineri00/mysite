document.addEventListener("DOMContentLoaded", function () {
    // Modal e l'immagine da mostrare
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    // Bottone per chiudere il modal
    const closeBtn = document.getElementById("closeBtn");

    // Quando un bottone con la classe 'openImageBtn' viene cliccato
    const openImageBtns = document.querySelectorAll(".openImageBtn");
    openImageBtns.forEach(function (button) {
        button.addEventListener("click", function () {
            // Ottieni il percorso dell'immagine dal parametro 'data-image'
            const imageSrc = button.getAttribute("data-image");

            // Imposta la sorgente dell'immagine grande
            modalImage.src = imageSrc;

            // Mostra il modal
            imageModal.style.display = "block";
        });
    });

    // Quando clicchi sulla X, chiudi il modal
    closeBtn.addEventListener("click", function () {
        imageModal.style.display = "none";
    });

    // Chiudi il modal anche se clicchi fuori dall'immagine
    window.addEventListener("click", function (event) {
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
    });
});

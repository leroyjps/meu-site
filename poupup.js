document.addEventListener('DOMContentLoaded', function() {
    // Exibir o pop-up ao carregar a página
    showPopup();
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

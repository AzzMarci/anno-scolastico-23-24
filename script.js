// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document fully loaded and parsed');

    // Aggiungi un'animazione sui pulsanti delle materie
    const buttons = document.querySelectorAll('.btn-group-vertical .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#007bff';
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
            button.style.transform = '';
        });

        button.addEventListener('click', () => {
            alert(`Hai selezionato la materia: ${button.textContent}`);
        });
    });
});

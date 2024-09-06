document.addEventListener('DOMContentLoaded', () => {
    const beginButton = document.getElementById('begin-button');
    const floatingWindow = document.getElementById('floating-window');
    const closeButton = document.getElementById('close-button');

    beginButton.addEventListener('click', () => {
        floatingWindow.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        floatingWindow.style.display = 'none';
    });

    // Optionally, close the floating window if clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === floatingWindow) {
            floatingWindow.style.display = 'none';
        }
    });
});


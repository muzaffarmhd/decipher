window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var container = document.querySelector('.container');
    var hiddenDiv = document.querySelector('.hidden');

    if (width <= 600) {
        if (!hiddenDiv) {
            hiddenDiv = document.createElement('div');
            hiddenDiv.className = 'hidden';
            hiddenDiv.innerHTML = '<img src="./images/q2qr.png" width="100px">';
            container.appendChild(hiddenDiv);
        }
    } else {
        if (hiddenDiv) {
            container.removeChild(hiddenDiv);
        }
    }
});


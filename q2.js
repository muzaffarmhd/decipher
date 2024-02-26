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

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (password === 'CYBERWOLF' || password === 'cyberwolf' || password === 'Cyberwolf') {
    message.innerHTML = '<p class="success">Congratulations! You entered the correct password.</p><a href="quest3.html">Next</a>';
    } else {
    message.innerHTML = '<p class="error">Oops! You didn\'t catch me.</p>';
    }
});
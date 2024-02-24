document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (password === 'agra') {
    message.innerHTML = '<p class="success">Congratulations! You entered the correct password.</p><a href="question2.html">Next</a>';
    } else {
    message.innerHTML = '<p class="error">Oops! You didn\'t catch me.</p>';
    }
});
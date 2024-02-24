window.onload = function() {
    var myString = "10101010001010";
    var container = document.querySelector('.container1');

    for (var i = 0; i < myString.length; i++) {
        var newDiv = document.createElement('div');

        if (myString[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString = "10101010001010";
    var container = document.querySelector('.container2');

    for (var i = 0; i < myString.length; i++) {
        var newDiv = document.createElement('div');

        if (myString[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString = "10101010001010";
    var container = document.querySelector('.container3');

    for (var i = 0; i < myString.length; i++) {
        var newDiv = document.createElement('div');

        if (myString[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString = "10101010001010";
    var container = document.querySelector('.container4');

    for (var i = 0; i < myString.length; i++) {
        var newDiv = document.createElement('div');

        if (myString[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString = "10101010001010";
    var container = document.querySelector('.container5');

    for (var i = 0; i < myString.length; i++) {
        var newDiv = document.createElement('div');

        if (myString[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
};

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (password === 'CYBERWOLF') {
    message.innerHTML = '<p class="success">Congratulations! You entered the correct password.</p><a href="question3.html">Next</a>';
    } else {
    message.innerHTML = '<p class="error">Oops! You didn\'t catch me.</p>';
    }
});
window.onload = function() {
    var myString = "01000100";
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
    var myString2 = "01000101";
    var container = document.querySelector('.container2');

    for (var i = 0; i < myString2.length; i++) {
        var newDiv = document.createElement('div');

        if (myString2[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString2[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString3 = "01000011";
    var container = document.querySelector('.container3');

    for (var i = 0; i < myString3.length; i++) {
        var newDiv = document.createElement('div');

        if (myString3[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString3[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString4 = "01001001";
    var container = document.querySelector('.container4');

    for (var i = 0; i < myString4.length; i++) {
        var newDiv = document.createElement('div');

        if (myString4[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString4[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString5 = "01010000";
    var container = document.querySelector('.container5');

    for (var i = 0; i < myString5.length; i++) {
        var newDiv = document.createElement('div');

        if (myString5[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString5[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString6 = "01001000";
    var container = document.querySelector('.container6');

    for (var i = 0; i < myString6.length; i++) {
        var newDiv = document.createElement('div');

        if (myString6[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString6[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString7 = "01000101";
    var container = document.querySelector('.container7');

    for (var i = 0; i < myString7.length; i++) {
        var newDiv = document.createElement('div');

        if (myString7[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString7[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString8 = "01010010";
    var container = document.querySelector('.container8');

    for (var i = 0; i < myString8.length; i++) {
        var newDiv = document.createElement('div');

        if (myString8[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString8[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString9 = "00110010";
    var container = document.querySelector('.container9');

    for (var i = 0; i < myString9.length; i++) {
        var newDiv = document.createElement('div');

        if (myString9[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString9[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
    var myString10 = "00110100";
    var container = document.querySelector('.container10');

    for (var i = 0; i < myString10.length; i++) {
        var newDiv = document.createElement('div');

        if (myString10[i] === '1') {
            newDiv.className = 'thick';
        } else if (myString10[i] === '0') {
            newDiv.className = 'thin';
        }

        container.appendChild(newDiv);
    }
};

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (password === 'DECIPHER24') {
    message.innerHTML = '<p class="success">Congratulations! You entered the correct password.</p><a href="fourquest.html" class="submit-bn">Next</a>';
    } else {
    message.innerHTML = '<p class="error">Oops! You didn\'t catch me.</p>';
    }
});
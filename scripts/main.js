var image = document.querySelector('img');

image.onclick = function() {
    var mySrc = image.getAttribute('src');
    if(mySrc === 'images/randy.jpg') {
        image.setAttribute('src', 'images/juss.jpg');
    } else {
        image.setAttribute('src', 'images/randy.jpg');
    }
}

var button = document.querySelector('button');
var heading = document.querySelector('h2');

function setUser() {
    var name = prompt('Please enter your name.');
    localStorage.setItem('name', name);
    heading.textContent = 'Justice es the best ' + name + '!';
}

if(!localStorage.getItem('name')) {
    setUser();
} else {
    var stored = localStorage.getItem('name');
    heading.textContent = 'Justice is the best ' + stored + '!';
}

button.onclick = function() {
    setUser();
}
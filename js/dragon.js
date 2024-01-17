function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

var int = parseInt(getCookieValue('int'));
var str = parseInt(getCookieValue('str'));
var luck = parseInt(getCookieValue('luck'));

document.getElementById("statBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    
    if (randomNum <= 0.125 * (luck + int + (2 * str))) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/dragonfightW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/dragonfightL.html';
    }
});

function chance() {
    var footer1 = document.querySelector(".footer1");
    footer1.innerHTML = `Fight scales off luck, intelligence, and double strength: ${0.125 * (luck + int + (2 * str))}% of success`
}

chance();

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

var luck = parseInt(getCookieValue('luck'));
var int = parseInt(getCookieValue('int'));

document.getElementById("fightBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum <= 1.25 * luck) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elffightW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elffightL.html';
    }
});

document.getElementById("talkBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum <= 1.25 * int) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elftalkW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elftalkL.html';
    }
});

function chance() {
    var footer1 = document.querySelector(".footer1");
    footer1.innerHTML = `Fight scales off luck: ${1.25 * luck}% of success`
    var footer2 = document.querySelector(".footer2");
    footer2.innerHTML = `Talk scales off intelligence: ${1.25 * int}% of success`
}

chance();



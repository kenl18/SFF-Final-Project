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

document.getElementById("fightBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var luck = parseInt(getCookieValue('luck'));

    if (randomNum <= 1.25 * luck) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elffightW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elffightL.html';
    }
});

document.getElementById("talkBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var int = parseInt(getCookieValue('int'));

    if (randomNum <= 1.25 * int) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elftalkW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/elftalkL.html';
    }
});
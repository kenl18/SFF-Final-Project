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

document.getElementById("statBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var int = parseInt(getCookieValue('int'));

    if (randomNum <= 2.5 * int) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/stealW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/stealL.html';
    }
});
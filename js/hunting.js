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

document.getElementById("statBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum <= 0.25 * luck) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/fishW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/fishL.html';
    }
});

function chance() {
    var footer = document.querySelector(".footer");
    footer.innerHTML = `Scales off luck: ${0.25 * luck}% of success`
}
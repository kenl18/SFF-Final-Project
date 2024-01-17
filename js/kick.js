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

var str = parseInt(getCookieValue('str'));

document.getElementById("statBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum <= 2.5 * str) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/homefightW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/homefightL.html';
    }
});

function chance() {
    var footer = document.querySelector(".footer");
    footer.innerHTML = `Scales off Strength: ${2.5 * str}% of success`
}

chance();
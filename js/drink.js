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
var int = parseInt(getCookieValue('int'));
var luck = parseInt(getCookieValue('luck'));

var strInc = 0;
var intInc = 0;
var luckInc = 0;

function drink() {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum <= 15) {
        strInc = -1;
    } else if (randomNum <= 30) {
        intInc = -1;
    } else if (randomNum <= 45) {
        luckInc = -1;
    } else if (randomNum <= 60) {
        strInc = 1;
    } else if (randomNum <= 75) {
        intInc = 1;
    } else if (randomNum <= 90) {
        luckInc = 1;
    } else if (randomNum <= 95) {
        strInc = -1;
        intInc = -1;
        luckInc = -1;
    } else {
        strInc = 1;
        intInc = 1;
        luckInc = 1;
    }
}

drink();
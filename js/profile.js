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

const str = getCookieValue('str');
const int = getCookieValue('int');
const luck = getCookieValue('luck');


console.log(str);
var strText = document.querySelector(".str")
strText.innerHTML = "Strength: " + str;
var intText = document.querySelector(".int")
intText.innerHTML = "Intelligence: " + int;
var luckText = document.querySelector(".luck")
luckText.innerHTML = "Luck: " + luck;
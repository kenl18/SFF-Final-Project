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

function money() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var moneyText = document.querySelector(".monah")

    if (randomNum <= 5) {
        moneyText.innerHTML = "Super Rich: 20000";
    } else if (randomNum <= 15) {
        moneyText.innerHTML = "Rich: 10000";
    } else if (randomNum <= 30) {
        moneyText.innerHTML = "Middle Class: 5000";
    } else if (randomNum <= 50) {
        moneyText.innerHTML = "Average: 2500";
    } else if (randomNum <= 80) {
        moneyText.innerHTML = "No Money: 0";
    } else {
        moneyText.innerHTML = "Debt-Ridden: -2500";
    }
}

function closePopup() {
    document.getElementById("popupInfo").style.display = "none";
}

document.getElementById("monahInfo").addEventListener("click", function() {
    document.getElementById("popupInfo").style.display = "block";
});

money();
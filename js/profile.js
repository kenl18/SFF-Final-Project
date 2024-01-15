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
console.log(str, int, luck)

function stats() {
    var strText = document.querySelector(".str")
    strText.innerHTML = "Strength: " + str;
    var intText = document.querySelector(".int")
    intText.innerHTML = "Intelligence: " + int;
    var luckText = document.querySelector(".luck")
    luckText.innerHTML = "Luck: " + luck;
}

function money() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var moneyText = document.querySelector(".monah")

    if (randomNum <= 5) {
        moneyText.innerHTML = "Super Rich: 20000";
        document.cookie = `money=20000; path=/`;
    } else if (randomNum <= 15) {
        moneyText.innerHTML = "Rich: 10000";
        document.cookie = `money=10000; path=/`;
    } else if (randomNum <= 30) {
        moneyText.innerHTML = "Middle Class: 5000";
        document.cookie = `money=5000; path=/`;
    } else if (randomNum <= 50) {
        moneyText.innerHTML = "Average: 2500";
        document.cookie = `money=2500; path=/`;
    } else if (randomNum <= 80) {
        moneyText.innerHTML = "No Money: 0";
        document.cookie = `money=0; path=/`;
    } else {
        moneyText.innerHTML = "Debt-Ridden: -2500";
        document.cookie = `money=-2500; path=/`;
    }
}

function closePopup() {
    document.getElementById("popupInfo").style.display = "none";
}

document.getElementById("monahInfo").addEventListener("click", function() {
    document.getElementById("popupInfo").style.display = "block";
});

function trait() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var traitText = document.querySelector(".trait")
    if (randomNum <= 40) {
        traitText.innerHTML = "Trait: None";
    } else if (randomNum <= 55) {
        traitText.innerHTML = "Trait: +1 Strength";
        str += 1;
        document.cookie = `str=${str}; path=/`;
    } else if (randomNum <= 70) {
        traitText.innerHTML = "Trait: +1 Intelligence";
        int += 1;
        document.cookie = `int=${int}; path=/`;
    } else if (randomNum <= 85) {
        traitText.innerHTML = "Trait: +1 Luck";
        luck += 1;
        document.cookie = `luck=${luck}; path=/`;
    } else if (randomNum <= 90) {
        traitText.innerHTML = "Trait: +2 Strength";
        str += 2;
        document.cookie = `str=${str}; path=/`;
    } else if (randomNum <= 95) {
        traitText.innerHTML = "Trait: +2 Intelligence";
        int += 2;
        document.cookie = `int=${int}; path=/`;
    } else {
        traitText.innerHTML = "Trait: +2 Luck";
        luck += 1;
        document.cookie = `luck=${luck}; path=/`;
    }
}

money();
stats();
trait();
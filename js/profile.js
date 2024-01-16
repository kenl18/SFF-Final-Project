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


function stats() {
    var strText = document.querySelector(".str")
    strText.innerHTML = "Strength: " + str;
    var intText = document.querySelector(".int")
    intText.innerHTML = "Intelligence: " + int;
    var luckText = document.querySelector(".luck")
    luckText.innerHTML = "Luck: " + luck;
}

function trait() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var traitText = document.querySelector(".trait")
    if (randomNum <= 40) {
        traitText.innerHTML = "Trait: None";
    } else if (randomNum <= 55) {
        traitText.innerHTML = "Trait: +1 Strength";
        str += 1;
        document.cookie = `str=${str}; path=/`;
        var strText = document.querySelector(".str");
        strText.innerHTML = `Strength: ${str - 1} + 1 = ${str}`;
    } else if (randomNum <= 70) {
        traitText.innerHTML = "Trait: +1 Intelligence";
        int += 1;
        document.cookie = `int=${int}; path=/`;
        var intText = document.querySelector(".int");
        intText.innerHTML = `Intelligence: ${int - 1} + 1 = ${int}`;
    } else if (randomNum <= 85) {
        traitText.innerHTML = "Trait: +1 Luck";
        luck += 1;
        document.cookie = `luck=${luck}; path=/`;
        var luckText = document.querySelector(".luck");
        luckText.innerHTML = `Luck: ${luck - 1} + 1 = ${luck}`;
    } else if (randomNum <= 90) {
        traitText.innerHTML = "Trait: +2 Strength";
        str += 2;
        document.cookie = `str=${str}; path=/`;
        var strText = document.querySelector(".str");
        strText.innerHTML = `Strength: ${str - 2} + 2 = ${str}`;
    } else if (randomNum <= 95) {
        traitText.innerHTML = "Trait: +2 Intelligence";
        int += 2;
        document.cookie = `int=${int}; path=/`;
        var intText = document.querySelector(".int");
        intText.innerHTML = `Intelligence: ${int - 2} + 2 = ${int}`;
    } else {
        traitText.innerHTML = "Trait: +2 Luck";
        luck += 1;
        document.cookie = `luck=${luck}; path=/`;
        var luckText = document.querySelector(".luck");
        luckText.innerHTML = `Luck: ${luck - 2} + 2 = ${luck}`;
    }
}

stats();
trait();
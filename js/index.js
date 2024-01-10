function btnFunc1() {
    document.getElementById("btn1").classList.add("activeBtn");
    document.getElementById("btn1").classList.remove("deactivatedBtn");
    document.getElementById("btn2").classList.add("deactivatedBtn");
    document.getElementById("btn2").classList.remove("activeBtn");
    document.getElementById("btn3").classList.add("deactivatedBtn");
    document.getElementById("btn3").classList.remove("activeBtn");
    document.getElementById("btn4").classList.add("deactivatedBtn");
    document.getElementById("btn4").classList.remove("activeBtn");
    activeButton();
}

function btnFunc2() {
    document.getElementById("btn2").classList.add("activeBtn");
    document.getElementById("btn2").classList.remove("deactivatedBtn");
    document.getElementById("btn1").classList.add("deactivatedBtn");
    document.getElementById("btn1").classList.remove("activeBtn");
    document.getElementById("btn3").classList.add("deactivatedBtn");
    document.getElementById("btn3").classList.remove("activeBtn");
    document.getElementById("btn4").classList.add("deactivatedBtn");
    document.getElementById("btn4").classList.remove("activeBtn");
    activeButton();
}

function btnFunc3() {
    document.getElementById("btn3").classList.add("activeBtn");
    document.getElementById("btn3").classList.remove("deactivatedBtn");
    document.getElementById("btn2").classList.add("deactivatedBtn");
    document.getElementById("btn2").classList.remove("activeBtn");
    document.getElementById("btn1").classList.add("deactivatedBtn");
    document.getElementById("btn1").classList.remove("activeBtn");
    document.getElementById("btn4").classList.add("deactivatedBtn");
    document.getElementById("btn4").classList.remove("activeBtn");
    activeButton();
}

function btnFunc4() {
    document.getElementById("btn4").classList.add("activeBtn");
    document.getElementById("btn4").classList.remove("deactivatedBtn");
    document.getElementById("btn2").classList.add("deactivatedBtn");
    document.getElementById("btn2").classList.remove("activeBtn");
    document.getElementById("btn3").classList.add("deactivatedBtn");
    document.getElementById("btn3").classList.remove("activeBtn");
    document.getElementById("btn1").classList.add("deactivatedBtn");
    document.getElementById("btn1").classList.remove("activeBtn");
    activeButton();
}

async function activeButton() {
    var button = document.querySelector('.activeBtn');
    var text = document.querySelector('.chosenClass');
    console.log(button.value);
    text.innerHTML = "Chosen Class: " + button.value;
}

function statGeneration() {
    var button = document.querySelector('.activeBtn');
    if (button.value == "Hasagi") {
        var str = Math.floor(Math.random() * 5 + 15)
        var int = Math.floor(Math.random() * 5 + 3)
        var luck = Math.floor(Math.random() * 5 + 3)
    }
    if (button.value == "Aldous") {
        var int = Math.floor(Math.random() * 5 + 15)
        var str = Math.floor(Math.random() * 5 + 3)
        var luck = Math.floor(Math.random() * 5 + 3)
    }
    if (button.value == "Geraldo") {
        var luck = Math.floor(Math.random() * 5 + 15)
        var str = Math.floor(Math.random() * 5 + 3)
        var int = Math.floor(Math.random() * 5 + 3)
    }
    if (button.value == "Jack") {
        var int = Math.floor(Math.random() * 5 + 7)
        var str = Math.floor(Math.random() * 5 + 7)
        var luck = Math.floor(Math.random() * 5 + 7)
    }
    console.log(str);
    console.log(int);
    console.log(luck)
}
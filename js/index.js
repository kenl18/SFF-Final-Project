document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("btn1").classList.add("activeBtn");
    document.getElementById("btn1").classList.remove("deactivatedBtn");
    document.getElementById("btn2").classList.add("deactivatedBtn");
    document.getElementById("btn2").classList.remove("activeBtn");
    document.getElementById("btn3").classList.add("deactivatedBtn");
    document.getElementById("btn3").classList.remove("activeBtn");
    document.getElementById("btn4").classList.add("deactivatedBtn");
    document.getElementById("btn4").classList.remove("activeBtn");
    activeButton();
});

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("btn2").classList.add("activeBtn");
    document.getElementById("btn2").classList.remove("deactivatedBtn");
    document.getElementById("btn1").classList.add("deactivatedBtn");
    document.getElementById("btn1").classList.remove("activeBtn");
    document.getElementById("btn3").classList.add("deactivatedBtn");
    document.getElementById("btn3").classList.remove("activeBtn");
    document.getElementById("btn4").classList.add("deactivatedBtn");
    document.getElementById("btn4").classList.remove("activeBtn");
    activeButton();
});

document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("btn3").classList.add("activeBtn");
    document.getElementById("btn3").classList.remove("deactivatedBtn");
    document.getElementById("btn2").classList.add("deactivatedBtn");
    document.getElementById("btn2").classList.remove("activeBtn");
    document.getElementById("btn1").classList.add("deactivatedBtn");
    document.getElementById("btn1").classList.remove("activeBtn");
    document.getElementById("btn4").classList.add("deactivatedBtn");
    document.getElementById("btn4").classList.remove("activeBtn");
    activeButton();
});

document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("btn4").classList.add("activeBtn");
    document.getElementById("btn4").classList.remove("deactivatedBtn");
    document.getElementById("btn2").classList.add("deactivatedBtn");
    document.getElementById("btn2").classList.remove("activeBtn");
    document.getElementById("btn3").classList.add("deactivatedBtn");
    document.getElementById("btn3").classList.remove("activeBtn");
    document.getElementById("btn1").classList.add("deactivatedBtn");
    document.getElementById("btn1").classList.remove("activeBtn");
    activeButton();
});

async function activeButton() {
    var button = document.querySelector('.activeBtn');
    var text = document.querySelector('.chosenClass');
    console.log(button.value);
    text.innerHTML = "Chosen Class: " + button.value;
}

let str, int, luck;

document.getElementById("statBtn").addEventListener("click", function () {
    var button = document.querySelector('.activeBtn');
    if (button.value == "Hasagi") {
        str = Math.floor(Math.random() * 5 + 15)
        int = Math.floor(Math.random() * 5 + 3)
        luck = Math.floor(Math.random() * 5 + 3)
    }
    if (button.value == "Aldous") {
        int = Math.floor(Math.random() * 5 + 15)
        str = Math.floor(Math.random() * 5 + 3)
        luck = Math.floor(Math.random() * 5 + 3)
    }
    if (button.value == "Geraldo") {
        luck = Math.floor(Math.random() * 5 + 15)
        str = Math.floor(Math.random() * 5 + 3)
        int = Math.floor(Math.random() * 5 + 3)
    }
    if (button.value == "Jack") {
        int = Math.floor(Math.random() * 5 + 7)
        str = Math.floor(Math.random() * 5 + 7)
        luck = Math.floor(Math.random() * 5 + 7)
    }
});

export {str, int, luck};
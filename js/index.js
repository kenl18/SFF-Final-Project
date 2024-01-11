var str, int, luck;

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
    str = Math.floor(Math.random() * 5 + 15)
    int = Math.floor(Math.random() * 5 + 3)
    luck = Math.floor(Math.random() * 5 + 3)
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
    int = Math.floor(Math.random() * 5 + 15)
    str = Math.floor(Math.random() * 5 + 3)
    luck = Math.floor(Math.random() * 5 + 3)
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
    luck = Math.floor(Math.random() * 5 + 15)
    str = Math.floor(Math.random() * 5 + 3)
    int = Math.floor(Math.random() * 5 + 3)
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
    int = Math.floor(Math.random() * 5 + 7)
    str = Math.floor(Math.random() * 5 + 7)
    luck = Math.floor(Math.random() * 5 + 7)
});

async function activeButton() {
    var button = document.querySelector('.activeBtn');
    var text = document.querySelector('.chosenClass');
    text.innerHTML = "Chosen Class: " + button.value;
}

document.getElementById("statBtn").addEventListener("click", function () {
    document.cookie = `str=${str}; path=/`;
    document.cookie = `int=${int}; path=/`;
    document.cookie = `luck=${luck}; path=/`;
});
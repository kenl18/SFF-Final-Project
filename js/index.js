function btnFunc1() {
    document.getElementById("btn1").classList.add("activeBtn");
    document.getElementById("btn1").classList.remove("deactivatedBtn");
    document.getElementById("btn2").classList.add("deactivatedBtn");
    document.getElementById("btn2").classList.remove("activeBtn");
    document.getElementById("btn3").classList.add("deactivatedBtn");
    document.getElementById("btn3").classList.remove("activeBtn");
    document.getElementById("btn4").classList.add("deactivatedBtn");
    document.getElementById("btn4").classList.remove("activeBtn");
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
}
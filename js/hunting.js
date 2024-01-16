document.getElementById("statBtn").addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    var luck = parseInt(getCookieValue('luck'));

    if (randomNum <= 0.25 * luck) {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/fishW.html';
    } else {
        window.location.href = 'https://kenl18.github.io/SFF-Final-Project/html/fishL.html';
    }
});
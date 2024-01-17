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

var int = parseInt(getCookieValue('str'));
var luck = parseInt(getCookieValue('luck'));

function ring() {
    int += 1;
    luck += 1;
    document.cookie = `int=${int}; path=/`;
    document.cookie = `luck=${luck}; path=/`;
}

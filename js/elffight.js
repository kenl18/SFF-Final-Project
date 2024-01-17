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
var luck = parseInt(getCookieValue('luck'));

function ring() {
    str += 1;
    luck += 1;
    document.cookie = `str=${str}; path=/`;
    document.cookie = `luck=${luck}; path=/`;
}

ring();
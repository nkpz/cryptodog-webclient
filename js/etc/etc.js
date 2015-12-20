// Gets a JSON object from the specified URL.
function getJson(url, func, err) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function() {
        if (request.status >= 200 & request.status < 400) {
            // success
            func(JSON.parse(request.responseText));
        } else {
            // something went wrong
        }
    }

    request.onerror = err;

    request.send();
}

// runs fn when the window is ready
function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
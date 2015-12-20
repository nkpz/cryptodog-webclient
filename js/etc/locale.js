(function () {
    'use strict';


    Cryptodog.locale = {};
    var languageObject;

    Cryptodog.locale.set = function (locale, refresh) {
        Cryptodog.locale.buildObject(locale, refresh);
    }

    // alternate async JSON-based language object builder
    Cryptodog.locale.buildObject = function (locale, refresh) {
        console.log("Locale builder invoked")

        // make locale lowercase
        locale = locale.toLowerCase();

        // get a list of available languages
        getJson("lang/langlist.json", function (langlist) {
            console.log("Got langlist");

            // handle aliases
            if (langlist["aliases"].hasOwnProperty(locale)) {
                var newlang = langlist["aliases"][locale];
                console.log(locale + " -> " + newlang);
                locale = newlang;
            }

            // make sure language is enabled
            if (langlist["languages"].indexOf(locale) === -1) {
                // language not present, default to en-US
                console.warn("Locale '" + locale + "' was not found, defaulting to en-US.");
                locale = "en-us";
            } else {
                console.log("Locale '" + locale + "' found, loading.");
            }

            getJson("lang/" + locale + ".json", function (data) {
                console.log("Got language file '" + locale + "'");
                for (var o in data) {
                    if (data.hasOwnProperty(o)) {
                        Cryptodog.locale[o] = data[o];
                    }
                }
                console.log(refresh ? "Caller requested refresh" : "Caller did not request refresh");
                if (refresh)
                    Cryptodog.locale.refresh(data);
            }, function() {
                console.error("Unable to download language.");
            });
        }, function() {
            console.error("Unable to download language list.")
        });
    }

    // Re-render login page with new strings
    Cryptodog.locale.refresh = function (languageObject) {
        var smallType = ['bo', 'ar', 'in'];
        if (smallType.indexOf(languageObject['language']) >= 0) {
            document.body.style.fontSize = "13px";
        }
        else {
            document.body.style.fontSize = "11px";
        }
        document.body.style.fontFamily = languageObject["fonts"];
        document.getElementById("introHeader").innerText = languageObject['loginWindow']['introHeader'];
        document.getElementById("introParagraph").innerHTML = languageObject["loginWindow"]["introParagraph"];
        document.getElementById("customServer").innerText = languageObject['loginWindow']['customServer'];
        document.getElementById("conversationName").setAttribute("placeholder", languageObject['loginWindow']['conversationName']);
        document.getElementById("conversationName").setAttribute("data-utip", languageObject['loginWindow']['conversationNameTooltip']);
        document.getElementById("nickname").setAttribute("placeholder", languageObject['loginWindow']['nickname']);
        document.getElementById("loginSubmit").value = languageObject['loginWindow']['connect'];
        document.getElementById("loginInfo").innerText = languageObject['loginWindow']['enterConversation'];
        document.getElementById("logout").setAttribute("data-utip", languageObject['chatWindow']['logout']);
        document.getElementById("audio").setAttribute("data-utip", languageObject['chatWindow']['audioNotificationsOff']);
        document.getElementById("notifications").setAttribute("data-utip", languageObject['chatWindow']['desktopNotificationsOff'])
        document.getElementById("myInfo").setAttribute("data-utip", languageObject['chatWindow']['myInfo']);
        document.getElementById("status").setAttribute("data-utip", languageObject['chatWindow']['statusAvailable']);
        // sorry
        [].slice.call(document.getElementById("buddy-groupChat").querySelectorAll("buddy-groupChat") || []).forEach(function (i) { i.innerText = languageObject['chatWindow']['conversation'] });
        document.getElementById("languageSelect").innerText = document.querySelector('[data-locale=' + languageObject['language'] + ']').firstChild.textContent;
        document.querySelector("[data-login=cryptocat]").firstChild.innerText = languageObject["login"]["groupChat"];
        $('[data-utip]').utip();
        document.body.style.direction = languageObject['direction'];
        if (languageObject['direction'] === 'ltr') {
            [].slice.call(document.querySelectorAll("div#bubble #info li") || []).forEach(function (i) { i.style.backgroundPosition = "top left"; });
        }
        else {
            [].slice.call(document.querySelectorAll("div#bubble #info li") || []).forEach(function (i) { i.style.backgroundPosition = "top right"; });
        }
        document.getElementById('conversationName').focus();
    }
    // Populate language
    if (typeof (window) !== 'undefined') {
        ready(function() {
            console.log("Window ready, loading default language");
            Cryptodog.locale.set('en-US', true);
        });
    }

})()

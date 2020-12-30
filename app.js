var log = console.log;


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";


function errorHandler(error) {
    log("error occured" + error);
    alert("Something is wrong with server! Try again after sometime!")
}


function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
        })
        .catch(errorHandler)

}

function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText;
}


btnTranslate.addEventListener("click", clickHandler);
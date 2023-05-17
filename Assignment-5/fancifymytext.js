function makeBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function makeFancy() {
    let textArea = document.getElementById("userText");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function makeNormal() {
    let textArea = document.getElementById("userText");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function addMoo() {
    let textArea = document.getElementById("userText");
    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ").toUpperCase();
}
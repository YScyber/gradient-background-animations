const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const radial = document.getElementById("radial");
const conic = document.getElementById("conic");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const htmlRadial = `<div class="box radial"></div>`;
const htmlConic = `<div class="box conic"></div>`;

const cssRadial = `.radial {
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 255, 255, 0.1);
}

.radial::before {
    content: "";
    position: absolute;
    inset: -25%;
    background: repeating-radial-gradient(
        rgb(0, 255, 255, 0.3) 0 20px,
        rgb(0, 255, 255, 0.1) 20px 40px);
    z-index: -1;
    animation: scale 3s infinite linear;
}

@keyframes scale {
    from {
        transform: scale(0.5, 0.5);
        opacity: 0;
    }
    to {
        transform: scale(1, 1);
        opacity: 1;
    }
}
`;
const cssConic = `.conic {
    position: relative;
    overflow: hidden;
}

.conic::before {
    content: "";
    position: absolute;
    inset: -25%;
    background: conic-gradient(
        hsla(240, 100%, 44%, 70%),
        hsla(0, 0%, 39%, 70%),
        hsla(240, 100%, 44%, 70%));
    z-index: -1;
    animation: rotation 5s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;

let htmlRadialEntry = htmlRadial;
let htmlConicEntry = htmlConic;
let cssRadialEntry = cssRadial;
let cssConicEntry = cssConic;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    radial.value = "放射アニメーションに変更";
    conic.value = "扇形アニメーションに変更";
    fillCode();
});

radial.addEventListener("click", () => {
    if (radial.value === "放射アニメーションに変更") {
        textareaHTML.value = htmlRadialEntry;
        textareaCSS.value = cssRadialEntry;
        radial.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        radial.value = "放射アニメーションに変更";
    }
    fillCode();
});

conic.addEventListener("click", () => {
    if (conic.value === "扇形アニメーションに変更") {
        textareaHTML.value = htmlConicEntry;
        textareaCSS.value = cssConicEntry;
        conic.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        conic.value = "扇形アニメーションに変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);

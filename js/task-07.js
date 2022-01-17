// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
// обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControl = document.querySelector("input");
const text = document.querySelector("span");
text.style.fontSize = fontSizeControl.value + "px";
//console.log(fontSizeControl);
fontSizeControl.addEventListener("input", sizeControlHandler);

function sizeControlHandler(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}
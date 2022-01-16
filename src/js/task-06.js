// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }
const inputRef = document.querySelector("#validation-input");
// console.log(inputRef.dataset.length);
inputRef.addEventListener("blur", unFocusHandler);


function unFocusHandler() { 
    // console.log("текущая длина ввода", event.currentTarget.value.length);
    // console.log("заданный параметр", inputRef.dataset.length);
    // console.log("они равны?", event.currentTarget.value.length == inputRef.dataset.length);
    if (event.currentTarget.value.length == inputRef.dataset.length) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");    
    }
    else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
        
}
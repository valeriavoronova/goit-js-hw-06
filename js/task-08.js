// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
const formRef = document.querySelector(".login-form");
const inputRef = document.querySelector("input");
console.log()

formRef.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event){

    event.preventDefault();

    if( formRef.elements.password.value !== "" && formRef.elements.email.value !== "") {
        const email =  formRef.elements.email.value;
        const password = formRef.elements.password.value;
        const formData = { email, password, };
        formRef.reset();
        return console.log(formData);
    }
    
    return alert("все поля должны быть заполнены"); 
}

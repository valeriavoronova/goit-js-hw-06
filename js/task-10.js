// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const createButt = document.querySelector('button[data-create]');
const destroyButt = document.querySelector('button[data-destroy]');

inputRef.addEventListener("input", inputHandler);
createButt.addEventListener("click", createButtHandler);
destroyButt.addEventListener("click", destroyButtHandler);

function inputHandler(){
  //console.log(event.currentTarget.value);
  return inputRef.value;
}

function createButtHandler() {
  const arr =[]; 
  let size = 20;
  
  for (let i = 0; i < inputRef.value  ; i +=1){
    const div = document.createElement("div");
    size +=10;
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    arr.push(div);
  }
  boxesRef.append(...arr);
  return console.log(boxesRef);
};

function destroyButtHandler() {
  boxesRef.innerHTML = '';
  inputRef.value = "";
};



//console.log(10+ "px" + 30 );

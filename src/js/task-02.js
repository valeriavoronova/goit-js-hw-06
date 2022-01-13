const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);


for( const ingredient of ingredients){
  const productItem = document.createElement("li");
  productItem.classList.add("item");
  productItem.textContent = ingredient;
  ingredientsRef.append(productItem);
}


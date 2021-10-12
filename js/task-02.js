const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemList = document.querySelector("#ingredients")

const listOfItems = ingredients.forEach((ingredient) => {

  const itemOfList = document.createElement("li")
        itemOfList.classList.add("item")
        itemOfList.textContent = ingredient

  itemList.appendChild(itemOfList)
})

console.log(listOfItems);


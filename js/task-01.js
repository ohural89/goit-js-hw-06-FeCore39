const listOfItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listOfItems.length}`);

listOfItems.forEach((item) =>
console.log(
    `Category: ${item.firstElementChild.textContent}
    Element: ${item.lastElementChild.children.length}`)
);



// console.log("listOfItems", listOfItems);


//  Number of categories: 3 

// Category: Animals item.firstElementChild.textContent
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
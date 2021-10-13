const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listOfImgsInGallery = document.querySelector(".gallery")

const itemOfListOfImgs = document.createElement("li")


const listOfUrl = images.map(image => image.url)
console.log("listOfUrl", listOfUrl);

const listOfAlt = images.map(image => image.alt)
console.log("listOfAlt", listOfAlt);


((url, alt) => {
  const imgItem = document.createElement("img")
  imgItem.width = 320

  for (const image of images) {
    imgItem.src = images.url
    imgItem.alt = images.alt
}
})


itemOfListOfImgs.appendChild(listOfItems)

console.log(itemOfListOfImgs);


listOfImgsInGallery.appendChild(itemOfListOfImgs)

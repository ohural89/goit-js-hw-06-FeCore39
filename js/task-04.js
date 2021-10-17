let counterValue = 0;
const spanValue = document.querySelector('#value');

const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener('click', handleDecrement)

increment.addEventListener('click', handleIncrement)

function handleDecrement () {
    spanValue.textContent = counterValue -= 1
}

function handleIncrement () {
    spanValue.textContent = counterValue += 1
}

console.log(spanValue.textContent);
const validationInput = document.querySelector('#validation-input');

const validNumber =  parseInt(validationInput.dataset.length);

const onInput = (event) => {
    const userValue = event.target.value.trim().length;

    if (userValue === validNumber) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
        return

    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
};

//  без else
// const onInput = (event) => {
//     const userValue = event.target.value.trim().length;

//     if (userValue === validNumber) {
//         validationInput.classList.add('valid');
//         validationInput.classList.remove('invalid');

//         return
//     } 
//     validationInput.classList.add('invalid');
//     validationInput.classList.remove('valid');
// };


// спосіб 3
// const onInput = (event) => {
//     const userValue = event.target.value.trim().length;
//     validationInput.classList.add('invalid');


//     if (userValue === validNumber) {
//         validationInput.classList.replace('invalid', 'valid');
//         return
//     }

//     validationInput.classList.replace('valid', 'invalid');
// };


validationInput.addEventListener('blur', onInput)
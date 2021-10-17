const form = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDEfault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if(!email || !password) return alert('Все поля должни бить заполнени!');

    console.log({email, password,});

    form.reset();
};

form.addEventListener('submit', onSubmit)

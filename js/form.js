'use strict';

let aButton = document.querySelector('.choiseA');
let bButton = document.querySelector('.choiseB');
let inputName = document.querySelector('.input_name');
let emailInput = document.querySelector('.email_field');
let passField = document.querySelector('.pass_field');

aButton.addEventListener('click', function () {
    aButton.style.backgroundColor = '#1da7c0';
    bButton.style.backgroundColor = 'white';
});

bButton.addEventListener('click', function () {
    bButton.style.backgroundColor = '#1da7c0';
    aButton.style.backgroundColor = 'white';
});


function checkName() {
    if (inputName.value === '') {
        inputName.placeholder = 'Введите свое имя';
        inputName.classList.remove('input_name');
        inputName.classList.add('input_name_err');
    }
    else
        inputName.classList.remove('input_name_err');
    inputName.classList.add('input_name');
}

function checkEmail() {
    let filter = /\S+@\S+\.\S+/;
    if (!filter.test(emailInput.value)) {
        emailInput.placeholder = 'Неверный формат емейла';
        emailInput.classList.remove('email_field');
        emailInput.classList.add('email_field_err');
        return;
    } else
        emailInput.classList.remove('email_field_err');
    emailInput.classList.add('email_field');
}

function  checkPass() {
    let counter = 5;
    if (passField.value.length < counter) {
        passField.classList.remove('pass_field');
        passField.classList.add('pass_field_err');
        passField.placeholder = 'Введите новый пароль';
        return;
    }
    else
        passField.classList.remove('pass_field_err');
    passField.classList.add('pass_field');
};





'use strict';

let aButton = document.querySelector('.choiseA');
let bButton = document.querySelector('.choiseB');
let inputName = document.querySelector('.input_name');
let namePlaceholder = document.querySelector('#input_name', ':placeholder');
let emailInput = document.querySelector('.email_field');
let passField = document.querySelector('.pass_field');
let pass = passField.value;

let next = document.querySelector('#continue');
console.log(email);
aButton.addEventListener('click', function () {
    aButton.style.backgroundColor = '#1da7c0';
    bButton.style.backgroundColor = 'white';
});

bButton.addEventListener('click', function () {
    bButton.style.backgroundColor = '#1da7c0';
    aButton.style.backgroundColor = 'white';
});

/*inputName.addEventListener('change', function () {
    if (inputName.value === '') {
        inputName.placeholder = 'Введите свое имя';
        inputName.classList.remove('input_name');
        inputName.classList.add('input_name_err');
        }
        else
            inputName.classList.remove('input_name_err');
    inputName.classList.add('input_name');
});

emailInput.addEventListener('change', validateEmail);

function validateEmail(){
    let x=document.forms["commentform"]["email"].value;
    let atpos=x.indexOf("@");
    let dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        emailInput.placeholder = '(некорректный)';
        return false;
    } else {
        emailInput.placeholder = '';
        return true;
    }
}
*/

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





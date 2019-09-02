'use strict';

let buttonA = document.querySelector('.choiseA');
let buttonB = document.querySelector('.choiseB');
let buttonC = document.querySelector('.choiseC');
let nextButton = document.querySelector('.continue');
let aChoise = document.querySelector('#a_answer');
let bChoise = document.querySelector('#b_answer');
let cChoise = document.querySelector('#c_answer');
let statisticBg = document.querySelector('.statisticB');

buttonA.addEventListener('click', function (e) {
    this.style.backgroundColor = '#fc8950';
    this.style.color = 'white';
    buttonB.style.display = 'none';
    buttonC.style.display = 'none';
    nextButton.style.opacity = '1';
    aChoise.style.opacity = '1';
    statisticBg.style.opacity = '0.6';
});

buttonB.addEventListener('click', function (e) {
    this.style.backgroundColor = '#fc8950';
    this.style.color = 'white';
    buttonA.style.display = 'none';
    buttonC.style.display = 'none';
    nextButton.style.opacity = '1';
    bChoise.style.opacity = '1';
    statisticBg.style.opacity = '0.6';
});

buttonC.addEventListener('click', function (e) {
    this.style.backgroundColor = '#fc8950';
    this.style.color = 'white';
    buttonB.style.display = 'none';
    buttonA.style.display = 'none';
    nextButton.style.opacity = '1';
    cChoise.style.opacity = '1';
    statisticBg.style.opacity = '0.6';
});
'use strict';

let buttonA = document.querySelector('.choiseA');
let buttonB = document.querySelector('.choiseB');
let aChoise = document.querySelector('#a_answer');
let bChoise = document.querySelector('#b_answer');
let bg = document.querySelector('.statisticB');
let next = document.querySelector('.continue');

buttonA.addEventListener('click', function(){
    buttonB.style.display = 'none';
    buttonA.style.backgroundColor = '#fcc150';
    aChoise.style.opacity = '1';
    bg.style.opacity = '0.6';
    next.style.opacity= '1';
});

buttonB.addEventListener('click', function(){
    buttonA.style.display = 'none';
    buttonA.style.backgroundColor = '#fcc150';
    bChoise.style.opacity = '1';
    bg.style.opacity = '0.6';
    next.style.opacity = '1';
});
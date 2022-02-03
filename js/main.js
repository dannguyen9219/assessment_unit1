// DOM Elements //

let counter = document.getElementById('counter-display');
const inputNum = document.getElementById('input-number');
const plusBtn = document.getElementById('plus-button');
const minusBtn = document.getElementById('minus-button');

let totalCount = 0;

// Event Listeners //

plusBtn.addEventListener('click', plusBtnClick);

minusBtn.addEventListener('click', minusBtnClick);

plusBtn.addEventListener('mouseover', plusOverBtn);

minusBtn.addEventListener('mouseover', minusOverBtn);

plusBtn.addEventListener('mouseout', plusOutBtn);

minusBtn.addEventListener('mouseout', minusOutBtn);

// Functions //

function plusBtnClick(evt) {
    console.log("Plus button clicked")
    totalCount = totalCount + parseInt(inputNum.value);
    doMath();
};

function minusBtnClick(evt) {
    console.log("Minus button clicked")
    totalCount = totalCount - parseInt(inputNum.value)
    doMath();
};

function plusOverBtn(evt) {
    console.log('mouse in')
    plusBtn.style.boxShadow = '5px 5px 5px 5px red';
};

function minusOverBtn(evt) {
    console.log('mouse in')
    minusBtn.style.boxShadow = '5px 5px 5px 5px red';
};

function plusOutBtn(evt) {
    console.log('mouse in')
    plusBtn.style.boxShadow = '5px 2.5px 10px 0px rgb(38, 36, 36)';
};

function minusOutBtn(evt) {
    console.log('mouse in')
    minusBtn.style.boxShadow = '5px 2.5px 10px 0px rgb(38, 36, 36)';
};

function doMath() {
    counter.innerText = totalCount
    if(totalCount < 0) {
        counter.classList.add('red');
    }
    else {
        counter.classList.remove('red');
    }
};
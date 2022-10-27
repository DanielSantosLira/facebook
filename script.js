const year = document.getElementById('year');
const anoAtual = new Date();

year.innerHTML = anoAtual.getFullYear();


const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = / ^ \w + ( [ -+.' ] \w + ) * @ \w + ( [ -. ] \w + ) * \. \w + ( [ -. ] \w + ) * $ /;

form.addEventListener('submit', (event) => {
   event.preventDefault();
   nameValidate();
   emailValidate();
   mainPasswordValidate();
   comparePessword();
});

function setError(formulario) {

    campos[formulario].style.border = '1px solid #e63636';
    spans[formulario].style.display = 'block';
}
function removeError(formulario) {

    campos[formulario].style.border = '';
    spans[formulario].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0)
    }
    else {
        removeError(0)
    }
}
function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}
function mainPasswordValidate() {
    if (campos[2].value.length < 8) {
        setError(2);
    }
    else {
        removeError(2);
        comparePessword();
    }
}
function comparePessword() {
    if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        removeError(3);
    }
    else {
        setError(3);
    }
}
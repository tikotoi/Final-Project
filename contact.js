let contEmail = document.getElementById('contmail');
let openEmail = document.getElementById('openmail');

contEmail.addEventListener('click', function(){
    contEmail.classList.add('removeemail');
    openEmail.classList.add('openactive');
})

openEmail.addEventListener('click', function () {
    openEmail.classList.remove('openactive');
    contEmail.classList.remove('removeemail')
})

let contPhone = document.getElementById('contphone');
let callPhone = document.getElementById('callphone');

contPhone.addEventListener('click', function(){
    contPhone.classList.add('removephone');
    callPhone.classList.add('activephone');
})

callPhone.addEventListener('click', function () {
    contPhone.classList.remove('removephone');
    callPhone.classList.remove('activephone')
})
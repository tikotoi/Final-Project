// header
let navigation = document.getElementById('navbarlinks'),
    toggleButton = document.getElementById('burger'),
    toggleBurger1 = document.getElementById('toggleBurger1'),
    toggleBurger2 = document.getElementById('toggleBurger2'),
    toggleBurger3 = document.getElementById('toggleBurger3');

    toggleButton.addEventListener('click', function(){
        navigation.classList.toggle('activeNavigation');
        toggleBurger1.classList.toggle('activate');
        toggleBurger2.classList.toggle('activate');
        toggleBurger3.classList.toggle('remove');
    })

// log in section 
let loginbutton = document.getElementById('login'),
    loginform = document.getElementById('login-form'),
    loginx = document.getElementById('loginx');
    
 loginbutton.addEventListener('click', function() {
        loginform.classList.toggle('activelogin');
    })
    
loginx.addEventListener('click', function() {
        loginform.classList.remove('activelogin')
    })

    // log in password validation

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let error = {};
    let formlogin = event.target;

    let loginpassword = document.getElementById('login-psw').value;

    if (loginpassword.length < 6) {
        error.psw = {text: 'Password must be more than 6 characters'};
        error.psw.style = {color: 'red'};
    } 

    console.log(error);

    formlogin.querySelectorAll('.login-errortext').forEach(item =>{
        item.innerHTML = '';
    });

    for (let item in error) {
        console.log(item);
        let errorSpan = document.getElementById('error_' + item);

        if (errorSpan) {
            errorSpan.textContent = error[item]['text'];
        }
    }

    if (Object.keys(error).length === 0) {
        formlogin.submit();
    }

})

let loginpswShow = document.getElementById('login-psw');
let toggleIconEye = document.getElementById('toggleIcon');


showHidePassword = () => {
    if (loginpswShow.type == "password") {
        loginpswShow.setAttribute('type', 'text');
        toggleIconEye.classList.add('fa-eye-slash');
    }
    else {
        toggleIconEye.classList.remove('fa-eye-slash');
        loginpswShow.setAttribute('type', 'password');
    }
}

toggleIconEye.addEventListener('click', showHidePassword);

// log in email validation

function loginvalidation() {
let loginemail = document.getElementById('login-email').value;
let loginemailstructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let loginemailspan = document.getElementById('error_email');

if (loginemail.match(loginemailstructure)) {
    loginemailspan.innerHTML = 'Your Email is valid';
    loginemailspan.style.color = 'green';
} else {
    loginemailspan.innerHTML = 'Your Email is invalid';
    loginemailspan.style.color = 'red';
}
}

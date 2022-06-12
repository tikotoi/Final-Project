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

// accordion registration instruction section


let accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}


// Registration validation

document.getElementById('registration').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let errors = {};
    let form = event.target;

    let title = document.getElementById('title').value;

    if (title.length < 4 || title == '') {
        errors.title = 'Title can not be empty, numbers and must be more then 4 characters';
    }


    let description = document.getElementById('description').value;

    if (description.length < 10) {
        errors.description = 'Description must be more then 10 characters';
    }

    let password = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value; 

    if (password != password2 || password == '' || password.length < 8) {
        errors.password = 'Password can not be empty and must be more then 8 characters';
        errors.password2 = 'Passwords do not match';
    }

    let agree = document.getElementById('checkagree').checked;
    if (!agree){
        errors.agree = 'you must agree our terms and conditions';
    }

    let WebCategories = false;
    form.querySelectorAll('[name = "categories"]').forEach(element => {
        if (element.checked) {
            WebCategories = true;
        }
    });

    if (WebCategories == false){
        errors.WebCategories = 'Please select your age';
    }
    
    console.log(errors);

    
    form.querySelectorAll('.error-text').forEach(item =>{
        item.innerHTML = '';
    });

    for (let item in errors){
        console.log(item);
        let errorSpan = document.getElementById('error_' + item);

        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }
})


let passwordShow = document.getElementById('password1');
let passwordShow2 = document.getElementById('password2');
let toggleIconEyereg = document.getElementById('toggleIconreg');

showHidePassword = () => {
    if(passwordShow.type == "password"){
        passwordShow.setAttribute('type', 'text');
        toggleIconEyereg.classList.add('fa-eye-slash');
    }
    else {
        toggleIconEyereg.classList.remove('fa-eye-slash');
        passwordShow.setAttribute('type', 'password');
    }

}
toggleIconEyereg.addEventListener('click', showHidePassword);


showHidePassword2 = () => {
    if(passwordShow2.type == "password"){
        passwordShow2.setAttribute('type', 'text');
        toggleIconEyereg.classList.add('fa-eye-slash');
    }
    else {
        toggleIconEyereg.classList.remove('fa-eye-slash');
        passwordShow2.setAttribute('type', 'password');
    }
}

toggleIconEyereg.addEventListener('click', showHidePassword2);

function webValidation() {
    let WebUrl = document.getElementById('regweb-url').value;
    let WebUrlStrucutre = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    let WebUrlSpan = document.getElementById('error_url');

    if (WebUrl.match(WebUrlStrucutre)) {
        WebUrlSpan.innerHTML = 'Your URL is valid';
        WebUrlSpan.style.color = 'green';
    } else {
        WebUrlSpan.innerHTML = 'Your Email is invalid';
        WebUrlSpan.style.color = 'red';
    }
}

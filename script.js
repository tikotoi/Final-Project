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

// slider section

let data = [
    { 
        id: 1,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2019/09/ma-cannabis.jpg',
        title: 'MA true cannabis by RETAIL 710',
        url: 'https://matruecannabis.com/en/',
    },
    {
        id: 2,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2022/04/House-of-Gucci-1.jpg',
        title:'House of Gucci by WATSON DESIGN GROUP, INC',
        url: 'https://www.welcometothehouseofgucci.com/',
    },
    {   
        id: 3,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2019/11/bruno-simon-portfolio-website.jpg',
        title: 'Bruno Simon Portfolio by BRUNO SIMON',
        url: 'https://bruno-simon.com/',
    },
    {
        id: 4,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2015/03/In-Pieces-1.jpg',
        title:'In Pieces by BRYBRY',
        url: 'http://species-in-pieces.com/',
    },
    {
        id: 5,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2020/12/mammut-Expedition-Baikal-1.jpg',
        title:'Mammut Expedition Baikal by B.A',
        url: 'https://eiger-extreme.mammut.com/en',
    } 
];

let arrowLeft = document.getElementById('arrow-left'),
    arrowRight = document.getElementById('arrow-right'),
    sliderContent = document.getElementById('slider-content'),
    dotsList = document.getElementsByClassName('dot');
let sliderIndex=0;

function createAtag(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');
    return aTag;
}


function createImgTag(item) {
    let tagImage = document.createElement('div');
    tagImage.style.backgroundImage = `url(${item.imageUrl})`;
    tagImage.setAttribute('class', 'bg-image');

    return tagImage;
}


function createH2Tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.classList.add('slider-title');
    tagTitle.append(item.title);

    return tagTitle;
}



function createDots(item) {
    let dots = document.createElement('div');
   dots.classList.add('dots');
   
   data.forEach((element)=> {
       let dot = document.createElement('div');
       dot.classList.add('dot');
       dot.setAttribute('data-id', element.id-1);


       dot.onclick = function (event) {
           let id = event.target.getAttribute('data-id');
           sliderIndex=id;
           setSlide();
        }
        dots.appendChild(dot);
   })
   return dots;
}

function setSlide() {
    sliderContent.innerText = '';
    let sliderItem = createAtag(data[sliderIndex]);
    // createimgTag(data[sliderIndex]);
    let createImg = createImgTag(data[sliderIndex]);
    let h2Tag=createH2Tag(data[sliderIndex]);
    let dots= createDots();

    sliderItem.appendChild(createImg);
    sliderItem.appendChild(h2Tag);
    sliderContent.appendChild(sliderItem);
    sliderContent.appendChild(dots);
    currentDotActive();
    console.log(sliderItem);
}

function currentDotActive() {
    dotsList[sliderIndex].classList.add('active')
}

function arrowLeftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}

if (arrowLeft)
    arrowLeft.addEventListener('click', arrowLeftClick);
if (arrowRight)
    arrowRight.addEventListener('click', arrowRightClick);

setInterval( () => {
    arrowRightClick();
}, 3000)

setSlide();



// log in password validation

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let error = {};
    let formlogin = event.target;

    let loginpassword = document.getElementById('login-psw').value;

    if (loginpassword.length < 6) {
        error.psw = {text: 'Password can not be empty  must be more then 6 characters'};
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

// jury section

function getUsers(page) {
    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);
    requist.addEventListener('error',errorRender); 
    
    requist.open('GET', 'https://reqres.in/api/users?page=' + page);
    requist.send(); 
    
let currentPage = 1;
let totalPages;

    document.getElementById('loadprev').addEventListener('click', function () {
        if (currentPage ===1) {
            return
        }
        currentPage -= 1;
        getUsers(currentPage);
    });
    
    document.getElementById('loadnext').addEventListener('click', function () {
        if (currentPage == totalPages) {
            return;
        }
        currentPage += 1;
        getUsers(currentPage);
    });
}

function render() {
    let response = this.responseText;
    let responseData = JSON.parse(response);

    let fragment = document.createDocumentFragment();

    responseData.data.forEach(item => {
        let li = document.createElement('li');
        let juryName = document.createElement('p');
        juryName.textContent=item.first_name  + ' ' + item.last_name;
        let imgUser = document.createElement('img');
        imgUser.src=item.avatar;
        imgUser.classList.add('imgblock');

        li.appendChild(imgUser);
        li.appendChild(juryName);
        li.classList.add('li-item');
        fragment.appendChild(li);
    });

 document.getElementById('july-list').innerHTML = ' ';
 document.getElementById('july-list').appendChild(fragment);

 totalPages = responseData.total_pages;
   console.log(responseData);
}

function errorRender() {
    if (error==404) {
    let p = document.createElement('p');
    p.textContent = 'Server Error';
    p.classList.add('errortext');
    document.getElementById('Jury-container').appendChild(p);   
    } else {
        console.log('Page is not found');
    } 
}

getUsers();
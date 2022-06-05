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

// slider section

let data = [
    { 
        id: 1,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2019/09/ma-cannabis.jpg',
        url: 'https://matruecannabis.com/en/'
    },
    {
        id: 2,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2022/04/House-of-Gucci-1.jpg',
        url: 'https://www.welcometothehouseofgucci.com/'
    },
    {   
        id: 3,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2019/11/bruno-simon-portfolio-website.jpg',
        url: 'https://bruno-simon.com/'
    },
    {
        id: 4,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2015/03/In-Pieces-1.jpg',
        url: 'http://species-in-pieces.com/'
    },
    {
        id: 5,
        imageUrl:'https://assets.awwwards.com/awards/sites_of_the_day/2020/12/mammut-Expedition-Baikal-1.jpg',
        url: 'https://eiger-extreme.mammut.com/en'
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

function createimgTag(item) {
    sliderContent.style.backgroundImage = 'url('+item.imageUrl+')';
    sliderContent.style.backgroundRepeat = "no-repeat";
    sliderContent.style.backgroundSize = "cover";
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
    createimgTag(data[sliderIndex]);
    let dots= createDots();

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

arrowLeft.addEventListener('click',arrowLeftClick);
arrowRight.addEventListener('click',arrowRightClick);

setInterval( () => {
    arrowRightClick();
}, 3000)

setSlide();


//  post section
let mainWraperPost = document.getElementById('post-block'),
    overlayContent = document.getElementById('overlay'),
    closeOverlay = document.getElementById('close'),
    content = document.getElementById('content');

    function ajax(url, callback) {
        let requist = new XMLHttpRequest();
        requist.open('GET', url);
        requist.addEventListener('load', function() {
            let data = JSON.parse(requist.responseText);
            callback(data);
        });
    
        requist.send();
    }
    
    ajax('https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR21mh5oykHpGcLcya3o6ahSVTfbfoa_KlHirKxeTwbH2eCEZvXh3d1QY_c', function(data) {
        printData(data);
    }); 

    function printData(data) {
        data.forEach(element => {
            createPost(element);
        });
    }

    function createPost(item) {
        let divWrapper = document.createElement('div');
        divWrapper.classList.add('posts');
        divWrapper.setAttribute('data-id', item.id);
       
        let h2Tag = document.createElement('h2');
        h2Tag.innerText = item.id;
        let h3Tag = document.createElement('h3');
        h3Tag.innerText= item.title; 

        divWrapper.appendChild(h2Tag);
        divWrapper.appendChild(h3Tag);

        divWrapper.addEventListener('click', function (event) {
            let id = event.target.getAttribute('data-id');
            openOverlay(id);
        
        })
        
         mainWraperPost.appendChild(divWrapper);
        
         console.log(divWrapper);
    }

    function openOverlay(id) {
        overlayContent.classList.add('active');
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    
        ajax(url, function(data) {
            overlayFunction(data);
        });
        console.log(id);
    }

    function overlayFunction(item) {
        let titlepost = document.createElement('h3');
        titlepost.innerText = item.title;
        
        let description = document.createElement('p');
        description.innerText = item.body;
    
        content.appendChild(titlepost);
        content.appendChild(description);
    }
    
    closeOverlay.addEventListener('click', function () {
        overlayContent.classList.remove('active');
        content.innerHTML = ' ';
    
    })
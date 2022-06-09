
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
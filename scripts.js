var userInputTitle = document.querySelector('#input-title');
var userInputUrl = document.querySelector('#input-url');
var userInputSubmit = document.querySelector('#input-submit');
var bookmarkSection = document.querySelector('.cards');

userInputSubmit.addEventListener('click', appendBookmark);

function appendBookmark() {
  var newArticle = document.createElement('article');
  bookmarkSection.appendChild(newArticle);
  newArticle.innerHTML = 
    `<h2>${userInputTitle.value}</h2> 
     <p class="card__url">
       <a href="#" class="card-hover" id="card__url--link">${userInputUrl.value}</a>
     </p>
     <p class="cards__read-delete">
       <a href="#" class="card-hover" id="card__url--left">Read</a>
       <a href="#" id="card__url--right">Delete</a>
     </p>`
}
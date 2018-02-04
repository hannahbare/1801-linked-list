var userInputTitle = document.querySelector('#input-title');
var userInputUrl = document.querySelector('#input-url');
var userInputSubmit = document.querySelector('#input-submit');
var bookmarkSection = document.querySelector('.cards');
var readBtn = document.querySelector('#card__url--read');

userInputSubmit.addEventListener('click', appendBookmark);
readBtn.addEventListener('click', readLink);

function readLink() {
  if(event.target && event.target.matches === '.read-btn') {
  readBtn.parentNode.parentNode.classList.toggle('read');
 }
}

function appendBookmark() {
  var newArticle = document.createElement('article');
  bookmarkSection.appendChild(newArticle);
  newArticle.innerHTML = 
    `<h2>${userInputTitle.value}</h2> 
     <p class="card__url">
       <a href="${userInputUrl.value}" class="card-hover" id="card__url--link" target="_blank">${userInputUrl.value}</a>
     </p>
     <p class="cards__read-delete">
       <a href="#" class="card-hover read-btn" id="card__url--read">Read</a>
       <a href="#" id="card__url--delete">Delete</a>
     </p>`
}
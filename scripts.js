var userInputTitle = document.querySelector('#input-title');
var userInputUrl = document.querySelector('#input-url');
var userInputSubmit = document.querySelector('#input-submit');
var bookmarkSection = document.querySelector('.cards');
var bookmarkTitle = document.querySelector('h2');
/*var bookmarkUrl = document.querySelector('.card__url');
var bookmarkReadBtn = document.querySelector('#card__url--left');
var bookmardDeleteBtn = document.querySelector('#card__url--right');*/

userInputSubmit.addEventListener('click', appendBookmark);

function appendBookmark () {
  var inputTitle = userInputTitle.value;
  bookmarkSection.appendChild(userInputTitle);


`<h2>${userInputTitle.value}</h2> 
   <article class="card__url">
     <a href="www.thewebsiteurl.com" class="card-hover" id="card__url--link">www.thewebsiteurl.com</a>
   </article>

   <article class="cards__read-delete">
     <a href="#" class="card-hover" id="card__url--left">Read</a>
     <a href="#" id="card__url--right">Delete</a>
   </article>`
   console.log(userInputTitle.value)
}
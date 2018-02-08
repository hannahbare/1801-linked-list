var userInputTitle = document.querySelector('#input-title');
var userInputUrl = document.querySelector('#input-url');
var submitBtn = document.querySelector('#input-submit');
var bookmarkSection = document.querySelector('.cards');

userInputUrl.addEventListener('keyup', enableBtn);
userInputTitle.addEventListener('keyup', enableBtn);
submitBtn.addEventListener('click', appendBookmark);
bookmarkSection.addEventListener('click', toggleRead);
bookmarkSection.addEventListener('click', deleteCard);


function enableBtn() {
  if (userInputTitle.value.length > 0 || userInputUrl.value.length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function appendBookmark() {
  if (userInputTitle.value.length > 0 && userInputUrl.value.length > 0) {
    var newArticle = document.createElement('article');
    newArticle.innerHTML = 
      `<h2>${userInputTitle.value}</h2> 
       <p class="card__url">
         <a href="${userInputUrl.value}" class="card-hover" id="card__url--link" target="_blank">${userInputUrl.value}</a>
       </p>
       <p class="cards__read-delete">
         <a href="#" class="card-hover read-btn" id="card__url--read">Read</a>
         <a href="#" id="card__url--delete">Delete</a>
       </p>`
    bookmarkSection.appendChild(newArticle);
    submitBtn.disabled = true;
    clearInputFields();
    } else {
      alert('Please fill out both input fields.');
      submitBtn.disabled = true;
    }
}

function clearInputFields(){
  userInputTitle.value = "";
  userInputUrl.value = "";
}

function toggleRead(event){
  if(event.target.id === 'card__url--read'){
    event.target.parentNode.parentNode.classList.toggle('read-article');
    event.target.classList.toggle('read');
  }
};

function deleteCard(event){
  if(event.target.id === 'card__url--delete'){
      event.target.parentNode.parentNode.remove();    
    }
};
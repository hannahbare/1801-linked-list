var userInputTitle = document.querySelector('#input-title');
var userInputUrl = document.querySelector('#input-url');
var submitBtn = document.querySelector('#input-submit');
var bookmarkSection = document.querySelector('.cards');
var readBtn = document.querySelector('#card__url--read');

submitBtn.addEventListener('click', alertOrAppend);
bookmarkSection.addEventListener('click', toggleRead);
bookmarkSection.addEventListener('click', deleteCard);
userInputUrl.addEventListener('keyup', enableSubmitBtn);

function enableSubmitBtn(event) {
  if (userInputTitle.value && userInputUrl.value) {
    submitBtn.disabled = false;

  //function that disables the button again;
  // disableSubmitBtn();
  }
}

// function disableSubmitBtn(){
//   submitBtn.disabled = true;
// }


function alertOrAppend(event){
  if (userInputTitle.value && userInputUrl.value){
    appendBookmark();
  } else if (userInputTitle.value === "" || userInputUrl.value === ""){
    alert('Please fill out both input fields.');
  } 
}

function appendBookmark() {
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
  clearInputFields();
}

function clearInputFields(){
  userInputTitle.value = " ";
  userInputUrl.value = " ";
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





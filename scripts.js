var userInputTitle = document.querySelector('#input-title');
var userInputUrl = document.querySelector('#input-url');
var userInputSubmit = document.querySelector('#input-submit');
var bookmarkTitle = document.createElement('h2');
var bookmarkUrl = document.createElement('.card__url');
var bookmarkReadBtn = document.createElement('#card__url--left');
var bookmardDeleteBtn = document.createElement('#card__url--right');

userInputSubmit.addEventListener('click', appendBookmark);


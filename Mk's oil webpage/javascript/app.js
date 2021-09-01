
$(function () {
  mySearchInput();
  myMenuUp();
  myXBox();
});
function mySearchInput() {
  $('#btn-search').click(function(){
  $('.searchBox').toggleClass('show')
  
  }) 
}

function myXBox(){
  $('#btn-X').click(function(){
    $('.searchBox').toggleClass('show')
    }) 
}

function myMenuUp() {
$('#menu').click(function(){
  $('#hiddenMenu').toggleClass('show')
}) 
}








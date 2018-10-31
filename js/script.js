'use strict'
const rowClassItem = document.querySelectorAll('.row');
const row1Right = document.querySelector('.row1-right');
const row2Left = document.querySelector('.row2-left');
const allPlatformsHeader = document.querySelector('.row1-left h3');
const allPlatformsHeaderMobile = 'All platforms, all devices, all your files';
const allPlatformsHeaderDesktop = 'All platforms, all<br>devices, all your files';
const form = document.querySelectorAll('form'); 
const link = document.querySelectorAll('a');
let winWidth = innerWidth;

// onresize
window.onresize = function(e){  
  winWidth = e.target.innerWidth;  
  changeOrder();
  changeHeader(); 
}
// onload
window.onload = function() {  
  changeOrder();
  changeHeader();
  // prevent default
   form.forEach(function(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
    });
  });
  
  
   link.forEach(function(link) {
    link.addEventListener('click', function(e){
      e.preventDefault();
    })
  }); 
  }
// functions
//Remove items from row
function removeItem(item) {
  item.remove();
}
// prepend append items to change order
function prependItem(parent, itemPrep) {
  parent.prepend(itemPrep);
}
function appendItem(parent, itemApp) {
  parent.append(itemApp);
}
// change order function
function changeOrder() {
  if (winWidth <= 1020 ) {    
    removeItem(row1Right);
    removeItem(row2Left);
    prependItem(rowClassItem[2],row1Right);
    appendItem(rowClassItem[1], row2Left);    
  } else {
    removeItem(row1Right);
    removeItem(row2Left);
    prependItem(rowClassItem[2],row2Left);
    appendItem(rowClassItem[1], row1Right);
  }
}
function changeHeader() {
  
  if (winWidth <= 1020 ) {    
    allPlatformsHeader.innerHTML = allPlatformsHeaderMobile;
  } else {
    allPlatformsHeader.innerHTML = allPlatformsHeaderDesktop;
  }
}




  


let headingMain = document.querySelector('#heading-main');
let rowClassItem = document.querySelectorAll('.row');
let row1Right = document.querySelector('.row1-right');
let row2Left = document.querySelector('.row2-left');
let winWidth = innerWidth;

// onresize
window.onresize = function(e){  
  winWidth = e.target.innerWidth;  
  changeOrder(); 
}
// onload
window.onload = function() {  
  changeOrder();
}
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
  if (winWidth <= 768 ) {
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




  


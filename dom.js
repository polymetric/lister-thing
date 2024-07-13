var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#fff';
}

var itemList = document.querySelector('#items');
console.log(itemList.parentNode);

document.querySelector('#field-item-name').onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;     
    if (key == 13) {
      e.preventDefault();
        addListElement(document.querySelector('#field-item-name').value)
    }
  }
  

var submitButton = document.querySelector('#btn-submit').addEventListener
('click', function(){
    addListElement(document.querySelector('#field-item-name').value)
});

function addListElement(text) {
    newItem = document.createElement('li');
    newItem.className = "list-group-item";
    newItem.textContent = text;
    list = document.querySelector('#items');
    list.append(newItem);
}

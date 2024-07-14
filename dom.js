var form = document.querySelector('#add-form');
var itemList = document.querySelector('#items');

var filter = document.querySelector('#filter');
var filterQuery = "";

form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.querySelector('#field-item-name').value;
    addItem(name);
});

function addItem(name) {
    var li = document.createElement('li');
    li.className = "list-group-item";

    var itemText = document.createElement('span');
    itemText.className = "item-text"
    itemText.appendChild(document.createTextNode(name));
    li.appendChild(itemText);
    addDeleteButton(li);

    itemList.appendChild(li);

    filterItems();
}

function addDeleteButton(li) {
    var deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode("deleet"));

    deleteButton.addEventListener('click', function(){
        itemList.removeChild(li);
    });

    li.appendChild(deleteButton);
}

for (var i = 0; i < 5; i++) {
    addItem("Item " + (i+1));
}

items = itemList.children

filter.addEventListener('keyup', function(e){
    e.preventDefault();
    filterItems();
});

function filterItems() {
    filterQuery = filter.value;
    invisibleItems = 0;
    for (var i = 0; i < items.length; i++) {
        itemText = items[i].querySelector('.item-text').textContent.toLowerCase();
        if (!itemText.toLowerCase().includes(filterQuery) && filterQuery.length > 0) {
            items[i].style.display = "none";
            invisibleItems += 1;
        } else {
            items[i].style.display = "inline";
        }
    }
}

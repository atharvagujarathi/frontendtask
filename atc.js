var addItemId = 0;
function addToCart(id) {
    addItemId += 1;
    var selectedElement = document.createElement('div');
    selectedItem.classList.add('createImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', id.children[0].currentSrc);
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    cartItems.append(selectedItem);


}
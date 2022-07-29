
const products = document.querySelector(".atharva");

function createCard([img, para, prize]) {

    let code = `
  <div class="column" id="1">
      <div class="card">
        <img src="${img}" width="100%" height="300vh">
        
        <p>${para}</p>
        <h2>${prize}</h2>
      </div>
    </div>
  `;
    products.innerHTML += code;

}





//**************Kindly Uncomment this to add a card */

// let item1 = ["https://unsplash.com/photos/VcVrNIobArk",
//     "yes",
//     "$32"];

// let item2 = ["https://unsplash.com/photos/VcVrNIobArk",
//     "yes",
//     "$32"];

// let item3 = ["https://unsplash.com/photos/VcVrNIobArk",
//     "yes",
//     "$32"];

// let item4 = ["https://unsplash.com/photos/VcVrNIobArk",
//     "yes",
//     "$32"];


// createCard(item1);
// createCard(item2);
// createCard(item3);
// createCard(item4);
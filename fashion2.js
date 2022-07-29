
const products = document.querySelector(".atharva2");

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

// let item1 = ["https://www.google.com/search?q=image&rlz=1C1ONGR_enIN1004IN1004&sxsrf=ALiCzsZGnKIqAod1eYiCDYcJ1jVAYUHVcA:1659115428113&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixn-_Nzp75AhWFG6YKHf0NCPEQ_AUoAXoECAEQAw&biw=1536&bih=754&dpr=1.25#imgrc=ls6mUEs56iOQhM",
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
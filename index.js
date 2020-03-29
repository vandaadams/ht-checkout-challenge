// 1. populate radio elements of form from api
const productNames = document.querySelectorAll("#product-name");
const productPrices = document.querySelectorAll("#product-price");

fetch("http://my-json-server.typicode.com/vandaadams/ht-checkout-challenge/db")
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    const results = data.products
    let counter = 0

    productNames.forEach((product) => {
      product.insertAdjacentText("afterend", `${results[counter].name}`);
      counter += 1;
    });

    counter = 0
    productPrices.forEach((product) => {
      product.textContent = `${results[counter].price}`;
      counter += 1;
    });

  });

// 2. send post request to api when submit button is clicked
const form = document.getElementById("form");

form.addEventListener('submit', ((element) => {
  element.preventDefault();
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  email = document.getElementById("email").value;
  // console.log(firstName, lastName, email)
});
);

// 1. populates radio button elements of form from api
const productNames = document.querySelectorAll(".product-name");
const productPrices = document.querySelectorAll("#product-price");

fetch("http://my-json-server.typicode.com/vandaadams/ht-checkout-challenge/db")
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    const results = data.products
    let counter = 0

    productNames.forEach((product) => {
      product.value = `${results[counter].price}`;
      product.id = `${results[counter].id}`;
      product.insertAdjacentText("afterend", `${results[counter].name}`);
      counter += 1;
    });

    counter = 0
    productPrices.forEach((product) => {
      product.textContent = `£${results[counter].price}`;
      counter += 1;
    });

  });

// 2. creates user account & contract with post request to api when submit button is clicked
const createAccount = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  let account_id = 0;

  fetch("http://localhost:3000/accounts", {
    method: "POST",
    body: JSON.stringify({
      first_name:firstName,
      last_name:lastName,
      email_address:email
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    //.then(json => console.log(json))
    .then((data) => {
      account_id = data.id
      console.log(account_id)
    })
    .then(
      createContract = () => {
        productNames.forEach((product) => {
          if (product.checked) {
            // console.log(product)
            product_id = product.id;
            price = product.value;
          }
        })
        fetch(`http://localhost:3000/accounts/${account_id}/contracts`, {
          method: "POST",
          body: JSON.stringify({
            product_id:product_id,
            price:price
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
          })
          .then(response => response.json())
          .then(json => console.log(json))
      })
      .then(
        clearPage = () => {
          document.getElementById("content").innerHTML = "";
          document.getElementById("msg").className = "center";
          document.getElementById("msg").innerHTML = "Thank you for your purchase!";
        }
      )

};

const form = document.getElementById("form");
form.addEventListener('submit', createAccount);

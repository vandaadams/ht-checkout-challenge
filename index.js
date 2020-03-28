const productNames = document.querySelectorAll("#product-name");
const productPrices = document.querySelectorAll("#product-price");
// console.log(prices);

fetch("http://my-json-server.typicode.com/vandaadams/ht-checkout-challenge/db")
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    const results = data.products
    let counter = 0

    productNames.forEach((product) => {
      product.insertAdjacentText("afterend", `${results[counter].name}`);
      counter += 1;
      // console.log(product);
    });

    counter = 0
    productPrices.forEach((product) => {
      product.textContent = `${results[counter].price}`;
      counter += 1;
      // console.log(product);
    });

  });

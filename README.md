## How to run the Project

Download the repository and open it from the terminal

Install JSON Server

```
npm install -g json-server
```

Start JSON Server

```
json-server --watch db.json
```

You can access the fake API if you go to
```
http://localhost:3000/products
http://localhost:3000/accounts
http://localhost:3000/accounts/<account_id>/contracts
```

Open index.html in browser

## Walkthrough

I created a form in HTML which I populated using a fake API JSON file. On clicking the submit button user data is added to the fake API. This data can be accessed using the API endpoints above.

## Reflection

Overall I had fun and learnt a lot during this challenge. This was the first time I used a fake api, and I found it challenging to set it up. If I were to continue, I would create a router with custom error messages. I would also add the email confirmation function, and do more work on the front end.

## Design

Schema
![alt text](https://github.com/vandaadams/ht-checkout-challenge/blob/master/images/Screenshot%202020-03-29%20at%2013.25.40.png)

Wireframe
![alt text](https://github.com/vandaadams/ht-checkout-challenge/blob/master/images/Screenshot%202020-03-28%20at%2010.50.39.png)

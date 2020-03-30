## How to run the Project

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

Open index.html in browser from file path

## Walkthrough

I created a form in HTML which I populated using a fake API JSON file. On clicking the submit button user data is added to the fake API. This data can be accessed using the API endpoints above.

## Reflection

Overall I had fun and learnt a lot during this challange. This was the first time I used a fake api, and I found it challenging to set it up. If I were to continue, I would create a router with custom error messages. I would also add the email confirmation function, and do more work on the front end.


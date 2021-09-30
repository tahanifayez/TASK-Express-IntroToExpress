In this task, you will create three endpoints:
  - An endpoint that returns a list of all products
  - An endpoint that creates a new product and adds it to your data.
  - An endpoint that deletes an existing product based on this product's ID.


### Setup

1. Install `nodemon` globally:

   ```shell
   $ yarn global add nodemon
   ```

### Setup Your Github Repository

1. Create a repository for your backend code. We'll call ours `ProductShop-API`.
2. Add a `.gitignore` file of type `Node`.
3. Create the repo and clone it.

### Setup Your Express App

1. Create a `package.json` file using `yarn init -y`.
2. Create an `app.js` file in your project folder.
   _Don't forget to change the main file in `package.json` from `index.js` to `app.js`._
3. Install `express` and create an express application instance.
4. Bind your application to port `8000` using the `listen()` method.
5. Create a script in `package.json` that executes `nodemon app.js` when you run `yarn start`.

### Data Setup

Create a new file called `data.js`. Copy the data array from your React app and paste it in this file.
_Don't forget to export it._

### Product List Route

Create a route that sends the list of your products:

1. The route's method should be `get`.
2. The URL for this route should have the following syntax: `/products`.
3. The response must be thte list of all products.

### CORS

To be able to use these endpoints in a website, you need to enable `cors`. Check out this 

#### Testing

Test your endpoint using the browser. It should display your array of products.

### Product Delete Route

Create a route that deletes a product according to the requested ID in the URL:

1. The route's method should be `delete`.
2. The URL for this route should have the following syntax: `/products/:productId`.
3. Capture the ID from the URL and use it to **find** the product with this ID.
4. If the product exists, remove it from your data array.
5. Change the response status code to `204` and end the response.
6. If the product doesn't exist, change the response code to `404` and send a message as a response saying that a product with this ID doesn't exist.

#### Testing

Test your endpoints using Postman.

1. Send a valid product ID through the URL. It should delete the product and return a `204` status.
2. Send a non-valid product ID through the URL. It should return a `404` status and a message.
3. Then test the product list endpoint, it should return your products without the product you deleted successfully.


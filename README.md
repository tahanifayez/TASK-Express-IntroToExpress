In this task, you will create three endpoints:
  - An endpoint that returns a list of all products
  - An endpoint that creates a new product and adds it to your data.
  - An endpoint that deletes an existing product based on this product's ID.


### 1. Setup

1. Install `nodemon` globally:

   ```shell
   $ yarn global add nodemon
   ```
2. Create a new repository, don't forget to add a `.gitignore` file of type `Node`. Then clone it.

### 2. Setup Your Express App

1. In your cloned repo, create a `package.json` file using `yarn init -y`.
2. Create an `app.js` file in your project folder.
   _Don't forget to change the main file in `package.json` from `index.js` to `app.js`._
3. Install `express` and create an express application instance.
4. Bind your application to port `8000` using the `listen()` method.
5. Create a script in `package.json` that executes `nodemon app.js` when you run `yarn start`.

### 3. Data Setup

1. Create a new file called `data.json`. Copy the following data in this file. _You don't need to export it._
2. Require it in `app.js`.

### 4. Product List Route

Create a route that sends the list of your products:

1. The route's method should be `get`.
2. The URL for this route should have the following syntax: `/products`.
3. The response must be thte list of all products.

#### Testing

Test your endpoint using the browser. It should display your array of products.

### 5. Product Create Route

Create an API that creates a new product and returns this new product as a response.

1. To use the data passed to the body of a request we need to parse it. Call the `express.json()` method inside an `app.use()` method **above** your routes.
2. The route's method should be `post`and the URL for this route should have the following syntax: `/products`.
3. Add the object you got from the body of the request to your array of data.

**CHALLENGE:** The status code for creating is `201` and the response is the new product you added. How can we change the response status?

#### Testing

Test your routes in Postman.

1. Send a new object in the `body` to the create product endpoint. Make sure to add it under `raw` and that your data type is `json`.
2. Send a request to the retrieve products list route to make sure your product is added with the correct ID.

### 6. Product Delete Route

Create a route that deletes a product according to the requested ID in the URL:

1. The route's method should be `delete`and the URL for this route should have the following syntax: `/products/:productId`.
2. Capture the ID from the URL and use it to **find** the product with this ID.
3. If the product exists, remove it from your data array.

**CHALLENGE:** The status code for deleting is [`204`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) and the response contains no content. How can we do that?

**ANOTHER CHALLENGE:** What if the product you're trying to delete doesn't exist? What should the status code be? And what should the response be?


#### Testing

Test your endpoints using Postman.

1. Send a valid product ID through the URL. It should delete the product and return a `204` status.
2. Send a non-valid product ID through the URL. It should return a `404` status and a message.
3. Then test the product list endpoint, it should return your products without the product you deleted successfully.

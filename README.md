In this task, you will create three endpoints:
  - An endpoint that returns a list of all products
  - An endpoint that creates a new product and adds it to your data.
  - An endpoint that deletes an existing product based on this product's ID.


#### Setup

1. Install `nodemon` globally:

   ```shell
   $ yarn global add nodemon
   ```

#### Setup Your Github Repository

1. Create a repository for your backend code. We'll call ours `ProductShop-API`.
2. Add a `.gitignore` file of type `Node`.
3. Create the repo and clone it.

#### Setup Your Express App

1. Create a `package.json` file using `yarn init -y`.
2. Create an `app.js` file in your project folder.
   _Don't forget to change the main file in `package.json` from `index.js` to `app.js`._
3. Install `express` and create an express application instance.
4. Bind your application to port `8000` using the `listen()` method.
5. Create a script in `package.json` that executes `nodemon app.js` when you run `yarn start`.

#### Data Setup

Create a new file called `data.js`. Copy the data array from your React app and paste it in this file.
_Don't forget to export it._

#### Product List Route

Create a route that sends the list of your products:

1. The route's method should be `get`.
2. The URL for this route should have the following syntax: `/products`.
3. The response must be thte list of all products.


#### CORS

To be able to use these endpoints in a website, you need to enable `cors`. Check out this 

#### Testing

Test your endpoint using the browser. It should display your array of products.

const express = require('express');
const app = express();
require('dotenv').config();
require("./connections/conn");


const user = require ("./route/user")
const books = require ("./route/books")
const favorite = require ("./route/favorite")
const cart = require ("./route/cart")
const order = require ("./route/order")

app.use(express.json());

/*** 
app.get('/', (req, res) => {
  res.send('Hello, LMR');
});

*/

app.use("/ap1/v1", user);
app.use("/ap1/v1", books);
app.use("/ap1/v1", favorite);
app.use("/ap1/v1", cart);
app.use("/ap1/v1", order);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

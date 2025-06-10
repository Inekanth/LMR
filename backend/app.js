const express = require('express');
const app = express();
require('dotenv').config();
require("./connections/conn");

const user = require ("./route/user")

/*** 
app.get('/', (req, res) => {
  res.send('Hello, LMR');
});

*/


app.use("/ap1/v1", user);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

const express = require('express'); //Import dependency
const Restaurant = require('./restaurants');
//Create a web server 
const app = express();
//specify the port on which the web server will run 
const port = 3000;

app.use(express.static('public'));

app.get("/flipcoin", (request, response) => {
  response.send(["Heads","Tails"][Math.round(Math.random())]);
  });

app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
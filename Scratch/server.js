const express = require('express'); //Import dependency
const { sequelize } = require('./sequelize_index');
const Menu = require('./menus');
const Restaurant = require('./restaurants');
const Item = require('./items');
const { check, validationResult } = require('express-validator');
const fs = require('fs').promises;
//Create a web server 
const app = express();
//specify the port on which the web server will run 
const port = 3000;

app.use(express.static('public'));
app.use(express.json());


// app.get("/flipcoin", (request, response) => {
//   response.send(["Heads", "Tails"][Math.round(Math.random())]);
// });

//RESTAURANT

app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll()
  res.send(restaurants)
})

app.post('/restaurants', async (req, res) => {
  const result = await Restaurant.create(
    req.body
  )
  res.send(result)
})

app.get('/restaurants/:id', async (req, res) => {
  res.json(await Restaurant.findByPk(req.params.id));
});

app.delete("/restaurants/:id", async (request, response) => {
  const restaurant = await Restaurant.findByPk(request.params.id);
  restaurant.destroy();
  response.sendStatus(201);
}
);

app.post('/restaurants', [
  check('name').trim().notEmpty().isLength({max: 50}).whitelist('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '),
  check('image').trim().isURL()
  ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          console.log(errors.array());
          return res.status(400).json({ errors: errors.array() })
      };
      await Restaurant.create({name: req.body.name, image: req.body.image});
      res.sendStatus(201);
  }
);

//MENU

app.get("/menus", async (req, res) => {
  const menus = await Menu.findAll()
  res.send(menus)
})

app.post('/menus', async (req, res) => {
  const result = await Menu.create(
    req.body
  )
  res.send(result)
})

app.get('/menus/:id', async (req, res) => {
  res.json(await Menu.findByPk(req.params.id));
});

app.delete("/menus/:id", async (req, res) => {
  const restaurant = await Menu.findByPk(req.params.id);
  restaurant.destroy();
  res.sendStatus(201);
}
);

async function start() {
  await sequelize.sync({
    logging: false,
  });
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});

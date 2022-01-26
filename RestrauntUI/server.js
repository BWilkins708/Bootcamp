const express = require('express'); //Import dependency
const Handlebars = require('handlebars')
const {engine} = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const { sequelize } = require('./sequelize_index');
const {Menu} = require('./Menus');
const Restaurant = require('./Restaurants');
const {Item} = require('./Items');
const { check, validationResult } = require('express-validator');
const fs = require('fs').promises;
// const {engine} = require('express-handlebars');
//Create a web server 
const app = express();
// setup our templating engine
const port = 3000;

// const handlebars = engine({
//   handlebars: allowInsecurePrototypeAccess(Handlebars)
// })
// app.engine('handlebars', handlebars)
// app.set('view engine', 'handlebars')

app.engine('handlebars', engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/layouts`
  }));

app.set('view engine', 'handlebars');
app.set("views", "./views");

//specify the port on which the web server will run 

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// app.get("/flipcoin", (request, response) => {
//   response.send(["Heads", "Tails"][Math.round(Math.random())]);
// });

//RESTAURANT

// app.get("/restaurants", async (req, res) => {
//   const restaurants = await Restaurant.findAll()
//   res.send(restaurants)
// })

app.get('/restaurants/', async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.render("allRestaurantsView", {restaurants})
})

// app.get('/restaurants/singleRestaurant', async (req, res) => {
//   res.render("singleRestaurantView")
// })

app.get("/restaurants/:id", async(req, res) => {
  // const rObj = await Restaurant.findByPk(req.params.id,{include: {model: Menu, as: "Menu"}});
  const rObj = await Restaurant.findByPk(req.params.id,{include: {model: Menu, as: "Menu", include: {model: Item, as: "Item"}}});
  console.log(rObj)
  res.render('singleRestaurantView', {restaurant: rObj });
});


// app.post('/restaurants', async (req, res) => {
//   const result = await Restaurant.create(
//     req.body
//   )
//   res.send(result)
// })

// app.get('/restaurants/:id', async (req, res) => {
//   res.json(await Restaurant.findByPk(req.params.id))
//   res.render("restaurants", {restaurants})
// })

app.post("/restaurants/delete", async(req, res) => {
  await Restaurant.destroy({where: req.body});
});


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

const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant');
const {Menu} = require('../Menu');
describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants have menus', async () => {
        // const Restaurant = new Restaurant();
        const Restaurants = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'});
        // const Menu = new Menu();
        const menu = await Menu.create({title: 'set 1'});
        await Restaurants.addMenu(menu);
        const menus = await Restaurants.getMenus();
        expect(menus[0].title).toBe('set 1');
    })
})







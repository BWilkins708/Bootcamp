const {sequelize} = require('../Restaurant2/sequelize_index');
const {Restaurant} = require('./Restaurant')

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Roslin', image: 'https://eu-assets.simpleview-europe.com/essex/imageresizer/?image=%2Fdmsimgs%2FRoslinBeachHotelRestaurant-1220x715_1981443072.jpg&action=ProductDetailImage' })
        expect(restaurant.id).toBe(1)
    })
})

sequelize.sync();
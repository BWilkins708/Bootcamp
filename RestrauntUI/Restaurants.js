const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Menu} = require('./menus');
/**
 * Represents a Restaurant
 */
class Restaurant extends Model {
    menus = [];

    addMenu(menu) {
      this.menus.push(menu);
    }

    getMenus() {
      return this.menus;
    }
}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Restaurant.hasMany(Menu, {as: 'Menu', foreignKey: 'restaurant_id'});
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'});

module.exports = Restaurant

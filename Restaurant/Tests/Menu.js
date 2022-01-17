const {sequelize, DataTypes, Model} = require('../sequelize_index');
const { Restaurant } = require('./Restaurant');

class Menu extends Model {


}
Menu.init({
    title: DataTypes.STRING
},{
    sequelize,
    timestamps: false
});

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})
Items.belongsTo(Menu, {foreignKey: 'item_id'})

module.exports = {Menu};
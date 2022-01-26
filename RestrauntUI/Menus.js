const {sequelize, DataTypes, Model} = require('./sequelize_index');
const { Item } = require('./items');
/**
 * Represents a Menu
 */
class Menu extends Model {

    // add methods here

}

Menu.init({
    title: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

Menu.hasMany(Item, {as: 'Item', foreignKey: 'menu_id'});
Item.belongsTo(Menu, {foreignKey: 'menu_id'});


module.exports = {Menu}
const {sequelize, DataTypes, Model} = require('./sequelize_index');
const { Item } = require('./items');
/**
 * Represents a Menu
 */
class Menu extends Model {

    // add methods here

}

Menu.init({
    title: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});

// Menu.hasMany(MenuItem, {as: 'items', foreignKey: 'menu_id'});
// MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'});

module.exports = Menu
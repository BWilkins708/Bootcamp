const {sequelize, DataTypes, Model} = require('./sequelize_index');

/**
 * Represents a MenuItem
 */
class Item extends Model {

    // add methods here

}
Item.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = Item
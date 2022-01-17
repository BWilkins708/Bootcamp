const {sequelize, DataTypes, Model} = require('./sequelize_index');

class Item extends Model {


}
Item.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = Item
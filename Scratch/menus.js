const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Item} = require('./items');

class Menu extends Model {


}
Menu.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = Menu
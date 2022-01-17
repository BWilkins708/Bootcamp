const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Menu} = require('./menus')

class Restaurant extends Model {


}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Restaurant
}
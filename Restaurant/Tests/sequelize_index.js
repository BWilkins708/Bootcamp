const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('BrooksRestaurant', 'name', 'image', {
    dialect: 'sqlite',
    storage: './restaurants-seq.sqlite'
});

 module.exports={sequelize, DataTypes, Model};
const sqlite3 = require('sqlite3').verbose();
function initialiseRestaurants() {
    const db = new sqlite3.Database('./myDB.sqlite');
    try {
        db.serialize(function () {
            db.run('DROP TABLE IF EXISTS RESTAURANT');
            db.run ('CREATE TABLE IF NOT EXISTS RESTAURANTS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)');
        });
    } finally {
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
    }
}
function initialiseMenus() {
    const db = new sqlite3.Database('./myDB.sqlite');
    try {
        db.serialize(function () {
            db.run("CREATE TABLE IF NOT EXISTS MENUS (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, restaurant_id INTEGER)");
        });
    } finally {
        db.close();
    }
}
function initialiseMenuItems() {
    const db = new sqlite3.Database('./myDB.sqlite');
    try {
        db.serialize(function () {
            db.run("CREATE TABLE IF NOT EXISTS MENUITEMS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, menu_id INTEGER)");
        });
    } finally {
        db.close();
    }
}
initialiseRestaurants();
initialiseMenus();
initialiseMenuItems();
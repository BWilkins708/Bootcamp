const sqlite3 = require('sqlite3').verbose();
function initialiseRestaurants() {
    const db = new sqlite3.Database('./myDB2.sqlite');
    try {
        db.serialize(function () {
            db.run('DROP TABLE IF EXISTS `RESTAURANTS`');
            db.run ('CREATE TABLE IF NOT EXISTS `RESTAURANTS` (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, image TEXT)');
        });
    } finally {
        db.close();
    }
}
initialiseRestaurants();
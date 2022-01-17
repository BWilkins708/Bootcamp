const sqlite3 = require('sqlite3').verbose();
const fsp = require('fs').promises; // Node.js file system module with promises

async function loadAndInsert() {
    console.log('calling load');
    // wait for the file to be read
    const buffer = await fsp.readFile('./restaurants.json');
    const restaurants = (JSON.parse(String(buffer)));
    console.log(restaurants);

    const db = new sqlite3.Database('./myDB.sqlite');
    try {
        const rawData = await fsp.readFile('./src/restaurants.json');
        const restaurantsArray = (JSON.parse(String(rawData)));

        db.serialize(function () {
            let menuCounter = 1;

            for (let i = 0; i < restaurantsArray.length; i++) {
                const currentRestaurant = restaurantArray[i];
                let stmt;
                try {
                    stmt = db.prepare('INSERT INTO RESTAURANT (name, imageLink) VALUES (?, ?)');
                    stmt.run(restaurants[i].name, restaurants[i].imageLink);
                } finally {
                    // release resources 
                    stmt.finalize();
                }
                console.log(restaurants[i].name)

                const menus = restaurants[i].menus;

                for (let j = 0; j < menus.length; j++) {
                    console.log(menus[j].title)

                    const items = menus[j].items;

                    for (let k = 0; k < items.length; k++) {
                        console.log(items[k].name)
                    }
                }
            }
        });
    } finally {
        // release resources 
        db.close();
    }
}

loadAndInsert();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./restaurants.sqlite');

try {
    db.serialize(function () { 

    let stmt;

        try {
            stmt = db.prepare('INSERT INTO MENUITEM (name, price, menu_id) VALUES (?, ?)');
            stmt.run('Prawn Cocktail', 9, 1);
            stmt.run('Skate', 21, 1);
            stmt.run('Cheesecake', 8, 1);
        } finally {
            // release resources 
            stmt.finalize();
        }

        // select the rows and print them out
        db.each("SELECT Title, Name FROM MENU INNER JOIN restaurant ON restaurant.id = MENU.restaurant_id;",
            function (err, rows) {  
                console.log(rows);  
            }
        );
    });
} finally {
    // release resources 
    db.close();  
}

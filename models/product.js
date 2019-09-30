const fs = require('fs');
const path = require('path');

module.exports = class Product {
    //Def the prod shape
    constructor(t, c) {
        //The property recieving the argument (t)
        this.title = t; 
        this.courseCode = c;
    }
    //Save method to store into the products array
    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
            );
            fs.readFile(p, (err, fileContent) => {
                let products = [];
                if (!err) {
                    products = JSON.parse(fileContent);
                }
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            });
    }
    //This method allows for fetching products without creating a new object
    //Called directly on the method itself
    static fetchAll(cb) {
        const p = path.join( path.dirname(process.mainModule.filename), 
        'data', 
        'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
};
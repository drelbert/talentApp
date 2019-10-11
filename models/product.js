const getDb = require('../util/database').getDb;

class Product {
  constructor(title, courseCode, description, date) { 
    this.title = title;
    this.courseCode = courseCode;
    this.description = description;
    this.date = date;
  }
  //Save method = function that is executed on the class
  save() {
    const db = getDb();
    return db.collection('products')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;

/*
const fs = require('fs');
const path = require('path');

const Cart = require('./cart')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

  const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

module.exports = class Product {
    //Def the prod shape
    constructor(id, title, courseCode, description, date) {
        //The property recieving the argument (t)
        this.id = id;
        this.title = title; 
        this.courseCode = courseCode;
        this.description = description;
        this.date = date;
    }
    //Save method to store into the products array
    save() {
        getProductsFromFile(products => {
          if (this.id) {
           const existingProductIndex = products.findIndex(prod => prod.id === this.id);
           const updatedProducts = [...products];
           updatedProducts[existingProductIndex] = this;
           fs.writeFile(p, JSON.stringify(updatedProducts), err => {
            console.log(err);
          });
        } else {  
          this.id = Math.random().toString();
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
          });
         }
        });
      }
    
    static deleteById(id) {
      getProductsFromFile(products => {
        const product = products.find(prod => prod.id === id);
        const updatedProducts = products.filter(prod => prod.id !== id);
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          if (!err) {
            Cart.deleteProduct(id, product.productQty)
          }
        });
      });
    }
      
    //This method allows for fetching products without creating a new object
    //Called directly on the method itself
    static fetchAll(cb) {
        getProductsFromFile(cb);
      }

    static findById(id, cb) {
      getProductsFromFile(products => {
        const product = products.find(p => p.id === id);
        cb(product);
      })
    }
};
*/
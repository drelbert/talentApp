//Root file
//Create a server with importing some functionality with require()
//Note if importing local file need ./ for relative path or / for absolute path
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

// Create Express app, running express as function, initializes a new object
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//Importing routes
const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');
//const tweetData = require('./routes/dataView');


//The middleware 
app.use(bodyParser.urlencoded({extended: false}) );
//Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    // ...
    next();
});

//Using the imported 
//Note '/admin' is the route filter for admin routes
app.use('/admin', adminRoutes);
//app.use(shopRoutes);
//app.use(tweetData.routes);


//Adding 404 handler page 
app.use(errorController.get404);

//Here is the server with the listen method
//It is listening for req's
mongoConnect(() => {
  app.listen(3000);
});
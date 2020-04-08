const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
// Sets up the Express app to handle data parsing
// This middleware is responsible for constructing the
// body property on the response object passed to our route handlers.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const tables = []
const waitList = []
    // get request from the user
    // create another route for reservation
    // view tables & home page
    // posts for clear tables 
    // posts for making reservations
    //
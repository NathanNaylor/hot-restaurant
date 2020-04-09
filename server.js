const path = require("path");
const express = require("express");
const app = express();


const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// This middleware is responsible for constructing the
// body property on the response object passed to our route handlers.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [{
    name: "",
    phone: "",
    email: "",
    id: ""
}, ];
const waitList = [{
    name: "",
    phone: "",
    email: "",
    id: ""
}, ];
// get request from the user

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", (req, res) => {
    res.sendFile(path.join(__dirname, "make-reservation.html"));
});

// Displays all characters
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});


//data for current 5 tables
app.get("/api/tables", (req, res) => {
    res.json(tables);
});
//data for waitlist
app.get("/api/waitList", (req, res) => {
    res.json(waitList);
});

// Create New reservations - takes in JSON input
app.post("/api/tables", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newPatron = req.body;

    console.log(newPatron);


    if (tables.length < 5) {
        tables.push(newPatron);
        res.send("Tables available, adding to table.");
    } else {
        waitList.push(newPatron)
        res.send("Tables not available, adding to waitlist.");
    }

    // if (tables.find(({ name }) => newPatron.name === name)) {
    //     console.log(true)
    // } else {
    //     console.log(false)
    // };
});


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
// create another route for reservation
// view tables & home page
// posts for clear tables
// posts for making reservations
//
const http = require("http");
const url = require("url");


http.createServer(function (req, res) {
    // Set the content type to JSON
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/profile") {
        res.end(JSON.stringify({ message: "This is the profile page!" }));
    } else if (req.url === "/products") {
        // Parse the query parameters
        const urlString = url.parse(req.url, true);
        const searchQuery = urlString.query.search;

        // List of products that return "Product found"
        const foundProducts = ["Milk", "Eggs", "Cheese", "Pork", "Shrimp", "Chicken"];

        // Check if the search query is in the list
        if (searchQuery && foundProducts.includes(searchQuery)) {
            res.end(JSON.stringify({ message: `Product "${searchQuery}" found.` }));
        } else {
            res.end(JSON.stringify({ message: `Product "${searchQuery}" not found.` }));
        }
    } else if (req.url === "/cart") {
        res.end(JSON.stringify({ message: "This is the cart page!" }));
    } else if (req.url === "/register") {
        res.end(JSON.stringify({ message: "This is the register page!" }));
    } else if (req.url === "/login") {
        res.end(JSON.stringify({ message: "This is the login page!" }));
    } else {
        res.end(JSON.stringify({ message: req.url }));
    }
}).listen(8080); // The server object listens on port 8080

const express = require("express");

const PORT:number = parseInt(process.env.PORT) || 3000;

boot();

async function boot() {
    const app = express();
    setUpRoutes(app);
    app.listen(PORT, function() {
        console.log(`Server listening on port ${PORT}`)
    });
}

async function setUpRoutes(app) {
    app.get("/healthcheck", (req, res) => {
        const health = {message: "I am OK! Thank you for asking!"}
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(health));
    });

    app.get("/helloreactmessage", (req, res) => {
        const health = {message: "Edit src/App.tsx and save to reload."}
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(health));
    });
}
import express from "express";
import * as db from "./db";

const PORT:number = parseInt(process.env.PORT) || 3000;

boot();

async function boot() {
    await db.connect();
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

    app.get("/helloreactmessage", async (req, res) => {
        const homePageDoc = await db.get().collection("pages").findOne({
            pageName: "homePage"
        }, {
            projection: {
                reactMessage: 1
            }
        });
        const health = {message: homePageDoc.reactMessage}
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(health));
    });
}
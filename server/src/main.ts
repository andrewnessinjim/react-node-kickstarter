import * as http from "http";
import * as fs from "fs";
import * as path from "path";

import express from "express";
import * as db from "./db";
import chalk from "chalk";
import { health } from "./health";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import Query from "./Query";

const PORT:number = parseInt(process.env.PORT) || 3000;

boot();

async function boot() {
    await db.connect(); 
    const app = express();
    setUpRoutes(app);
    startApolloServer(app);
}

async function startApolloServer(app) {
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs: fs.readFileSync(
            path.join(__dirname, "schema.graphql"),
            "utf-8"
        ),
        resolvers: {
            Query
        },
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
    });

    await server.start();
    server.applyMiddleware({
        app
    });

    await new Promise(resolve => httpServer.listen({port: PORT}, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

async function setUpRoutes(app) {
    app.get("/healthcheck", (req, res) => {
        const healthJson = health();
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(healthJson));
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

    if(process.env.NODE_ENV == "production") {
        console.log(chalk.bgRed.white("Detected PRODUCTION env, serving static files from public directory."));
        app.use(express.static("public"));
    } else {
        console.log(chalk.bgRed.white("Detected DEVELOPMENT env, not serving static files."));
    }
}
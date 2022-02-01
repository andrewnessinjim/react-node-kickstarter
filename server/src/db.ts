import { MongoClient } from "mongodb";

let mongoClient:MongoClient = null;

export async function connect() {
    try {
    mongoClient = await MongoClient.connect(
        process.env.DB_URI, {
            
        }
    );
    } catch(e) {
        console.error(e);
        console.error("Unable to connect to DB, exiting application!");
        process.exit(1);
    }
    console.log("Connected to MongoDB successfully");
}

export function get() {
    if(!mongoClient) {
        throw new Error("Call connect first");
    }
    return mongoClient.db(process.env.DB_NAMESPACE);
}
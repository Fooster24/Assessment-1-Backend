import { MongoClient, ServerApiVersion } from "mongodb";
import { MDBURI } from "./config.js";


const cilent = new MongoClient(MDBURI,
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }


    }
);

const myDB = cilent.db("sample_analytics")
const mycol = myDB.collection("customers")
const mytrans = myDB.collection("transactions")
export {mycol,mytrans}
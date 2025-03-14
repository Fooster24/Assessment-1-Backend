import { json } from "express";
import { mycol } from "./mongo.js";
import { mytrans } from "./mongo.js";

let gettransactions = (res) => {
    mytrans.find({}, { limit: 20, sort: { account_id: 1 } }).project({  bucket_start_date:0,bucket_end_date:0,_id:0

         }).toArray()
        .then(resp => {
            console.log(resp)
            res.status(200).json(resp)

        })

}
let getalltransactions = (res) => {
    mytrans.find({"account_id":996263})
        .then(resp => {

            res.status(200).json(resp)

        })
}



export { gettransactions,getalltransactions}

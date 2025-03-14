import { json } from "express";
import { mycol } from "./mongo.js";
import date from 'date-and-time'
let getcustomers = (res) => {
    mycol.find({}, { limit: 20, sort: { username: 1 } }).project({ _id: 0, tier_and_details: 0 }).toArray()
        .then(resp => {
            console.log(resp)
            if (!resp)
                resp = { "message": "No records found." }
            else {
                resp.forEach(doc => {
                    console.log(doc._id)
                    doc.birthdate = date.format(doc.birthdate, 'D MMM Y')
                    //sort:{customers: 1}
                })
                res.status(200).json(resp)
            }
        })

}
let getCustomerNames = (res) => {
    myCollection.find({ "customersnames": { $gte: 90 } }, { limit: 10, }).toArray()
        .then(resp => {
            res.status(200).json(resp)



        })

}



export { getcustomers, getCustomerNames }

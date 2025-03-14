import express from 'express'
import { PORT } from './config.js'
import { getcustomers } from './customers.js'
import { getalltransactions, gettransactions } from './transaction.js'


const app = express()

app.listen(PORT, () => {
    console.log(`App is lisening on port ${PORT}`)
})

app.get("/", (req, res) => {
    res.status(200).send("The Customer Is Always Right")


})
app.get("/customers", (req, res) => {
    console.log(req.params.id)
    getcustomers(res)
})

app.get("/customers/names", (req, res) => {
    console.log(req.params.names)
    getCustomerNames(res)
})

app.get("/customers/:id", (req, res) => {
    console.log(req.params.id)
    getcustomers(res)
})

app.get("/transactions", (req, res) => {
    console.log(req.params.id)
    gettransactions(res)
})

app.get("/transactions/:id", (req, res) => {
    console.log(req.params.id)
    gettransactions(res)
})

app.get("/alltransactions", (req, res) => {
    console.log(req.params.names)
    getalltransactions(res)
})

app.get("/transactions/find/:id", (req, res) => {
    let id = req.params.id
    gettransactions(res, id)
})


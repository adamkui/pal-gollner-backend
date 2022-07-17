const dotenv = require("dotenv")
const express = require("express")
const app = express()
const cors = require('cors')
const axios = require("axios")

dotenv.config()

app.use(cors())

app.get("/", (req, res) => {
    axios.get(`https://${process.env.CLOUDINARY_API_CLIENT}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/disyx1lwa/resources/search?max_results=500&expression=folder:palgollner/*`).then(axiosRes => {
        res.jsonp(axiosRes.data)
})
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on host ${process.env.PORT}`)
})
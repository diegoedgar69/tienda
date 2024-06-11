const express = require("express")
const app = express()

app.get("/api", (req,res) => {
    res.json({"s1":"s2"})
})

app.listen(5001, () => {
    console.log("nose")
})

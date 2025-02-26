const express = require("express");
const cors = require("cors")

// accept requests from the array origin only
const corsOptions = {
    origin: ["http://localhost:5174/"]
}
const app = express();
app.use(cors())


app.get("/api", (req, res) => {
    res.json({fruits: ["apple","strawberry","banan"]})
})


app.listen(5000, () => {
    console.log("Server running on port 5000")
})
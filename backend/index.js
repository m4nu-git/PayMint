const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/api/v1", rootRouter);

app.listen(PORT, function(error) {
    if (error) console.log(error);
    console.log("Server listening the PORT", PORT);
});


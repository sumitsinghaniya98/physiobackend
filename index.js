const express = require("express");
require("dotenv").config();
const userRouter = require("./routes/userRoute")
const cors = require("cors")

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())

app.use(express.json());

app.use("/user", userRouter);



app.listen(PORT, async () => {
    try {
        console.log(`port is running on ${PORT}`);
    } catch (err) {
        console.error(err);
    }
    console.log(`Listening on port ${PORT}`);
});
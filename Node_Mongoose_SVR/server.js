const express = require('express');
const app = express();

const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use("/port", require("./routes/port"));
app.use("/blog", require("./routes/blog"));
app.use("/user", require("./routes/user"));
app.use("/event", require("./routes/events"));

app.listen(5000, () => { console.log("Server running on http://localhost:5000"); });
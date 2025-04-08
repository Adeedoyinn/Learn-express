require ("dotenv").config();
const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3501;
const cors = require('cors');//nc
const cookieParser = require("cookie-parser");
const verifyJWT = require("../Learn express/middleware/verifyMyJWT")
const mongoose = require('mongoose');
const connectDB = require("../Learn express/config/db_connect");
const corsOptions = require("./config/corsConfig")

connectDB();


app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());

app.use('/login', require("./routes/loginMyUser"));
app.use('/refresh', require("./routes/refreshToken"));
app.use('/register', require("./routes/registerUser"));
app.use('/employees', verifyJWT, require("./routes/employees"));
app.use('/logout', require("./routes/logoutUser"))
app.use('/', require("./routes/root"));
app.use

mongoose.connection.once('open', () =>{
    console.log("DB connected");
    
    app.listen(PORT, () => console.log(`The server is running on port http://localhost:${PORT}`))
})
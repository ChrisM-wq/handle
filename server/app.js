const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRoutes");
const tasksRouter = require("./routes/tasksRoutes");
const app = express();

//Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 4 * 60 * 60 * 1000 } // 4 hours
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./strategies/local')(passport);
require('./strategies/google')(passport);


app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/task", taskRouter);
app.use("/tasks", tasksRouter);

module.exports = app;
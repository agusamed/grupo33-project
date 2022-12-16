const express = require('express');
const http = require('http');
const cors = require('cors');
const { registrationUser, loginUser, sendOTP, resetPassword } = require('./controllers/login');
const { createClass, rateClass, hireClass, getHiredClasses, obtainClasses } = require('./controllers/class');
const { runDatabase } = require('./repository/client');

const app = express();
const server = http.createServer(app);

app.use(cors())
app.use(express.json())


app.post('/register', registrationUser);
app.post('/login', loginUser);
app.post('/sendOTP', sendOTP);
app.post('/resetPassword', resetPassword);
app.post('/class', createClass);
app.get('/class', obtainClasses);
app.post('/class/rate', rateClass);
app.post('/class/hire', hireClass);
app.get('/class/hire', getHiredClasses);



server.listen(3000, function () {
	console.log("server is listening on port: 3000");
});

runDatabase(undefined, true);
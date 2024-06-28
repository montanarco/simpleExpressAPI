const express = require('express');
const cors = require('cors');
const app = express();
const patientRoutes = require('./controllers/patientController');
const clinicalRoutes = require('./controllers/clinicalController');
const db = require('./db/database');
db.connectDB();

app.use(cors()); 
app.use(express.json());

app.use('/clinicalapi/patients', patientRoutes);
app.use('/clinicalapi/clinicals', clinicalRoutes);

const http = require('http');
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const close = () => { server.close();}

module.exports = {app, close}
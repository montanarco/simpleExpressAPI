const express = require('express');
const cors = require('cors');
const patientRoutes = require('./controllers/patientController');
const clinicalRoutes = require('./controllers/clinicalController');
const db = require('./db/database');
db.connectDB();
const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Clinical API',
      version: '1.0.0',
      description: 'A simple Express API for managing clinical data',
    },
    components: {
      schemas: {
        clinicalSchema: require('./models/clinical.js'),
      },
    },
  },
  apis: ['./controllers/*.js'], // files containing annotations as above
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/clinicalapi/patients', patientRoutes);
app.use('/clinicalapi/clinicals', clinicalRoutes);

app.get('/health', (req, res) => {
  res.send('The patients API is up and running');
});

const http = require('http');
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const close = () => { server.close();}

module.exports = {app, close}
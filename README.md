# Simple Express API

This project is a simple Express.js API that provides CRUD (Create, Read, Update, Delete) operations for managing patient and clinical data. It uses MongoDB as a database to store the data.

## Features

- Patient Management: The API provides endpoints to create, read, update, and delete patient data.
- Clinical Data Management: The API provides endpoints to create, read, update, and delete clinical data associated with a patient.

## Technologies Used

- Node.js: The runtime environment for executing JavaScript code server-side.
- Express.js: A web application framework for Node.js, used to build the API.
- MongoDB: A NoSQL database used to store patient and clinical data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/montanarco/simpleExpressAPI
cd simpleExpressAPI
npm install
```

Then, start the server:

```bash
npm start
```

The API will be available at http://localhost:8000.

## Running Tests

This project uses Jest for testing. To run the tests, use the following command:

```bash
npm test
```

This will run all test files in the project that match the pattern *.test.js.

If you want to run only a specific test file, you can specify it as a command line argument:

```bash
npm test -- patientController.test.js
```

## Development Environment

Install nodemon
```bash
npm install --save-dev nodemon
```

then run the server
```bash
npm run dev
```

## run with docker compose
```bash
docker compose build
```

```bash
docker compose up
```

### Create a Patient
curl -X POST -H "Content-Type: application/json" -d '{"firstName":"Miguel", "lastName":"Montanez", "age":34}' http://localhost:8000/clinicalapi/patients

### Update a Patient
curl -X PUT -H "Content-Type: application/json" -d '{"firstName":"Miguel", "lastName":"Montanez", "age":34}' http://localhost:8000/clinicalapi/patients/667f06f998023907efd6dbb9



### query de data base
* Start the MongoDB shell
```bash
mongosh
```

* Switch to your database
```bash
use patientclinicals
```

* Query the collection

```bash
db.patients.find()
db.clinicals.find()
```
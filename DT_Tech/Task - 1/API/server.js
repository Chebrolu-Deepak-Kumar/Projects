const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const eventRoute = require('./routes/Events');

const uri = 'mongodb://localhost:27017/DT_Tech';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db('DT_Tech');
    console.log('Connected to the MongoDB database.');
    return db;
  } catch (error) {
    console.error('Error connecting to the MongoDB database:', error);
    throw error;
  }
}

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/api/v3/app", eventRoute(connectToDatabase));

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});

module.exports = { connectToDatabase };


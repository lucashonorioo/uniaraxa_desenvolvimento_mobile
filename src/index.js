const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const rotas = require('./routes/AlunoRota');

const app = express();
app.use(express.json());
app.use(cors());
app.use(rotas);

require('dotenv').config({
  path: process.env.NODE_ENV == "test" ?
    "./src/config/.env.testing"
    : "./src/config/.env"

});


mongoose.connect(process.env.DB_CONNECTION,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});



module.exports = app.listen(process.env.PORT || 3333, () => {
    console.log("Server running");
})


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const port = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(express.json());


const invitadosRouter = require('./routes/invitados');
const invitacionRouter = require('./routes/invitacion');

app.use('/invitados', invitadosRouter);
app.use('/invitaciones', invitacionRouter);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
).then(()=>{console.log("Conectado Mongo")}).catch((error)=>{console.log("error",error)});


app.get('/', (req, res) => {
    res.send('Boda API')
  })


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const exphbs = require('express-handlebars');
require("dotenv").config();

const port = process.env.PORT || 9000;
const app = express();
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars'); 


app.use(cors());
app.use(express.json());




const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const invitadosRouter = require('./routes/invitados');
const invitacionRouter = require('./routes/invitacion');

app.use('/invitados', invitadosRouter);
app.use('/invitaciones', invitacionRouter);

app.get('/', (req, res) => {
    res.send('Boda API')
  })


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
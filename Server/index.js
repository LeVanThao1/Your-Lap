const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/YourLap', { useUnifiedTopology: true, useNewUrlParser: true });       
app.listen(port, () => console.log('Server listen on port ' + port));
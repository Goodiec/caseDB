const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const investigations = require('./routes/api/investigations');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/investigations', investigations);

const port = process.env.PORT || 8086;

app.listen(port, () => console.log(`Server running on port ${port}`));
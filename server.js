const express = require('express');
const appRoute = require('./routes/route.js')
const env = require('dotenv').config()
const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json());

/** routes */
app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

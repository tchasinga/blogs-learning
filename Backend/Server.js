const express = require('express');

// Initialize the app
const app = express();


// Setup server port
app.listen(3000, () => {
    console.log('Server started at port 3000');
});
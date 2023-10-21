import app from './app.js';
import { startConnection } from './database.js';

startConnection();
app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on port: ' + process.env.PORT);
  if (!process.env.RESEND_API_KEY) {
    console.log(`Error: You need to define RESEND_API_KEY in the .env file.`);
  }
  console.log('Listening on http://localhost:4000');
});

// //This file is for azure deployment purposes
// const express = require('express');
// const path = require('path');
// const app = express();
// import { startConnection } from './database.js';

// startConnection();
// //app.use(express.static(path.join(__dirname, 'build')));

// // app.get('/*', function (req, res) {
// //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // });

// //const PORT = process.env.PORT || 5000;
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

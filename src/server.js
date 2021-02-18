const AWS = require('aws-sdk'); // Load the SDK for JavaScript
const mailer = require("./mailer");
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

AWS.config.update({region: 'us-east-1'}); // Set the region that you configured in AWS

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Our end-point for handling the enquiry request
app.post('/api/contact', (req, res, next) => {
  console.log("WTF", req.body)
  return mailer.sendMail('no-reply@eastvillagelandscaping.com', ['ogoley22@aim.com'], req.body)
    .then(() => {
      res.send(res.body)})
    .catch(next);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
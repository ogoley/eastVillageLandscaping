const AWS = require('aws-sdk'); // Load the SDK for JavaScript

const htmlTemplate = (data) => {
  console.log(data)
  return `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    <p><strong>Message:</strong> ${data.message}</p>
  `;
};

module.exports.sendMail = (sender, receivers, data) => {
  const params = {
    Destination: {
      ToAddresses: receivers
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Website Enquiry'
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlTemplate(data)
        }
      }
    },
    Source: sender,
  };

  const sendPromise = new AWS.SES().sendEmail(params).promise();

  return sendPromise
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((err) => {
      console.log(err)
      throw new Error(err);
    });
};
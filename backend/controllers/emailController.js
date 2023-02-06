const response = require("../response");
var SibApiV3Sdk = require("sib-api-v3-sdk");
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.EMAIL_API;

const emailController = (req, res) => {
  const { name, email, subject, message } = req.body;
  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      sender: { email, name },
      subject: subject,
      htmlContent: `<!DOCTYPE html><html><body><h1>Pesan User</h1><p>${message}</p></body></html>`,
      messageVersions: [
        //Definition for Message Version 1
        {
          to: [
            {
              email: process.env.EMAIL_USER1,
              name: "Admin",
            },
            {
              email: process.env.EMAIL_USER2,
              name: "MAKDHI",
            },
          ],
        },
      ],
    })
    .then(
      function (data) {
        response(200, data, "email sent", res);
      },
      function (error) {
        response(400, "no data", error.response.data, res);
      }
    );
};

module.exports = emailController;

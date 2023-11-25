const twilio = require("twilio");
const ServerConfig = require("./server-config")

const account_sid = ServerConfig.ACCOUNT_SID;
const auth_token = ServerConfig.AUTH_TOKEN;

const sendSMS = (details) => {

  const client = new twilio(account_sid, auth_token);
  const message = `Your response has been received. You have filled the form with form Id - ${details.formId}`;

  client.messages
    .create({
      body: message,
      from: "+13307915534",
      to: details.responderPhoneNumber,
    })
    .then((response) => {
      console.log("SMS sent");
    })
    .catch((error) => {
      console.error("Error sending SMS:", error.message);
    });
};
module.exports = {
  sendSMS
}

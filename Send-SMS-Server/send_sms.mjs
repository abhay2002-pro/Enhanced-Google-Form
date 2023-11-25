import twilio from "twilio";

const account_sid = "AC483b2948b26ff1f13a9bc03380a88483";
const auth_token = "afa672068de24fe46f18fd395534d810";

const sendSMS = (details) => {
  console.log("Details");

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

export default sendSMS;

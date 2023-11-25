import sendSMS from "./send_sms.mjs";

export const handler = async (event) => {
    const document = event.detail.fullDocument;
    sendSMS(document);
};
const { google } = require("googleapis");
const ServerConfig = require("./server-config")

const clientEmail = ServerConfig.CLIENTEMAIL;
const privateKey = ServerConfig.PRIVATEKEY.replace(/\\n/g, "\n")

async function accessGoogleSheet() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

module.exports = accessGoogleSheet
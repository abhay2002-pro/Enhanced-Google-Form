const { GoogleSheetConfig, KafkaConfig } = require("./config");

async function writeSheetData(spreadsheetId, value) {
  const sheets = await GoogleSheetConfig();

  const values = [value];

  const resource = {
    values,
  };

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:A",
    });

    const nextRowIndex = response.data.values
      ? response.data.values.length + 1
      : 1;

    const range = `Sheet1!A${nextRowIndex}:B${
      nextRowIndex + values.length - 1
    }`;

    const updateResponse = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource,
    });
  } catch (error) {
    console.error("Error writing to Google Sheet:", error);
  }
}

async function startKafkaConsumer() {
  const kafka = KafkaConfig.kafka;
  
  const consumer = kafka.consumer({ groupId: "google-sheet-group" });
  
  await consumer.connect();
  await consumer.subscribe({ topic: "form-submissions", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // Handle Kafka message
      const value = message.value.toString();

      const parsedValue = JSON.parse(message.value.toString());

      const values = [parsedValue.formId, parsedValue.responderPhoneNumber];
      
      try {
        await writeSheetData("1Z1LUVTtfr--p_5Bx-w6z4pfzbmMb-gzQ5HNom4yLzWU", values);
      } catch (error) {
        console.error("Error writing to Google Sheet:", error);
      }
    },
  });
}

startKafkaConsumer();
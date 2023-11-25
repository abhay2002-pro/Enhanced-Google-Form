const { SendSMSConfig, KafkaConfig } = require("./config")

async function startKafkaConsumer() {
    const kafka = KafkaConfig.kafka;
    
    const consumer = kafka.consumer({ groupId: "send-sms-group" });
    
    await consumer.connect();
    await consumer.subscribe({ topic: "form-submissions", fromBeginning: true });
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // Handle Kafka message
        const value = message.value.toString();
  
        const parsedValue = JSON.parse(message.value.toString());
  
        const values = {
            formId: parsedValue.formId, 
            responderPhoneNumber: parsedValue.responderPhoneNumber
        }
        
        try {
            console.log(values);
            SendSMSConfig.sendSMS(values);
        } catch (error) {
          console.error("Error writing to Google Sheet:", error);
        }
      },
    });
  }
  

startKafkaConsumer()
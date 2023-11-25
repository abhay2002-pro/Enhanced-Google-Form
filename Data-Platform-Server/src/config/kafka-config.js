const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "response-controller",
    brokers: ["localhost:9092"],
});

module.exports = {
    kafka
}
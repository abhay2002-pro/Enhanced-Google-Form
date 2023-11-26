# Approach 1: Monolith

## Pros
- **Simplicity:** A monolithic architecture is straightforward to develop and deploy. It reduces the complexity associated with managing multiple services.
- **Single Deployment:** The entire application is deployed as a single unit, making deployment and maintenance more straightforward.

## Cons
- **Scalability Challenges:** Scaling becomes challenging because all services are deployed as a single unit. If one service requires more resources, the entire monolith needs to scale.
- **Limited Fault Isolation:** A failure in one part of the monolith can affect the entire application, reducing fault isolation.

# Approach 2: Microservices with Message Queue

## Pros
- **Scalability:** Allows for scaling individual microservices independently, addressing the issue of needing to scale all services at the same level.
- **Decoupled Services:** Microservices are decoupled, improving fault isolation. A failure in one microservice does not necessarily impact others.
- **Message Queues:** RabbitMQ facilitates asynchronous communication, enabling more efficient handling of use cases.

## Cons
- **Latency:** The 'Data-Platform-Server' has to make multiple calls, leading to potential latency, especially if message queue communication is slow.
- **Possible Message Loss:** If the server crashes while sending events to message queue, there is a risk of losing some use cases.

# Approach 3: Microservices with Message Streams

## Pros
- **Scalability and Fault Isolation:** The 'Data-Platform-Server' only needs to publish events to a Kafka topic, allowing for better scalability and fault isolation.
- **Consumer Groups and Partitions:** Enables scaling of individual consumer groups, and Kafka partitions can be adjusted based on workload.

## Cons
- **Potential for Lag:** Eventual consistency may introduce some lag in processing, affecting real-time use cases.

# Chosen Approach: Microservices with Message Stream

## Why?

- **Scalability and Fault Isolation:** Kafka's event streaming allows for better scalability and fault isolation compared to a monolith or RabbitMQ.
- **Decoupled Services:** Microservices remain decoupled, addressing the issue of scaling all services at the same level.
- **Event-Driven Architecture:** Kafka's event-driven architecture aligns well with the nature of the problem, where post-submission actions are asynchronous.
- **Eventual consistency:** Eventual consistency is acceptable according to the problem statement.

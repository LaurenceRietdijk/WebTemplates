/*
Triggers are not directly supported in MongoDB like in relational databases. Instead, you can use change streams to react 
to changes in the database and perform actions accordingly. 
Example of using change streams to monitor the "orders" collection for insert, update, and delete events.
*/
exports = function(changeEvent) {
    // Access the event information
    const fullDocument = changeEvent.fullDocument;
    const operationType = changeEvent.operationType;
    
    // Log the event information
    console.log(`Operation type: ${operationType}`);
    console.log(`Changed document: ${JSON.stringify(fullDocument)}`);
    
    // Perform actions based on the event type
    if (operationType === 'insert') {
        // Do something when a new document is inserted
    } else if (operationType === 'update') {
        // Do something when a document is updated
    } else if (operationType === 'delete') {
        // Do something when a document is deleted
    }
};

// testing the trigger:
// Perform an action that triggers the trigger function
db.orders.insertOne({
    "_id": "order99125",
    "date": "2024-03-20",
    "status": "pending",
    "customer": {
      "_id": "customer458",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "shipping_address": {
        "street": "789 Elm Street",
        "city": "Anytown",
        "state": "Anystate",
        "zip": "12345"
      }
    },
    "products": [
      {
        "_id": "product104",
        "name": "Phone",
        "description": "A new smartphone.",
        "quantity": 1,
        "price_per_unit": 499.99
      }
    ],
    "total_price": 499.99,
    "payment_method": {
      "type": "credit_card",
      "transaction_id": "def789"
    }
  });
  
  // Check the logs in MongoDB Realm to verify if the trigger function was executed
  // Verify the expected behavior based on the trigger function's logic
  
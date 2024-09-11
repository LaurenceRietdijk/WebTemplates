// Create index on the "date" field for faster querying
db.orders.createIndex({ "date": 1 });

// Create compound index on "customer_id" and "status" fields
db.orders.createIndex({ "customer_id": 1, "status": 1 });

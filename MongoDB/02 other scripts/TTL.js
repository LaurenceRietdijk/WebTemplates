//Applying TTL (Time-to-Live):
// Apply TTL to documents to automatically expire after a certain period
// TTL index on "date" field with expiration time set to 30 days
db.orders.createIndex({ "date": 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

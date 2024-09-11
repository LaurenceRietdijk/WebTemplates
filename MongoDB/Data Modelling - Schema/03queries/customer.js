db.customers.find({ "lastName": "Doe" });

db.customers.find({ "address.state": "CA" });

db.customers.aggregate([
  { $group: { _id: "$address.city", count: { $sum: 1 } } }
]);

db.customers.aggregate([
  { $group: { _id: "$address.state", count: { $sum: 1 } } }
]);

db.customers.find({ "email": "jane.smith@example.com" });

db.customers.find({ "address.zip": "23456" });

db.customers.updateOne({ "firstName": "John" }, { $set: { "email": "john.doe@example.org" } });

db.customers.deleteOne({ "lastName": "Johnson" });

db.customers.updateOne({ "firstName": "Jane" }, { $set: { "address": { "street": "123 Maple St", "city": "Somewhere", "state": "CA", "zip": "98765" } } });

db.customers.deleteMany({ "address.state": "CA" });

db.customers.updateOne({ "firstName": "Bob" }, { $set: { "lastName": "Smith" } });

db.customers.aggregate([
  { $group: { _id: "$address.state", count: { $sum: 1 } } }
]);






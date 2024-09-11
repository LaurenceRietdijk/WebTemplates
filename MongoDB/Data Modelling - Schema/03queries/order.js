db.order.insertOne({
  "orderDate": "2022-10-03",
  "customer": {
    "firstName": "Bob",
    "lastName": "Johnson",
    "email": "bob.johnson@example.com"
  },
  "total": 250.99,
  "items": [
    {
      "product": {
        "name": "Wireless Headphones",
        "price": 149.99
      },
      "quantity": 1
    },
    {
      "product": {
        "name": "Black Leather Jacket",
        "price": 129.99
      },
      "quantity": 1
    }
  ]
});

db.order.find({ "total": { $gt: 100 } });

db.order.find({ "customer.email": "john.doe@example.com" });

db.order.updateOne(
  { "customer.email": "jane.smith@example.com", "total": 99.99 },
  { $set: { "total": 109.99 } }
);

db.order.deleteOne({ "customer.email": "bob.johnson@example.com", "total": 250.99 });

db.order.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.product.name", totalSales: { $sum: { $multiply: [ "$items.quantity", "$items.product.price" ] } } } }
]);

db.order.aggregate([
  { $group: { _id: "$customer.email", numOrders: { $sum: 1 } } }
]);

db.order.aggregate([
  { $group: { _id: { $substr: [ "$orderDate", 0, 7 ] }, avgTotal: { $avg: "$total" } } }
]);



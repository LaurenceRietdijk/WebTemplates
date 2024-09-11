// Sort orders by date in ascending order
db.orders.find().sort({ "date": 1 });

// Sort orders by total price in descending order
db.orders.find().sort({ "total_price": -1 });

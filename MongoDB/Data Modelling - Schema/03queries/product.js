db.products.insertOne({
  "name": "Red Shirt",
  "description": "A bright red shirt made from 100% cotton.",
  "price": 29.99,
  "category": "Clothing",
  "tags": ["Red", "Shirt", "Cotton"]
});

db.products.find({});

db.products.updateOne(
  { "name": "Red Shirt" },
  { $set: {
      "description": "A bright red shirt made from 100% organic cotton.",
      "price": 34.99,
      "tags": ["Red", "Shirt", "Organic"]
    }
  }
);

db.products.deleteOne({ "name": "Red Shirt" });

db.products.find({ "name": "Red Shirt" });

db.products.find({ "price": { $gte: 50, $lte: 100 } });

db.products.aggregate([
  { $group: { _id: "$category", total: { $sum: "$price" } } }
]);

db.products.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } }
]);

db.products.find({ $text: { $search: "sneakers" } });



// Set the write concern to "w: 1" for inserting a single order
db.orders.insertOne({
    _id: "order123",
    date: "2024-03-12",
    status: "shipped",
    customer_id: "customer456",
    products: [
        {
            product_id: "product789",
            quantity: 2
        },
        {
            product_id: "product101",
            quantity: 1
        }
    ],
    total_price: 39.97,
    payment_method: {
        type: "credit_card",
        transaction_id: "xyz123"
    }
}, { writeConcern: { w: 1 } });

// Set the write concern to "w: majority" for inserting a single order
db.orders.insertOne({
    _id: "order124",
    date: "2024-03-15",
    status: "pending",
    customer_id: "customer457",
    products: [
        {
            product_id: "product102",
            name: "Book",
            description: "A fascinating book.",
            quantity: 1,
            price_per_unit: 14.99
        },
        {
            product_id: "product103",
            name: "Lamp",
            description: "A bright lamp.",
            quantity: 2,
            price_per_unit: 22.99
        }
    ],
    total_price: 60.97,
    payment_method: {
        type: "paypal",
        transaction_id: "abc456"
    }
}, { writeConcern: { w: "majority" } });

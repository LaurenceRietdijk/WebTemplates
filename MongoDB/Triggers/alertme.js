const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');

// Email configuration (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jawdat@@gmail.com',
    pass: 'mypassword456'
  }
});

// MongoDB Connection URL
const url = 'mongodb+srv://jawdatjm:mR1GG4uU6GAaDvaq@cluster0.uzx8v.mongodb.net/?tls=true';
 
// Database and Collection
const dbName = 'SALESDB2024';
const collectionName = 'orders';

async function main() {
    await client.connect();
    console.log("Connected correctly to ATLAS server");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const changeStream = collection.watch();

    changeStream.on('change', async (change) => {
        if (change.operationType === 'insert') {
            const order = change.fullDocument;
            if (order.total > 500 || order.items.some(item => item.product.name === "Laptop")) {
                console.log("High-value order or specific item detected:", order);
                await sendEmail(order); // Send an email notification
                updateDashboard(order); // Function to update a dashboard or log event
            }
        }
    });
}

async function sendEmail(order) {
    const mailOptions = {
        from: 'jawdat@gmail.com',
        to: 'manager@gmail.com',
        subject: 'Alert: High-Value Order Placed',
        text: `A new high-value order has been placed. Total: $${order.total}. Details: ${JSON.stringify(order)}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Error sending email: ", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function updateDashboard(order) {
    console.log('Updating dashboard with new high-value order:', order);
    
}

main().catch(console.error);

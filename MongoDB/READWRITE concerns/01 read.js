// Set the read concern to "local"
db.orders.find().readConcern({ level: "local" })

// Set the read concern to "majority"
db.orders.find().readConcern({ level: "majority" })

// Set the read concern to "linearizable"
db.orders.find().readConcern({ level: "linearizable" })

// Set the read concern to "snapshot"
db.orders.find().readConcern({ level: "snapshot" })

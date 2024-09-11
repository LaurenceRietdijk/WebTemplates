// Set both read and write concerns for a find operation
db.orders.find().readConcern({ level: "linearizable" }).writeConcern({ w: "majority" })

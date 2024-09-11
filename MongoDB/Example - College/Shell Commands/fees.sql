
-- Create the fees collection:


db.fees.insertOne({
  student: "John Doe",
  semester: "Spring 2022",
  amount: 5000
})

db.fees.insertMany([
  {
    student: "Jane Smith",
    semester: "Fall 2021",
    amount: 4500
  },
  {
    student: "Bob Johnson",
    semester: "Summer 2022",
    amount: 5500
  }
])

-- Query the fees collection:

db.fees.find()

db.fees.find({ amount: { $gt: 5000 } })

db.fees.find().sort({ amount: 1 })

-- Update documents in the fees collection:

db.fees.updateOne(
  { student: "John Doe", semester: "Spring 2022" },
  { $set: { amount: 5500 } }
)

db.fees.updateMany(
  { semester: "Fall 2021" },
  { $inc: { amount: 500 } }
)

-- Delete documents from the fees collection:

db.fees.deleteOne({ student: "Bob Johnson" })

db.fees.deleteMany({ amount: { $lt: 5000 } })




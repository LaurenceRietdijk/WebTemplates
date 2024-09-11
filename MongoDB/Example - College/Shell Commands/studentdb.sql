use school

db.students.insertOne({
  name: "John Doe",
  age: 20,
  major: "Computer Science"
})

db.students.insertMany([
  {
    name: "Jane Smith",
    age: 22,
    major: "Biology"
  },
  {
    name: "Bob Johnson",
    age: 19,
    major: "History"
  }
])

db.students.find()

db.students.find({ major: "Computer Science" })

db.students.find().sort({ age: -1 })

db.students.find({ age: { $gt: 20 } })

db.students.updateOne(
  { name: "John Doe" },
  { $set: { major: "Physics" } }
)

db.students.updateMany(
  { major: "Biology" },
  { $set: { major: "Biochemistry" } }
)


db.students.deleteOne({ name: "Bob Johnson" })

db.students.deleteMany({ age: { $lt: 20 } })


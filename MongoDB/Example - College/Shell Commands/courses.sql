
-- Create the courses collection:

db.courses.insertOne({
  name: "Computer Science 101",
  instructor: "Dr. Smith",
  credits: 3
})

db.courses.insertMany([
  {
    name: "Biology 101",
    instructor: "Dr. Jones",
    credits: 4
  },
  {
    name: "History 101",
    instructor: "Dr. Brown",
    credits: 3
  }
])
-- Query the courses collection:

db.courses.find()

db.courses.find({ credits: { $gte: 3 } })

db.courses.find().sort({ name: 1 })

-- Update documents in the courses collection:

db.courses.updateOne(
  { name: "Computer Science 101" },
  { $set: { credits: 4 } }
)

db.courses.updateMany(
  { instructor: "Dr. Jones" },
  { $set: { instructor: "Dr. Smith" } }
)

-- Delete documents from the courses collection:

db.courses.deleteOne({ name: "History 101" })

db.courses.deleteMany({ credits: { $lt: 4 } })


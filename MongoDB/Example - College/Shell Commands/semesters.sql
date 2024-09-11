-- Create the semesters collection:
db.semesters.insertOne({
  name: "Fall 2021",
  start_date: ISODate("2021-09-01"),
  end_date: ISODate("2021-12-31")
})

db.semesters.insertMany([
  {
    name: "Spring 2022",
    start_date: ISODate("2022-01-01"),
    end_date: ISODate("2022-05-31")
  },
  {
    name: "Summer 2022",
    start_date: ISODate("2022-06-01"),
    end_date: ISODate("2022-08-31")
  }
])

-- Query the semesters collection:

db.semesters.find()

db.semesters.find({ start_date: { $lt: ISODate("2022-01-01") } })

db.semesters.find().sort({ name: -1 })

-- Update documents in the semesters collection:
db.semesters.updateOne(
  { name: "Fall 2021" },
  { $set: { end_date: ISODate("2022-01-15") } }
)

db.semesters.updateMany(
  { name: { $regex: "2022" } },
  { $set: { end_date: ISODate("2022-08-31") } }
)

-- db.semesters.updateOne(
  { name: "Fall 2021" },
  { $set: { end_date: ISODate("2022-01-15") } }
)

db.semesters.updateMany(
  { name: { $regex: "2022" } },
  { $set: { end_date: ISODate("2022-08-31") } }
)

-- Delete documents from the semesters collection:

db.semesters.deleteOne({ name: "Summer 2022" })

db.semesters.deleteMany({ start_date: { $lt: ISODate("2022-01-01") } })



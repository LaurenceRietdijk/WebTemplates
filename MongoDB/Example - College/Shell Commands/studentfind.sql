-- Find all documents in the students
db.students.find()

-- Find documents that match a specific criteria
db.students.find({ name: "John" })

-- Find documents that match multiple criteria
db.students.find({ age: { $gte: 18 }, gender: "female" })

-- Exclude specific fields from the returned documents
db.students.find({}, { name: 0, _id: 0 })

-- Sort the returned documents in ascending order by a specific field
db.students.find().sort({ age: 1 })

-- Skip the first 10 documents in the students
db.students.find().skip(10)

-- Limit the number of returned documents to 20
db.students.find().limit(20)

-- Use a specific index to optimize the query performance
db.students.find().hint({ age: 1 })

-- field contains the substring "John", you can use the following query:
db.students.find({ name: { $regex: "John" } })

-- You can also use regular expression options to perform case-insensitive searches or to match only whole words. Here's an example of a case-insensitive 
-- search for documents where the name field contains the substring "john":
db.users.find({ name: { $regex: "john", $options: "i" } })

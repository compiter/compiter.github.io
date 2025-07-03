db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

db.employees.insertMany([
 {
name: "Mike Joseph",
 email: "mike@gmail.com",
 department: "IT",
 salary: 2456,
 location: ["FL", "TX"],
 date: new Date()
},
 {
 name: "Cathy G",
 email: "cathy@gmail.com",
 department: "IT",
 salary: 3456,
 location: ["AZ", "TX"],
 date: new Date()
}
]);


db.employees.find();
// db.users.find({},{name:1})
// show collections()


db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    date: Date(),
  },
  {
    name: "Rafeal",
    email: "rafeal@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: Date(),
  },
]);

db.employees.find();
// db.users.find({},{name:1})
// show collections()

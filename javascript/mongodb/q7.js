// db.employees.aggregate([
// {$project:{_id:0,name:1,salary:1}}
// ])


db.employees.aggregate([
{$project:{_id:0,name:1,salary:1,"GradeA"}}
])


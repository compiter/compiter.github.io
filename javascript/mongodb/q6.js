db.employees.find({salary:{$gt:3000}},{name:true}).limit(2).skip(1)


db.employees.find({$or:[{salary:{$gt:3000}},{department:"IT"}]},{name:1})
// db.employees.aggregate([

// {$match:{salary:{$gt:2000}}},
// {$project:{name:1,salary:1,location:1}},
// {$sort:{name:-1}},
// {$limit:1},
// ])



db.employees.aggregate([
{$match:{salary:{$gt:2000}}},
{$project:{name:1,salary:1,locations:1}},

])

db.employees.aggregate([
{$match:{salary:{$gt:2000}}},
{$project:{name:1,salary:1,points:1}},

])

db.employees.updateMany({},
{$addToSet:{location:"FL"}}
);

db.employees.aggregate([
{$project:{_id:0,name:1,location:1}},{
$unwind:"$location"
},
])


db.employees.aggregate([
{$project:{
    _id:0,
    name:1,
    salary:1,
bonus:{$multiply:["$salary",2]}
}},
]);

db.employees.aggregate([
    {$project:{name:0}}
])

db.employees.aggregate([
    {$group:{_id:"$department",total:{$sum:"$salary"}}},
])



db.orders.insertOne([
{
    empID:ObjectId('685a8a9ea10f154017b5f899'),
    orderValue:1200,

},
]);



db.orders.insertOne([
{
    empID:ObjectId('685bbaa13bcf861facb5f899'),
    orderValue:1700,

},
]);




db.orders.insertOne([

{
    empID:ObjectId('685bbac03bcf861facb5f89b'),
    orderValue:1500,

},

]);




db.orders.insertOne([
{
    empID:ObjectId('685bbac03bcf861facb5f89b'),
    orderValue:1600,

},
]);
db.employees.aggregate([
{
$lookup:{
    from:"orders",
    localField:"_id",
    foreignField:"empID",
    as:"orders",
},
},
{$unwind:"$orders"},
// {$project:{name:1,"orders.orderValue":1}}
]);


db.empcountry.insertOne([

{
    empID:ObjectId('685bbac03bcf861facb5f89b'),
    country:"USA",

},
]);

db.empcountry.insertOne([
{
    empID:ObjectId('685a8a9ea10f154017b5f899'),
    country:"India",

},
]);

db.empcountry.insertOne([

{
    empID:ObjectId('685bbac03bcf861facb5f89b'),
    country:"japan",

},

]);

db.empcountry.insertOne([

{
    empID:ObjectId('685bbac03bcf861facb5f89b'),
    country:"Europe",

},

]);

db.employees.aggregate([
{
$lookup:{
    from:"empcountry",
    localField:"_id",
    foreignField:"empID",
    as:"empcountry"
},
},
]);


db.employees.createIndex({"email":1})

db.employees.aggregate([{$group:{_id:"$country",total:{$sum:"$score"}}}])
db.employees.aggregate([
{$group:{_id:{country:"$country",name:"$name"},}}
])


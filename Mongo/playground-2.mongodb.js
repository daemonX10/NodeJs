db.getMongo().getDBNames();

db.dropDatabase("twitter");

use("twitter");
db.createCollection("tweets");
db.createCollection("users");
db.createCollection("followers");
db.createCollection("comments");

db.getDBNames();

db.getMongo().getDBNames();

db.getCollectionNames(); // show collections

db.tweets.insertOne({name:"sanket", age:25});
db.users.insertOne({name:"DAMODAR", age:18,college:"TCET"});

db.users.find();
db.tweets.find();

use("EcommerceDb");
db.createCollection("products");

db.products.insertMany([{name:"mouse",price:500},{name:"keyboard",price:1000},
{name:"monitor",price:5000},{name:"cpu",price:10000},{name:"ram",price:1500},
{name:"hdd",price:2000,discount:10,category:"storage",brand:"seagate"},
{name:"ssd",price:5000,discount:10,category:"storage",brand:"samsung"},
{name:"pendrive",price:500,discount:10,category:"storage",brand:"sandisk"},
{name:"printer",price:5000,discount:10,category:"storage",brand:"hp"},
{name:"scanner",price:5000,discount:10,category:"storage",brand:"hp"},
{
    name:"laptop",price:60000,discout:28,category:"electronics",brand:"lenovo"
},
{
    name:"mobile",price:20000,discout:10,
    category:"electronics",brand:"relame"
},
{
    name:"tv",price:50000,discout:10,
    category:"electronics",brand:"sony"
}]
);

use("EcommerceDb");
db.createCollection("airnbn");

db.products.count();

db.products.find({category:"storage"});

mongoimport 
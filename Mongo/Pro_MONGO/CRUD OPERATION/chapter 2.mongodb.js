db;

db.people.insertOne({
    name:"Tom",
    age:28
});

db.people.insertOne({name:"damodar",age:20})


db.people.insertMany([{ //insert many
    name:"tom",age:200
},
{
    name:"jerry",age:300
},
{
    name:"john",age:20
},
{
    name:"kathy",age:20
}]
);

// Section 2.2 update

db.people.updateOne({name:"damodar"},{$set:{age:21,name:"yadav"}});

db.people.find({name:"yadav"}).pretty();

/* The `{multi:true}` option allows the update to be applied to multiple documents
that match the query criteria. */
db.people.update({name:"yadav"},{$set:{age:30}},{multi:true});

db.people.updateMany({age:20},{$set:{age:21,name:"God"}});

db.people.find({name:"Laxman"}).pretty();

db.people.updateMany({age:21},{$set:{age:30,salary:100000,married:false,}});

db.people.replaceOne({name:"God"},{name:"Laxman",age:25,address:"Sri Ram"},{multi:true})


// # DELETE 

db;

db.people.insertOne({name:"yadav", age:20,college:"Tcet",status:"Non-Working "});

db.people.deleteMany({name:"yadav"});


db.people.find({name:"yadav"}).pretty();

db.people.remove({name:"yadav"})

// MongoDB's remove() method. If you execute this command without any argument or without empty argument it will remove all documents from the collection.
db.people.remove(); 
db.people.remove({});

// SECTION 2.4 : READ

db.people.find({name:"Tom"});

db.people.find();

// You can also specify which fields to return by passing a field selection parameter. The following will exclude the _id field and only include the age field:
db.people.find({name:"Tom"},{_id:0,age:1,name:2});

use("airnb");
db.data.find({},{"_id":0,"address":1});

db.data.findOne({address:""});

use('airnb');
db.data.countDocuments();

db.getCollectionNames();

db;
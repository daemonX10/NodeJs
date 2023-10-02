// Chapter 5: Update Operators

db.mycol.drop();

db.mycol.insert({
 _id: ObjectId('7df78ad8902c'),
 title: 'MongoDB Overview',
 description: 'MongoDB is no sql database',
 by: 'tutorials point',
 url: 'http://www.tutorialspoint.com',
 tags: ['mongodb', 'database', 'NoSQL'],
 likes: 100
});

db.mycol.find();
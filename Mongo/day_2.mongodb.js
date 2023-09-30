/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

use('airnb');

db.data.find().limit(1);

db.data.insertMany([{"_id":5,"quantity":5,"price":55,"targetPrice":150},
{"_id":3,"quantity":6,"price":35,"targetPrice":100},
{"_id":1,"quantity":10,"price":15,"targetPrice":120},
{"_id":4,"quantity":5,"price":55,"targetPrice":150},
{"_id":2,"quantity":5,"price":25,"targetPrice":100}
]);
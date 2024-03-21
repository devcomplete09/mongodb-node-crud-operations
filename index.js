const { getMongoDb } = require('./mongodbConnection');

// MongoDB & Node.js - CRUD operations for beginners

const run = async () => {
  const db = await getMongoDb();
  const collection = db.collection('users');
  console.log('Starting...');
  
  // CREATE
  // await collection.insertOne({
  //   name: 'Jack',
  //   age: 21
  // });

  // await collection.insertMany([
  //   {
  //     name: 'Jack',
  //     age: 21
  //   },
  //   {
  //     name: 'Ami',
  //     age: 20
  //   }
  // ]);

  // READ
  // const result = await collection.findOne({ name: 'John' }, { projection: { _id: 0, age: 0 } });
  // const resultMany = await collection.find({ age: 20 }, { projection: { _id: 0 } }).toArray();

  // UPDATE
  // await collection.updateOne({ name: 'Jack' }, {
  //   $set: {
  //     age: 25,
  //     country: 'Belgium'
  //   }
  // });

  // DELETE
  // await collection.deleteOne({ name: 'Ami' });
  // await collection.deleteMany({});

  console.log('Process completed.');
  process.exit(0);
}

run();
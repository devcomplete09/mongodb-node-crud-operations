const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const getMongoDb = async () => {
  const client = new MongoClient(process.env.MONGO_DB_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  return client.db('dev-complete');
}

module.exports = {
  getMongoDb
}
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://Hadad0526:NeR0X0526@full-stack-task.zbm0s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// const client = new MongoClient("mongodb://127.0.0.1:27017");

export async function getDB() {
  const connection = await client.connect();
  const db = connection.db("full-stack-task");
  return db;
}

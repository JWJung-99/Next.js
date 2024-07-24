// const { MongoClient } = require("mongodb");
// or as an es module:
import { Post, PostComment, User } from "@/types";
import moment from "moment";
import { Collection, Db, MongoClient } from "mongodb";

interface Seq {
  _id: string;
  no: number;
}

interface CommunityDb extends Db {
  post: Collection<Post>;
  user: Collection<User>;
  seq: Collection<Seq>;
}

// Connection URL
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}:${process.env.DB_PORT}`;
// const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = `${process.env.DB_NAME}`;

console.log(`try to connect ... ${process.env.DB_SERVER}`);

// Use connect method to connect to the server
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName) as CommunityDb;
db.post = db.collection("post");
db.user = db.collection("user");
db.seq = db.collection("seq");

const model = {
  post: {
    async list(type: string) {
      const data = await db.post.find({ type }).sort({ _id: -1 }).toArray();

      return data;
    },
    async detail(_id: number) {
      const data = await db.post.findOneAndUpdate(
        { _id },
        { $inc: { views: 1 } },
        { returnDocument: "after" }
      );

      return data;
    },
    async delete(_id: number) {
      const data = await db.post.deleteOne({ _id });

      return data;
    },
    async update(post: Post) {
      const data = await db.post.updateOne({ _id: post._id }, { $set: post });

      return data;
    },
    async add(post: Post) {
      post.createdAt = post.updatedAt = moment().format("YYYY.MM.DD HH:mm:ss");
      post.views = 1;
      const seq = await db.seq.findOneAndUpdate(
        { _id: "post" },
        { $inc: { no: 1 } }
      );
      post._id = seq!.no;
      const data = await db.post.insertOne(post);

      return data;
    },
    async addComment(_id: number, comment: PostComment) {
      comment.createdAt = comment.updatedAt = moment().format(
        "YYYY.MM.DD HH:mm:ss"
      );
      const seq = await db.seq.findOneAndUpdate(
        { _id: "reply" },
        { $inc: { no: 1 } }
      );
      comment._id = seq!.no;
      const data = await db.post.updateOne(
        { _id },
        { $push: { replies: comment } }
      );

      return data;
    },
  },
  user: {},
};

export default model;

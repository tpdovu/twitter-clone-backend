import express from "express";
import db from "mysql";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var pool = db.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

//add single user query
// const displayName = "Tony D";
// const userName = "tpdovu";
// const avatar =
//   "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg";
// const sqlInsert = `INSERT INTO USERS (displayName, userName, avatar) VALUES (?,?,?)`;

// pool.query(sqlInsert, [displayName, userName, avatar], (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`successfully inserted user: ${userName}`);
//   }
// });

//add single post to posts table
const userID = 0;
const text = "hello world!";

const sqlInsertPost = `INSERT INTO posts (text, userID) VALUES (?,?)`;
pool.query(sqlInsertPost, [text, userID], (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("post has been inserted!");
  }
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`example app running on ${port}`);
});

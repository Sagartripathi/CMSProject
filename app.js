const { connectDatabase } = require("./Database/database");

const express = require("express");
const Blog = require("./model/blogModel");
const app = express();

// acception data from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

// GET API ->?

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Success",
  });
});

// create blog api

app.post("/createBlog", async (req, res) => {
  const title = req.body.title;
  const subTitle = req.body.subTitle;
  const description = req.body.description;

  //    Alternative (object destructuring)
  //    const {title,subTitle,description} = req.body

  // Insert to database logic goes here
  await Blog.create({
    title: title,
    subTitle: subTitle,
    description: description,
  });
  // Insert to data base logic goes here
  res.json({
    status: 201,
    message: "Blog Created Successfully",
  });
});

app.listen(3000, () => {
  console.log("node js has started at post 3000");
});

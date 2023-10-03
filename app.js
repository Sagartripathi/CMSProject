const { connectDatabase } = require("./Database/database");
const express = require("express");
const Blog = require("./model/blogModel");
const app = express();
app.set("view engine", "ejs");

// acception data from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

app.use(express.static("public/"));

// GET API ->?

app.get("/", (req, res) => {
  res.render("home");
});

// app.get("/", (req, res) => {
//   res.json({
//     status: 200,
//     message: "Success",
//   });
// });

// get api -> /blogs (all blog)

app.get("/blogs", async (req, res) => {
  // fetching reading all blog from blog model
  const blogs = await Blog.find();
  if (blogs.length == 0) {
    res.json({
      status: 200,
      message: "All blog success full Success",
    });
  } else {
    res.json({
      status: 200,
      message: "All blog success full Success",
      data: blogs,
    });
  }
});
// to get signle blog from data base
app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  //const {id} req.params alternative
  const blog = await Blog.find({ _id: id });
  res.status(200).json({
    message: "All blog success full Success",
    data: blog,
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

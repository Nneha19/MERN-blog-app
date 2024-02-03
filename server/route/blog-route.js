const express = require("express");
const blogRouter = express.Router();

const {
  fetchListOfBlogs,
  deleteABlog,
  updateABlog,
  addNewBlog,
} = require("../controller/blog-controller");

blogRoter.get('/',fetchListOfBlogs);
blogRouter.get('/add',addNewBlog);
blogRouter.get('/update/:id',updateABlog);
blogRouter.get('/delete/:id',deleteABlog);

module.exports=blogRouter;
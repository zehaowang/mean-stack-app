const express = require("express");

const PostControlloer = require("../controllers/post");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.post(
  "",
  checkAuth,
  extractFile,
  PostControlloer.createPost
);

router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostControlloer.updatePost
);

router.get("", PostControlloer.getPosts);

router.get('/:id', PostControlloer.getPost);

router.delete("/:id", checkAuth, PostControlloer.deletePost);

module.exports = router;

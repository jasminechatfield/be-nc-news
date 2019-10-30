const express = require("express");
const { getArticleById } = require("../controllers/articles");

const articlesRouter = express.Router();

articlesRouter.get("/:article_id", getArticleById);

module.exports = articlesRouter;

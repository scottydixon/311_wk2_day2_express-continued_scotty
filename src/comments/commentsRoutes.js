

let express = require("express");

let router = express.Router();

let controller = require("./commentsController");

router.get("/comments", controller.getComments);
router.get("/comments/:id", controller.getComments);
router.post("/comments", controller.addComment);

module.exports = router;
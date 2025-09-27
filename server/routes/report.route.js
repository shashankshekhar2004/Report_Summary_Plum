const express = require("express");
const multer = require("multer");
const { summaryTextController } = require("../controllers/summaryTextController")
const { summaryFileController } = require("../controllers/summaryFileController");

const summaryRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() })


// For text input
summaryRouter.post("/summary/text", summaryTextController);

// For file input (image OCR)
summaryRouter.post("/summary/file", upload.single("file"), summaryFileController);

module.exports = { summaryRouter };

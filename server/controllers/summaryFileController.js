const Tesseract = require("tesseract.js")
const { callGeminiAPI } = require("../utils/callGeminiAPI") 
require("dotenv").config()

const NORMALISING_PROMPT = process.env.NORMALISING_PROMPT
const SUMMARY_PROMPT = process.env.SUMMARY_PROMPT
const RESULT_PROMPT = process.env.RESULT_PROMPT

const summaryFileController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" })
        }

        console.log("Running OCR with tesseract.js...")

        const { data: { text: inputText } } = await Tesseract.recognize(
            req.file.buffer,
            "eng",
            { logger: info => console.log(info) }
        )

        console.log("OCR Extracted Text:\n", inputText)

        const normalizeResult = await callGeminiAPI(NORMALISING_PROMPT + inputText)
        console.log("Normalize Result:"+normalizeResult);

        const summaryResult = await callGeminiAPI(SUMMARY_PROMPT + inputText)
        console.log("Summary:"+summaryResult)
        const summary = await callGeminiAPI(RESULT_PROMPT + normalizeResult + summaryResult)
        console.log("Result:"+summary)

        if (!summary) {
            return res.status(500).json({
                summary: "No summary generated, but API call was successful.",
            })
        }
        let cleanText = summary.replace(/```json|```/g, "").trim();

		let parsedSummary;
		parsedSummary = JSON.parse(cleanText);

		return res.json({ tests: parsedSummary })
    } catch (error) {
        console.error("Error in file summary:", error)
        res.status(500).json({ error: error.message || "Internal server error" })
    }
}

module.exports = { summaryFileController }

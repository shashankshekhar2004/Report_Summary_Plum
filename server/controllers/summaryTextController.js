const { callGeminiAPI } = require("../utils/callGeminiAPI")
require("dotenv").config()

const NORMALISING_PROMPT = process.env.NORMALISING_PROMPT
const SUMMARY_PROMPT = process.env.SUMMARY_PROMPT
const RESULT_PROMPT = process.env.RESULT_PROMPT

const summaryTextController = async (req, res) => {
	try {
		const inputText = req.body.inputText;
		if (!inputText) {
			return res.status(400).json({ error: "No text input provided" });
		}

		const normalizeResult = await callGeminiAPI(NORMALISING_PROMPT + inputText)
		console.log("Normalize Result:" + normalizeResult);

		const summaryResult = await callGeminiAPI(SUMMARY_PROMPT + inputText)
		console.log("Summmary:" + summaryResult)
		const summary = await callGeminiAPI(RESULT_PROMPT + normalizeResult + summaryResult)
		console.log("Result:" + summary)

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
			console.error("Error in text summary:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	};

	module.exports = { summaryTextController };

"# Report_Summary_Plum"

1. Clone the repo
   git clone https://github.com/shashankshekhar2004/Report_Summary_Plum.git

   cd server

2. Install dependencies

   npm install

3. Set up environment variables

   GEMINI_API_KEY=your_gemini_api_key

   GEMINI_API=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent

   //Prompt Used

   NORMALISING_PROMPT=" Standardize names, units of test, ranges ,and normal range from the internet if not given, and status for each test in this prompt and don't give unnecessary results other then mentioned and don't predict anything in very small pretty json format"

   SUMMARY_PROMPT= "generate a small human understandable summary for each test in very small pretty json format don't predict anything if not given in the input don't suggest also"

   RESULT_PROMPT="combine the lower paragraph such that a small summary and test results(name of each test , unit ,normal range) both are there nothing is missed and don't predict anything in very small pretty json format also dont use abbreviation in summary,
   one more thing if it is not related to medical tests or reports give output as it is not related to medical reports "

4. Run the server

   npm run server

Example Response:
{ "summary": "CBC results show a low hemoglobin level and a high white blood cell count.", "test_results": [ { "test": "Hemoglobin", "result": "10.2", "unit": "g/dL", "normal_range": "13.5-17.5 g/dL (Male), 12.0-15.5 g/dL (Female)" }, { "test": "White Blood Cell Count (WBC)", "result": "11,200", "unit": "/uL", "normal_range": "4,500-11,000 /uL" } ] }

🛠 Tech Stack
Node.js + Express (Backend)

Tesseract.js (OCR)

Google Gemini API (Summarization)

Multer (File uploads)

dotenv (Environment variables)

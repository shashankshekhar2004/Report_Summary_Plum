"# Report_Summary_Plum"

1. Clone the repo
   git clone https://github.com/shashankshekhar2004/Report_Summary_Plum.git

   cd server

2. Install dependencies

   npm install

3. Set up environment variables

   GEMINI_API_KEY=your_gemini_api_key

   GEMINI_API=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent

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

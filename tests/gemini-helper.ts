import axios  from "axios";


const GEMINI_API_KEY = '';

export async function generatePlaywrightSteps(task: string): Promise<string> {
  const response = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=' + GEMINI_API_KEY,
    {
      contents: [{ parts: [{ text: `Convert this test case to Playwright TypeScript code:\n\n${task} and no explaination required`  }] }]
    }
  );
  
  return response.data.candidates[0].content.parts[0].text;

}

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateDiagnosis = async (
  userInput: string,
  history: { role: 'user' | 'model', content: string }[],
  imageData?: string
): Promise<string> => {
  const ai = getAIClient();
  
  // Transform history into the expected format for generateContent
  const contents = history.map(h => ({
    role: h.role === 'model' ? 'model' : 'user',
    parts: [{ text: h.content }]
  }));

  const currentParts: any[] = [];
  
  if (imageData) {
    // If image is present, add it first
    currentParts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: imageData.split(',')[1] // Standard base64 extraction
      }
    });
    // Add specific instruction for image analysis to the prompt
    currentParts.push({ 
      text: `[VISUAL DIAGNOSIS REQUIRED] The user has attached an image of the malfunction. 
      1. Analyze the image for specific defects (cracks, burns, error codes, part numbers). 
      2. Combine visual findings with the user's description: "${userInput}".` 
    });
  } else {
    currentParts.push({ text: userInput });
  }

  contents.push({ role: 'user', parts: currentParts });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1000, 
      },
    });

    return response.text || "I apologize, I couldn't process that. Please try rephrasing.";
  } catch (error: any) {
    console.error("FixPro AI Service Error:", error);
    // Check for rate limit or quota exhaustion errors
    const errorMessage = error.message || "";
    if (errorMessage.includes('RESOURCE_EXHAUSTED') || errorMessage.includes('429') || error.status === 429) {
      throw new Error('QUOTA_EXCEEDED');
    }
    throw error;
  }
};

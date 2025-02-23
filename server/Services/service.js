
import { GoogleGenerativeAI } from "@google/generative-ai";


// const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = "Explain how AI works";



const responseGen = async(prompt)=>{
    const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text();
}

export default responseGen;
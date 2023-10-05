// This code is for v4 of the openai package: npmjs.com/package/openai
import * as dotenv from 'dotenv'
import OpenAI from "openai"

dotenv.config({path:__dirname + '/.env'})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [],
  temperature: 0.8,
  max_tokens: 256,
});
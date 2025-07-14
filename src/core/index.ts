
import yaml from "js-yaml";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

export async function runRAG(mcpRaw: string, prompt: string): Promise<string> {
  const mcp = yaml.load(mcpRaw) as any;
  // Minimal fetch: take first API endpoint and fetch dummy
  const endpoint = mcp.context.sources[0].endpoints[0];
  const response = await axios.get("https://jsonplaceholder.typicode.com" + endpoint);
  const dataText = JSON.stringify(response.data);
  const fullPrompt = `${mcp.context.injection.template.replace("{{context}}", dataText)}\n\nUser: ${prompt}`;
  const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const client = new OpenAIApi(config);
  const completion = await client.createCompletion({
    model: "text-davinci-003",
    prompt: fullPrompt,
    max_tokens: 150
  });
  return completion.data.choices[0].text.trim();
}

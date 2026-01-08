import { agentMock } from "../mocks/agentMock";

export async function runAnalysis(prompt: string) {
  const USE_MOCK = true;

  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 1200));
    return agentMock;
  }

  
}

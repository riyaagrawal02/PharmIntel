export async function runAgent(prompt: string) {
  const res = await fetch("http://localhost:8000/api/chat/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      id: "pharmintel_frontend",
    }),
  });

  const data = await res.json();

  if (!res.ok || data.status !== "success") {
    throw new Error(data.error || "Agent execution failed");
  }

  return data;
}

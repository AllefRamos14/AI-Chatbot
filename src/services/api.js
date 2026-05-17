const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessageToAPI(payload, onChunk) {
  const messages = Array.isArray(payload) ? payload : payload.messages || [];
  const image = Array.isArray(payload) ? null : payload.image || null;

  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      messages: messages.map(({ role, content }) => ({
        role,
        content,
      })),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro da API:", errorText);

    throw new Error(errorText || "Não foi possível gerar uma resposta.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");

  let fullReply = "";

  while (true) {
    const { value, done } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value, {
      stream: true,
    });

    fullReply += chunk;
    onChunk?.(chunk);
  }

  return {
    reply: fullReply || "Não consegui gerar uma resposta.",
    tokens: 0,
  };
}
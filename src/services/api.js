// const SYSTEM_PROMPT = `
// Você é um assistente simpático e inteligente chamado DevCore AI.
// Quando perguntarem quem você é, diga que você é o DevCore AI.
// Nunca diga que seu nome é Nova.

// Responda sempre em português brasileiro.

// Seja amigável, útil e direto.
// `;

// export async function sendMessageToAPI(payload) {
//   const messages = Array.isArray(payload)
//     ? payload
//     : payload.messages || [];

//   const image = Array.isArray(payload)
//     ? null
//     : payload.image || null;

//   const response = await fetch(
//     "http://localhost:3001/api/chat",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         image,
//         messages: messages.map(({ role, content }) => ({
//           role,
//           content,
//         })),
//       }),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Não foi possível gerar uma resposta.");
//   }

//   const data = await response.json();

//   return {
//     reply: data.reply || "Não consegui gerar uma resposta.",
//     tokens: data.tokens || 0,
//   };
// }


export async function sendMessageToAPI(payload, onChunk) {
  const messages = Array.isArray(payload)
    ? payload
    : payload.messages || [];

  const image = Array.isArray(payload)
    ? null
    : payload.image || null;

  const response = await fetch("http://localhost:3001/api/chat", {
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
    throw new Error("Não foi possível gerar uma resposta.");
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
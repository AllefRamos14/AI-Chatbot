import { useEffect, useMemo, useState } from "react";

import { sendMessageToAPI } from "../services/api";
import { getTime } from "../utils/getTime";

const STORAGE_KEY = "@dany-ia:chats";
const MAX_MESSAGES_TO_API = 8;

function createChat() {
  return {
    id: crypto.randomUUID(),
    title: "Nova conversa",
    messages: [],
    totalTokens: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function getInitialChats() {
  try {
    const savedChats = localStorage.getItem(STORAGE_KEY);

    if (savedChats) {
      const parsedChats = JSON.parse(savedChats);

      if (Array.isArray(parsedChats) && parsedChats.length > 0) {
        return parsedChats;
      }
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }

  return [createChat()];
}

function getChatTitle(message) {
  if (!message) return "Nova conversa";

  return message.length > 32
    ? `${message.slice(0, 32)}...`
    : message;
}

const initialChats = getInitialChats();

export function useChat() {
  const [chats, setChats] = useState(initialChats);

  const [activeChatId, setActiveChatId] = useState(() => {
    return initialChats[0].id;
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);

  const activeChat = useMemo(() => {
    return (
      chats.find((chat) => chat.id === activeChatId) ||
      chats[0]
    );
  }, [chats, activeChatId]);

  const messages = activeChat?.messages || [];
  const totalTokens = activeChat?.totalTokens || 0;

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(chats)
    );
  }, [chats]);

  function updateActiveChat(callback) {
    setChats((previousChats) =>
      previousChats.map((chat) => {
        if (chat.id !== activeChat.id) return chat;

        return callback(chat);
      })
    );
  }

  function createNewChat() {
    const newChat = createChat();

    setChats((previousChats) => [
      newChat,
      ...previousChats,
    ]);

    setActiveChatId(newChat.id);
    setInput("");
    setError("");
  }

  function selectChat(chatId) {
    setActiveChatId(chatId);
    setInput("");
    setError("");
  }

  function deleteChat(chatId) {
    setChats((previousChats) => {
      const filteredChats = previousChats.filter(
        (chat) => chat.id !== chatId
      );

      if (filteredChats.length === 0) {
        const newChat = createChat();
        setActiveChatId(newChat.id);
        return [newChat];
      }

      if (chatId === activeChatId) {
        setActiveChatId(filteredChats[0].id);
      }

      return filteredChats;
    });
  }

  function convertImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

  async function sendMessage(data = {}) {
  const text = data.text || input;
  const image = data.image || null;

  const trimmedMessage = text.trim();

  if ((!trimmedMessage && !image) || loading) return;


  let imageBase64 = null;

  if (image) {
    imageBase64 = await convertImageToBase64(image);
  }

  const userMessage = {
    id: crypto.randomUUID(),

    role: "user",
    content: trimmedMessage,
    image: imageBase64,
    time: getTime(),
  };
  const baseMessages = data.overrideMessages || messages;

  const updatedMessages = [
    ...baseMessages,
    userMessage,
  ];

  updateActiveChat((chat) => ({
    ...chat,
    title:
      chat.messages.length === 0
        ? getChatTitle(
            trimmedMessage || "Imagem"
          )
        : chat.title,

    messages: updatedMessages,

    updatedAt: new Date().toISOString(),
  }));

  setInput("");
  setError("");
  setLoading(true);

//   try {
//     const messagesToAPI =
//       updatedMessages.slice(
//         -MAX_MESSAGES_TO_API
//       );

//     // const payload = {
//     //   messages: messagesToAPI,
//     //   image,
//     // };

//     const data =
//       await sendMessageToAPI({
//       messages: messagesToAPI,
//       image: imageBase64,
//   });

//     const assistantMessage = {
//       role: "assistant",
//       content: data.reply || "Sem resposta",
//       time: getTime(),
//       // tokens: data.tokens || 0,
//     };

//     updateActiveChat((chat) => ({
//       ...chat,

//       messages: [
//         ...updatedMessages,
//         assistantMessage,
//       ],

//       totalTokens:
//         chat.totalTokens +
//         Number(data?.tokens || 0),

//       updatedAt:
//         new Date().toISOString(),
//     }));
//   } catch (error) {
//     setError(
//       error.message.includes("fetch")
//         ? "Erro de conexão. Verifique sua internet."
//         : error.message
//     );
//   } finally {
//     setLoading(false);
//   }
// }

try {
  const messagesToAPI =
    updatedMessages.slice(
      -MAX_MESSAGES_TO_API
    );

  const assistantId = crypto.randomUUID();

  const assistantMessage = {
    id: assistantId,
    role: "assistant",
    content: "",
    time: getTime(),
    tokens: 0,
  };

  updateActiveChat((chat) => ({
    ...chat,
    messages: [
      ...updatedMessages,
      assistantMessage,
    ],
    updatedAt: new Date().toISOString(),
  }));

  const data = await sendMessageToAPI(
    {
      messages: messagesToAPI,
      image: imageBase64,
    },
    (chunk) => {
      updateActiveChat((chat) => ({
        ...chat,
        messages: chat.messages.map((message) =>
          message.id === assistantId
            ? {
                ...message,
                content: message.content + chunk,
              }
            : message
        ),
        updatedAt: new Date().toISOString(),
      }));
    }
  );

  updateActiveChat((chat) => ({
    ...chat,
    totalTokens:
      chat.totalTokens +
      Number(data?.tokens || 0),
    updatedAt: new Date().toISOString(),
  }));
} catch (error) {
  setError(
    error.message.includes("fetch")
      ? "Erro de conexão. Verifique sua internet."
      : error.message
  );
} finally {
  setLoading(false);
}
  }

  function startEditMessage(message) {
  setInput(message.content);

  setEditingMessageId(
    message.id
  );
}

function cancelEditMessage() {
  setInput("");

  setEditingMessageId(
    null
  );
}

function CurrentChat() {
  if (!activeChat || activeChat.messages.length === 0) return;

  const content = activeChat.messages
    .map((message) => {
      const author =
        message.role === "user"
          ? "Você"
          : "DevCore AI";

      return `[${message.time}] ${author}:\n${message.content || "[Imagem enviada]"}\n`;
    })
    .join("\n----------------------\n\n");

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${activeChat.title || "conversa-devcore-ai"}.txt`;
  link.click();

  URL.revokeObjectURL(url);
}

function updateMessageContent(messageId, newContent) {
  updateActiveChat((chat) => {
    const updatedMessages = chat.messages.map((message) =>
      message.id === messageId
        ? {
            ...message,
            content: newContent,
          }
        : message
    );

    const firstUserMessage = updatedMessages.find(
      (message) => message.role === "user"
    );

    return {
      ...chat,
      title: firstUserMessage
        ? getChatTitle(firstUserMessage.content)
        : chat.title,
      messages: updatedMessages,
      updatedAt: new Date().toISOString(),
    };
  });
}


async function regenerateFromEditedMessage(messageId, newContent) {
  const messageIndex = messages.findIndex(
    (message) => message.id === messageId
  );

  if (messageIndex === -1) return;

  const messagesBeforeEdit = messages.slice(0, messageIndex);

  const editedUserMessage = {
    ...messages[messageIndex],
    content: newContent,
    time: getTime(),
  };

  const updatedMessages = [
    ...messagesBeforeEdit,
    editedUserMessage,
  ];

  updateActiveChat((chat) => ({
    ...chat,
    title:
    messageIndex === 0
      ? getChatTitle(newContent)
      : chat.title,
  messages: updatedMessages,
  updatedAt: new Date().toISOString(),
  }));

  await sendMessage({
    text: newContent,
    image: null,
    overrideMessages: messagesBeforeEdit,
  });
}
  return {
    messages,
    input,
    setInput,
    loading,
    error,
    totalTokens,
    sendMessage,
    regenerateFromEditedMessage,
    editingMessageId,
    startEditMessage,
    cancelEditMessage,
   
    

    chats,
    activeChatId,
    createNewChat,
    selectChat,
    deleteChat,
    CurrentChat,
    updateMessageContent,
  };
}

// import { useState } from "react";

// import { ChatInput } from "./components/ChatInput/ChatInput";
// import { ChatWindow } from "./components/ChatWindow/ChatWindow";
// import { Header } from "./components/Header/Header";
// import { Sidebar } from "./components/Sidebar/Sidebar";
// import { useChat } from "./hooks/useChat";

// import {
//   AppContainer,
//   ChatContainer,
//   ErrorMessage,
//   Layout,
// } from "./components/styles";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const {
//     messages,
//     input,
//     setInput,
//     loading,
//     error,
//     totalTokens,
//     sendMessage,
//     chats,
//     activeChatId,
//     createNewChat,
//     selectChat,
//     deleteChat,
//     CurrentChat
//   } = useChat();

//   return (
//     <AppContainer>
//       <Layout>
//         <Sidebar
//           chats={chats}
//           activeChatId={activeChatId}
//           createNewChat={createNewChat}
//           selectChat={selectChat}
//           deleteChat={deleteChat}
//           isOpen={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//         />

//         <ChatContainer>
//           <Header
//             totalTokens={totalTokens}
//             onMenuClick={() => setSidebarOpen((prev) => !prev)}
//             CurrentChat={CurrentChat}
//             hasMessages={messages.length > 0}
//           />

//           <ChatWindow
//             messages={messages}
//             loading={loading}
//             sendMessage={sendMessage}
//           />

//           {error && <ErrorMessage>⚠ {error}</ErrorMessage>}

//           <ChatInput
//             input={input}
//             setInput={setInput}
//             loading={loading}
//             sendMessage={sendMessage}
//           />
//         </ChatContainer>
//       </Layout>
//     </AppContainer>
//   );
// }

import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { ChatInput } from "./components/ChatInput/ChatInput";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useChat } from "./hooks/useChat";

import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

import {
  AppContainer,
  ChatContainer,
  ErrorMessage,
  Layout,
} from "./components/styles";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themeMode, setThemeMode] = useState("dark");

  const currentTheme = themeMode === "dark" ? darkTheme : lightTheme;

  function toggleTheme() {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const {
    messages,
    input,
    setInput,
    loading,
    error,
    totalTokens,
    sendMessage,
    chats,
    activeChatId,
    createNewChat,
    selectChat,
    deleteChat,
    CurrentChat,
    updateMessageContent,
    regenerateFromEditedMessage
  } = useChat();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

      <AppContainer>
        <Layout>
          <Sidebar
            chats={chats}
            activeChatId={activeChatId}
            createNewChat={createNewChat}
            selectChat={selectChat}
            deleteChat={deleteChat}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <ChatContainer>
            <Header
              totalTokens={totalTokens}
              onMenuClick={() => setSidebarOpen((prev) => !prev)}
              CurrentChat={CurrentChat}
              hasMessages={messages.length > 0}
              themeMode={themeMode}
              toggleTheme={toggleTheme}
            />

            <ChatWindow
              messages={messages}
              loading={loading}
              sendMessage={sendMessage}
              updateMessageContent={updateMessageContent}
              regenerateFromEditedMessage={regenerateFromEditedMessage}
            />

            {error && <ErrorMessage>⚠ {error}</ErrorMessage>}

            <ChatInput
              input={input}
              setInput={setInput}
              loading={loading}
              sendMessage={sendMessage}
            />
          </ChatContainer>
        </Layout>
      </AppContainer>
    </ThemeProvider>
  );
}
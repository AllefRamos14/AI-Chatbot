import { useState } from "react";

import { ChatInput } from "../../components/ChatInput/ChatInput";
import { ChatWindow } from "../../components/ChatWindow/ChatWindow";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useChat } from "../../hooks/useChat";

import {
  AppContainer,
  ChatContainer,
  ErrorMessage,
  Layout,
} from "../../components/styles";

export function Home({ themeMode, toggleTheme,onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    regenerateFromEditedMessage,
  } = useChat();

  return (
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
            onLogout={onLogout}
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
  );
}
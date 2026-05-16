import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import {
  ChatItem,
  ChatList,
  DeleteButton,
  EmptyText,
  NewChatButton,
  SearchContainer,
  SearchInput,
  SidebarContainer,
  SidebarFooter,
  SidebarHeader,
  SidebarOverlay,
  SidebarTitle
} from "./styles";

export function Sidebar({
  chats,
  activeChatId,
  createNewChat,
  selectChat,
  deleteChat,
  isOpen,
  onClose,
}) {
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const [search, setSearch] = useState("");

  const filteredChats = useMemo(() => {
  return chats.filter((chat) =>
    chat.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );
}, [chats, search]);

  function handleDeleteClick(e, chatId) {
    e.stopPropagation();
    if (pendingDeleteId === chatId) {
      deleteChat(chatId);
      setPendingDeleteId(null);
    } else {
      setPendingDeleteId(chatId);
    }
  }

  function handleSelectChat(chatId) {
    selectChat(chatId);
    setPendingDeleteId(null);
    onClose?.();
  }

  return (
    <>
      <SidebarOverlay $open={isOpen} onClick={onClose} aria-hidden="true" />

      <SidebarContainer $open={isOpen}>
        <SidebarHeader>
          <SidebarTitle>Conversas</SidebarTitle>
          <NewChatButton type="button" onClick={createNewChat}>
            + Nova conversa
          </NewChatButton>
        </SidebarHeader>

        <SearchContainer>
  <Search size={16} />

  <SearchInput
    type="text"
    placeholder="Buscar conversa..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
  />
</SearchContainer>

        <ChatList role="list">
          {chats.length === 0 && (
            <EmptyText>Nenhuma conversa salva.</EmptyText>
          )}

          {filteredChats.map((chat) => {
            const label = chat.title || "Sem título";
            const isPending = pendingDeleteId === chat.id;

            return (
              <ChatItem
                key={chat.id}
                role="listitem"
                $active={chat.id === activeChatId}
                aria-label={label}
                aria-current={chat.id === activeChatId ? "true" : undefined}
                onClick={() => handleSelectChat(chat.id)}
              >
                <span>{label}</span>

                <DeleteButton
                  type="button"
                  $pending={isPending}
                  aria-label={
                    isPending
                      ? "Confirmar exclusão"
                      : `Excluir "${label}"`
                  }
                  onClick={(e) => handleDeleteClick(e, chat.id)}
                >
                  <X size={14} strokeWidth={2.5} />
                </DeleteButton>
              </ChatItem>
            );
          })}
        </ChatList>

        <SidebarFooter>Histórico salvo automaticamente</SidebarFooter>
      </SidebarContainer>
    </>
  );
}
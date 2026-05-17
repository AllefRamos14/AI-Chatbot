import { useEffect, useRef } from "react";

import { MessageBubble } from "../MessageBubble/MessageBubble";
import { TypingDots } from "../TypingDots/TypingDots";

import {
  Badge,
  EmptyDescription,
  EmptyIcon,
  EmptyState,
  EmptyTitle,
  MessagesContainer,
  SuggestionButton,
  Suggestions,
} from "./styles";

const suggestions = [
  "O que você pode fazer?",
  "Explique o que é React",
  "Dica para iniciantes em programação",
  "Como aprender JavaScript?",
];

export function ChatWindow({ messages, loading, sendMessage,updateMessageContent,regenerateFromEditedMessage }) {
  const messagesEndRef = useRef(null);
  const isEmpty = messages.length === 0 && !loading;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  return (
    <MessagesContainer>
      {isEmpty ? (
        <EmptyState>
          <Badge>🏆 IA para Desenvolvedores</Badge>

          <EmptyIcon>✦</EmptyIcon>

          <EmptyTitle>
           Olá! Eu sou o DevCore AI <span aria-hidden="true">👋</span>
          </EmptyTitle>

          <EmptyDescription>
            Seu assistente inteligente para programação, React, JavaScript,
            APIs e desenvolvimento web moderno.
          </EmptyDescription>

          <Suggestions>
            {suggestions.map((suggestion) => (
              <SuggestionButton
                key={suggestion}
                type="button"
                onClick={() => sendMessage({
                text: suggestion,
                image: null,
                   })}
              >
                {suggestion}
              </SuggestionButton>
            ))}
          </Suggestions>
        </EmptyState>
      ) : (
        <>
          {messages.map((message) => (
            <MessageBubble
            
              key={message.id}

              message={message}
              updateMessageContent={updateMessageContent}
               regenerateFromEditedMessage={regenerateFromEditedMessage}
              
            />
          ))}

          {loading && <TypingDots />}
        </>
      )}

      <div ref={messagesEndRef} />
    </MessagesContainer >
  );
}
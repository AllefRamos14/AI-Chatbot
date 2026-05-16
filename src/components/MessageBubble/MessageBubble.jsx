import { Check, Copy, Pencil, X } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import "highlight.js/styles/github-dark.css";

import {
  Avatar,
  Bubble,
  BubbleTime,
  CodeBlock,
  CopyButton,
  EditActionButton,
  EditActions,
  EditArea,
  EditTextarea,
  InlineCode,
  MarkdownHeading,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
  MessageContainer,
  MessageImage
} from "./styles";

const markdownComponents = {
  p({ children }) {
    return <MarkdownParagraph>{children}</MarkdownParagraph>;
  },

  h1({ children }) {
    return <MarkdownHeading as="h1">{children}</MarkdownHeading>;
  },

  h2({ children }) {
    return <MarkdownHeading as="h2">{children}</MarkdownHeading>;
  },

  h3({ children }) {
    return <MarkdownHeading as="h3">{children}</MarkdownHeading>;
  },

  ul({ children }) {
    return <MarkdownList>{children}</MarkdownList>;
  },

  ol({ children }) {
    return <MarkdownList as="ol">{children}</MarkdownList>;
  },

  li({ children }) {
    return <MarkdownListItem>{children}</MarkdownListItem>;
  },

  code({ inline, children, className, ...props }) {
    if (inline) {
      return <InlineCode {...props}>{children}</InlineCode>;
    }

    return (
      <CodeBlock>
        <code className={className} {...props}>
          {children}
        </code>
      </CodeBlock>
    );
  },

  strong({ children }) {
    return <strong style={{ fontWeight: 600 }}>{children}</strong>;
  },

  a({ href, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "underline", opacity: 0.8 }}
      >
        {children}
      </a>
    );
  },
};


function MessageContent({ content, isUser }) {
  if (isUser) return content;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={markdownComponents}
    >
      {content}
    </ReactMarkdown>
  );
}

export function MessageBubble({ message, regenerateFromEditedMessage }) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(message.content);

  async function handleSaveEdit() {
  if (!editedContent.trim()) return;

  if (editedContent.trim() === message.content) {
    setIsEditing(false);
    return;
  }

  await regenerateFromEditedMessage(
    message.id,
    editedContent.trim()
  );

  setIsEditing(false);
}

  function handleCancelEdit() {
    setEditedContent(message.content);
    setIsEditing(false);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(message.content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <MessageContainer $isUser={isUser}>
      <Avatar $isUser={isUser}>
        {isUser ? "👤" : "✦"}
      </Avatar>

      <div>
        <Bubble $isUser={isUser}>

          {message.image && (
            <MessageImage
              src={message.image}
              alt="Imagem enviada"
            />
          )}

          {/* <MessageContent
            content={message.content}
            isUser={isUser}
          /> */}

          {isEditing ? (
  <EditArea>
    <EditTextarea
      value={editedContent}
      onChange={(event) => setEditedContent(event.target.value)}
      autoFocus
    />

    <EditActions>
      <EditActionButton type="button" onClick={handleSaveEdit}>
        <Check size={14} />
      </EditActionButton>

      <EditActionButton type="button" onClick={handleCancelEdit}>
        <X size={14} />
      </EditActionButton>
    </EditActions>
  </EditArea>
) : (
  <MessageContent content={message.content} isUser={isUser} />
)}

          {isUser && message.content && (
  <CopyButton
    type="button"
    onClick={() => setIsEditing(true)}
    aria-label="Editar mensagem"
    title="Editar mensagem"
  >
    <Pencil size={14} />
  </CopyButton>
)}

          {!isUser && message.content && (

            <CopyButton
              type="button"
              onClick={handleCopy}
              aria-label="Copiar resposta"
              title="Copiar resposta"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </CopyButton>
          )}

        </Bubble>

        <BubbleTime $isUser={isUser}>
          {message.time}
        </BubbleTime>
      </div>
    </MessageContainer>

    
  );
}

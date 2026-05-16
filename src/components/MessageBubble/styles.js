import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: ${({ $isUser }) => ($isUser ? "row-reverse" : "row")};
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isUser }) =>
    $isUser ? "rgba(255,255,255,0.08)" : "rgba(124,77,255,0.15)"};
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Bubble = styled.div`
  max-width: 520px;
  padding: 0.85rem 1.1rem;
  border-radius: 18px;
  line-height: 1.7;
  font-size: 0.95rem;
  background: ${({ $isUser }) =>
    $isUser
      ? "linear-gradient(135deg, rgba(124,77,255,0.2), rgba(0,200,180,0.12))"
      : "rgba(255,255,255,0.05)"};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top-right-radius: ${({ $isUser }) => ($isUser ? "4px" : "18px")};
  border-top-left-radius: ${({ $isUser }) => (!$isUser ? "4px" : "18px")};
  white-space: ${({ $isUser }) => ($isUser ? "pre-wrap" : "normal")};
  overflow-wrap: anywhere;
`;

export const MarkdownParagraph = styled.p`
  margin: 0 0 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MarkdownHeading = styled.h3`
  margin: 0.9rem 0 0.35rem;
  font-size: 0.95rem;
  line-height: 1.35;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textStrong};

  &:first-child {
    margin-top: 0;
  }
`;

export const MarkdownList = styled.ul`
  margin: 0.25rem 0 0.5rem;
  padding-left: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MarkdownListItem = styled.li`
  margin-bottom: 0.25rem;
  font-size: 0.95rem;

  &::marker {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InlineCode = styled.code`
  padding: 0.15rem 0.35rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts?.mono};
  font-size: 0.85em;
`;

export const CodeBlock = styled.pre`
  margin: 0.6rem 0;
  padding: 1rem;
  max-width: 100%;
  overflow-x: auto;
  border-radius: 14px;
  background: #0d1117;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.85rem;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }

  code {
    font-family: ${({ theme }) => theme.fonts?.mono};
  }
`;

export const BubbleTime = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: ${({ $isUser }) => ($isUser ? "right" : "left")};
`;
export const MessageImage = styled.img`
  width: 100%;
  max-width: 260px;
  border-radius: 16px;
  margin-bottom: .75rem;
  object-fit: cover;
  display: block;
  box-shadow: 0 8px 20px rgba(0,0,0,.15);
`;

export const CopyButton = styled.button`
  margin-top: 0.75rem;

  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.mutedText};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const EditArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  min-width: 220px;
  min-height: 80px;

  resize: vertical;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;

  padding: 0.75rem;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  outline: none;

  font: inherit;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const EditActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const EditActionButton = styled.button`
  width: 32px;
  height: 32px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;

  display: grid;
  place-items: center;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;
`;
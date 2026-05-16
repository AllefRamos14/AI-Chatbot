import styled from "styled-components";

export const MarkdownWrapper = styled.div`
  width: 100%;

  p {
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }

  h1,
  h2,
  h3 {
    margin: 1rem 0 0.6rem;
    line-height: 1.3;
  }

  ul,
  ol {
    padding-left: 1.2rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InlineCode = styled.code`
  padding: 0.15rem 0.4rem;

  border-radius: 6px;

  background: rgba(255,255,255,0.08);

  color: ${({ theme }) => theme.colors.primary};

  font-size: 0.85em;
`;

export const CodeBlock = styled.pre`
  position: relative;
  overflow-x: auto;

  margin: 1rem 0;
  padding: 1rem;

  border-radius: 14px;

  background: #0d1117;

  border: 1px solid rgba(255,255,255,0.08);

  font-size: 0.9rem;
  line-height: 1.6;

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;

export const CopyCodeButton = styled.button`
    position: absolute;

    top: 12px;
    right: 12px;

    border: 0;

    width: 32px;
    height: 32px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(
      255,
      255,
      255,
      0.08
    );

    color: white;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: rgba(
        255,
        255,
        255,
        0.15
      );
    }
`;
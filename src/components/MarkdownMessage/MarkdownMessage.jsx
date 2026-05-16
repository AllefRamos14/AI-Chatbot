import { Check, Copy } from "lucide-react";
import { useState } from "react";

import "highlight.js/styles/github-dark.css";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import {
  CodeBlock,
  CopyCodeButton,
  InlineCode,
  MarkdownWrapper,
} from "./styles";

function CustomCodeBlock({
  className,
  children,
  ...props
}) {
  const [copied, setCopied] = useState(false);

  const code = String(children).replace(
    /\n$/,
    ""
  );

  async function handleCopy() {
    await navigator.clipboard.writeText(
      code
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <CodeBlock>
      <CopyCodeButton
        type="button"
        onClick={handleCopy}
        aria-label="Copiar código"
      >
        {copied ? (
          <Check size={14} />
        ) : (
          <Copy size={14} />
        )}
      </CopyCodeButton>

      <code
        className={className}
        {...props}
      >
        {children}
      </code>
    </CodeBlock>
  );
}

export function MarkdownMessag({
  content,
}) {
  return (
    <MarkdownWrapper>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeHighlight,
        ]}
        components={{
          code({
            inline,
            className,
            children,
            ...props
          }) {
            if (inline) {
              return (
                <InlineCode {...props}>
                  {children}
                </InlineCode>
              );
            }

            return (
              <CustomCodeBlock
                className={className}
                {...props}
              >
                {children}
              </CustomCodeBlock>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
}
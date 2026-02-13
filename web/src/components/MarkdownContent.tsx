"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...props }) => {
            if (!href) return <span {...props}>{children}</span>;

            if (href.endsWith(".md")) {
              const target = href
                .replace("./phases/", "")
                .replace("./", "")
                .replace(".md", "");

              if (href === "../README.md") {
                return <Link href="/">{children}</Link>;
              }

              return <Link href={`/phases/${target}`}>{children}</Link>;
            }

            if (href.startsWith("http")) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              );
            }

            return (
              <a href={href} {...props}>
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

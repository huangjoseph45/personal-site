import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../md.css";

const MarkdownViewer: React.FC<{ children: string }> = ({ children }) => {
  // MarkdownViewer.tsx
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;

import React, { useState, useEffect, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import ReactMarkdownProps from 'react-markdown'
import style from "@/styles/markdown.module.css";

export default function Markdown({ fileName }: { fileName: string }) {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(`/markdown/${fileName}`)
      .then((response: Response) => response.text())
      .then((data: string) => setMarkdown(data))
      .catch((error: Error) => console.error(error));
  }, [fileName]);

  const renderers = {
    image: ({ src, alt }: { src: string; alt: string }) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={src} alt={alt} className={style.image} />
      </div>
    ),
  };

  return (
    <div>
      <ReactMarkdown renderers={renderers} children={markdown} />
    </div>
  );
}

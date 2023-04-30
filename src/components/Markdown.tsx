import React, { useState, useEffect, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "@/styles/markdown.module.css";

export default function Markdown({ fileName }: { fileName: string }) {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(`/markdown/${fileName}`)
      .then((response: Response) => response.text())
      .then((data: string) => setMarkdown(data))
      .catch((error: Error) => console.error(error));
  }, [fileName]);

  return (
    <div className={style.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown}/>
    </div>
  );
}

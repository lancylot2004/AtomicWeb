import React, { useState, useEffect, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getConfig } from '@/helpers/config';
import style from "@/styles/markdown.module.css";
import { fetchFile } from "@/helpers/fetchFile";

export default function Markdown({ fileName }: { fileName: string }) {
  const config = getConfig();
  const [markdown, setMarkdown] = useState<string>(`{config.wb.defaultLoc[0]}-{config.wb.defaultLoc[1]}.md`);

  useEffect(() => {
    fetchFile({ fileName, config })
      .then((data: string) => setMarkdown(data))
      .catch((error: Error) => console.error(error));
  }, [fileName, config]);

  return (
    <div className={style.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown}/>
    </div>
  );
}

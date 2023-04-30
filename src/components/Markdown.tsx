import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import gfm from "remark-gfm";
import math from "remark-math";
import katex from "rehype-katex";
import mathjax from "rehype-mathjax";

interface Props {
  fileName: string
}

export default function Markdown({ fileName }: Props) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/markdown/${fileName}`)
      .then((response: Response) => response.text())
      .then((data: string) => setMarkdown(data))
      .catch((error: Error) => console.error(error));
  }, [fileName]);

  const renderers: ReactMarkdownProps["renderers"] = {
    image: ({ src, alt }) => <img src={src} alt={alt} />,
    video: ({ src, controls }) => (
      <video src={src} controls={controls} style={{ maxWidth: "100%" }} />
    ),
    code: ({ language, value }) => (
      <p>a</p>
    )
  };

  return (
    <div>
      <ReactMarkdown
        plugins={[gfm, math]}
        renderers={renderers}
        children={markdown}
        rehypePlugins={[mathjax, katex]}
      />
    </div>
  );
}

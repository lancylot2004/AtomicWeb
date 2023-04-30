import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <ReactMarkdown
        children={markdown}
      />
    </div>
  );
}

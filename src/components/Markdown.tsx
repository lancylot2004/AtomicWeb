import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

interface Props {
  filePath: string;
}

export default function Markdown({ filePath }: Props) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(data => setMarkdown(data))
      .catch(error => console.error(error));
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

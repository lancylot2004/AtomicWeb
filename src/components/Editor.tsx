import { useEffect, useState } from "react";
import config from "@/config.json";
import styles from "@/styles/editor.module.css";

interface Props {
  fileName: string;
}

export default function Editor({ fileName }: Props) {
  const [regex, setRegex] = useState(config.regexes[0]);
  const [typedRegex, setTypedRegex] = useState("");
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newRegex = regex;
      while (newRegex === regex) {
        const index = Math.floor(Math.random() * config.regexes.length);
        newRegex = config.regexes[index];
      }
      setShowTyping(true);
      setTypedRegex("");
      for (let i = 0; i < newRegex.length; i++) {
        setTimeout(() => setTypedRegex((prev) => prev + newRegex[i]), i * 50);
      }
      setTimeout(() => {
        setRegex(newRegex);
        setShowTyping(false);
      }, newRegex.length * 50);
    }, Math.floor(Math.random() * 20000) + 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.editor}>
      <div className={styles.header}>
        <span className={styles.filename}>{fileName}</span>
        <span className={styles.search}>
          <span className={styles.query}>
            {showTyping ? typedRegex : regex}
          </span>
          <span className={styles.options}>
            <span>g</span>
          </span>
        </span>
      </div>
      <div className={styles.footer}>
        <span className={styles.branch}>{config.branch}</span>
        <span className={styles.charset}>{config.charset}</span>
        <span className={styles.mode}>{config.mode}</span>
      </div>
    </div>
  );
}

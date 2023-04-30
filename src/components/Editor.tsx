import { useEffect, useState } from "react";
import config from "@/config.json";
import styles from "@/styles/editor.module.css";

interface Props {
  fileName: string
}

export default function Editor({ fileName }: Props) {
  const [file, setFile] = useState(config.defaultFileName);

  useEffect(() => {
    setFile(fileName)
  }, [fileName])

  return (
    <div className={styles.editor}>
      <div className={styles.header}>
        <span className={styles.filename}>{fileName}</span>
        <span className={styles.search}>
          <span className={styles.query}>(?&lt;=\s)[A-Z]+(?=,)</span>
          <span className={styles.options}>
            <span>g</span>
          </span>
        </span>
      </div>
      <div className={styles.footer}>
        <span className={styles.branch}>feature/deploy*</span>
        <span className={styles.charset}>UTF-8 LF</span>
        <span className={styles.mode}>TypeScript</span>
      </div>
    </div>
  );
}

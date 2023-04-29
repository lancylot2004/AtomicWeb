import styles from "../styles/editor.module.css";

export default function Editor() {
  return (
    <div className={styles.editor}>
      <div className={styles.header}>
        <span className={styles.filename}>main.ts</span>
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

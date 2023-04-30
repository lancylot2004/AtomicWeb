import config from "@/config.json";
import styles from "@/styles/editor.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.branch}>{config.et.branch}</span>
      <span className={styles.charset}>{config.et.charset}</span>
      <span className={styles.mode}>{config.et.mode}</span>
    </div>
  );
}

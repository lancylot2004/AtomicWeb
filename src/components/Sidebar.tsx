import styles from "../styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.leftMenu}>
      <div className={styles.logo}>React App</div>
      <div className={styles.buttonContainer}>
        <button>Welcome</button>
        <button>Features</button>
        <button>About</button>
      </div>
      <div className={styles.scrollableMenu}>
        <div className={styles.sectionHeader}>Menu</div>
        <button>Welcome</button>
        <button>Features</button>
        <button>About</button>
      </div>
    </div>
  );
}

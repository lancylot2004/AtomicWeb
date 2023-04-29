import { useState } from "react";
import styles from "@/styles/sidebar.module.css";
import config from "@/config.json";

export default function Sidebar(props: { onChildClick: any; }) {
  const [activeLoc, setActiveLoc] = useState(["S1", "PCS", "101"]);
  const { onChildClick } = props;

  const handleClick = (newLoc: [string, string]) => {
    onChildClick(activeLoc);
    setActiveLoc(newLoc)
  };

  return (
    <div className={styles.leftMenu}>
      <div className={styles.logo}>{config.appName}</div>
      <div className={styles.buttonContainer}>
        {config.sections.map((section, index) => (
          <div key={index}>
            <div className={styles.sectionHeader}>{section.title}</div>
            <div className={styles.buttonSection}>
              {section.children.map((subsection, _) => (
                <div key={subsection.title}>
                  <button
                    className={`${styles.subsecButton} ${
                      activeLoc[1] === subsection.abbr && styles.activeButton
                    }`}
                    onClick={() => handleClick([section.abbr, subsection.abbr])}
                  >
                    {subsection.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

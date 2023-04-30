import { useState, useCallback } from "react";
import styles from "@/styles/sidebar.module.css";
import config from "@/config.json";

export default function Sidebar(props: { onChildClick: (newData: [string, string]) => void; }) {
  const [activeLoc, setActiveLoc] = useState<[string, string]>(["S1", "PCS"]);
  const { onChildClick } = props;

  const handleClick = useCallback(
    (newLoc: [string, string]) => {
      setActiveLoc(newLoc);
      onChildClick(newLoc);
    },
    [onChildClick]
  );

  return (
    <div className={styles.leftMenu}>
      <div className={styles.logo}>{config.appName}</div>
      <div className={styles.buttonContainer}>
        {config.sections.map((section, _) => (
          <div key={section.abbr}>
            <div className={styles.sectionHeader}>{section.title}</div>
            <div className={styles.buttonSection}>
              {section.children.map((subsection, _) => (
                <div key={subsection.abbr}>
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

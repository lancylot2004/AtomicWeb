import { useState } from 'react';
import styles from '@/styles/sidebar.module.css';
import config from '@/config.json'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(0);

  const handleButtonClick = (type: number, title: string) => {
    // Type: 0 --> Subsection, 1 --> Link
    if (type == 0) {

    } else if (type == 1) {

    }
  };

  return (
    <div className={styles.leftMenu}>
      <div className={styles.logo}>{config.appName}</div>
      <div className={styles.buttonContainer}>
        {config.sections.map((section, index) => (
          <div key={index}>
            <div className={styles.sectionHeader}>{section.title}</div>
            <div className={styles.buttonSection}>
              {section.children.map((child, buttonIndex) => (
                <button
                  key={buttonIndex}
                  className={styles.sectionButton}
                  onClick={() => handleButtonClick(0, child.title)}
                >
                  {child.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

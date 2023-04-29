import { useState } from 'react';
import styles from '@/styles/sidebar.module.css';
import config from '@/config.json'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(0);

  const handleButtonClick = (type: number, title: string) => {
    // Type: 0 --> Subsection, 1 --> Link
    if (type == 0) {
      // Do something when a subsection is clicked
    } else if (type == 1) {
      // Do something when a link is clicked
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
                <div key={buttonIndex}>
                  <button
                    className={`${styles.sectionButton} ${
                      activeSection === buttonIndex && styles.activeButton
                    }`}
                    onClick={() => handleButtonClick(0, child.title)}
                  >
                    {child.title}
                  </button>
                  {activeSection === buttonIndex && (
                    <div className={styles.subButtons}>
                      {child.children.map((subsection, subIndex) => (
                        <button
                          key={subIndex}
                          className={styles.subButton}
                          onClick={() => handleButtonClick(1, subsection.title)}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import styles from '@/styles/sidebar.module.css';
import config from '@/config.json'

// Define the sections and buttons as an array of objects
const sections = [
  {
    title: 'Section 1',
    buttons: [
      { label: 'Button 1.1', onClick: () => console.log('Button 1.1 clicked') },
      { label: 'Button 1.2', onClick: () => console.log('Button 1.2 clicked') },
      { label: 'Button 1.3', onClick: () => console.log('Button 1.3 clicked') },
    ],
  },
  {
    title: 'Section 2',
    buttons: [
      { label: 'Button 2.1', onClick: () => console.log('Button 2.1 clicked') },
      { label: 'Button 2.2', onClick: () => console.log('Button 2.2 clicked') },
    ],
  },
  {
    title: 'Section 3',
    buttons: [
      { label: 'Button 3.1', onClick: () => console.log('Button 3.1 clicked') },
      { label: 'Button 3.2', onClick: () => console.log('Button 3.2 clicked') },
      { label: 'Button 3.3', onClick: () => console.log('Button 3.3 clicked') },
      { label: 'Button 3.4', onClick: () => console.log('Button 3.4 clicked') },
    ],
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(0);

  const handleButtonClick = (onClick) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={styles.leftMenu}>
      <div className={styles.logo}>{config.appName}</div>
      <div className={styles.buttonContainer}>
        {sections.map((section, index) => (
          <div key={index}>
            <div className={styles.sectionHeader}>{section.title}</div>
            <div className={styles.buttonSection}>
              {section.buttons.map((button, buttonIndex) => (
                <button
                  key={buttonIndex}
                  className={styles.sectionButton}
                  onClick={() => handleButtonClick(button.onClick)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

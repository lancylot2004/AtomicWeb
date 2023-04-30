import { getConfig } from '@/helpers/config';
import styles from "@/styles/editor.module.css";

import TypingEffect from "@/helpers/TypingEffect";
import RandomiseEffect from "@/helpers/RandomiseEffect";

export default function Footer({ fileName }: { fileName: string }) {
  const config = getConfig();
  const regex = RandomiseEffect(
    config.et.regexes[0],
    config.et.minT,
    config.et.maxT,
    config.et.regexes
  );
  const typedRegex = TypingEffect(regex, 50);
  const typedFileName = TypingEffect(fileName, 50);

  return (
    <div className={styles.header}>
      <span className={styles.filename}>{typedFileName}</span>
      <span className={styles.search}>
        <span className={styles.query}>{typedRegex}</span>
        <span className={styles.options}>
          <span>{config.et.options}</span>
        </span>
      </span>
    </div>
  );
}

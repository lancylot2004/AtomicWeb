import { useEffect, useState } from "react";

import config from "@/config.json";
import styles from "@/styles/editor.module.css";
import TypingEffect from "@/helpers/TypingEffect";
import RandomiseEffect from "@/helpers/RandomiseEffect";

interface Props {
  fileName: string;
}

export default function Editor({ fileName }: Props) {
  const regex = RandomiseEffect(config.et.regexes[0], config.et.minT, config.et.maxT, config.et.regexes);
  const typedRegex = TypingEffect(regex, 50);
  const typedFileName = TypingEffect(fileName, 50);

  return (
    <div className={styles.editor}>
      <div className={styles.header}>
        <span className={styles.filename}>{typedFileName}</span>
        <span className={styles.search}>
          <span className={styles.query}>{typedRegex}</span>
          <span className={styles.options}>
            <span>{config.et.options}</span>
          </span>
        </span>
      </div>
      <div className={styles.footer}>
        <span className={styles.branch}>{config.et.branch}</span>
        <span className={styles.charset}>{config.et.charset}</span>
        <span className={styles.mode}>{config.et.mode}</span>
      </div>
    </div>
  );
}

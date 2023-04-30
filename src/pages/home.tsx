import Head from "next/head";
import styles from "@/styles/home.module.css";
import config from "@/config.json";

import Editor from "@/components/Editor";
import Sidebar from "@/components/Sidebar";
import Markdown from "@/components/Markdown";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeLoc, setActiveLoc] = useState(["S1", "PCS"]);
  const [fileName, setFileName] = useState(config.defaultFileName);

  useEffect(() => {
    setFileName(`${activeLoc[0]}-${activeLoc[1]}.md`);
  }, [activeLoc]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{config.appName}</title>
        <meta name="description" content={config.appDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContent}>
        <Editor fileName={fileName}/>
        <Sidebar onChildClick={(newLoc: [string, string]) => setActiveLoc(newLoc)} />

        <div className={styles.markdown}>
          <Markdown fileName={fileName}/>
        </div>
      </div>
    </div>
  );
}

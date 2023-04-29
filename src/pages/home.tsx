import Head from "next/head";
import styles from "@/styles/home.module.css";
import config from "@/config.json";

import Editor from "@/components/Editor";
import Sidebar from "@/components/Sidebar";
import Markdown from "@/components/Markdown";
import { useState } from "react";

export default function Home() {
  const [activeLoc, setActiveSection] = useState(["S1", "PCS"]);
  const [filePath, setFilePath] = useState("/markdown/S1-PCS.md");

  const handleChildClick = (newData: [string, string]) => {
    setActiveSection(newData);
    setFilePath(`/markdown/${activeLoc[0]}-${activeLoc[1]}.md`);
    console.log(filePath)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{config.appName}</title>
        <meta name="description" content={config.appDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContent}>
        <Editor />
        <Sidebar onChildClick={handleChildClick} />

        <div className={styles.markdown}>
          <Markdown filePath={filePath}/>
        </div>
      </div>
    </div>
  );
}

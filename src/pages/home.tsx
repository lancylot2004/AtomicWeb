import Head from "next/head";
import styles from "@/styles/home.module.css";
import config from "@/config.json";

import Sidebar from "@/components/Sidebar";
import Markdown from "@/components/Markdown";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const [activeLoc, setActiveLoc] = useState(["S1", "PCS"]);
  const [fileName, setFileName] = useState(config.wb.defaultFileName);

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
        <Sidebar onChildClick={(newLoc: [string, string]) => setActiveLoc(newLoc)} />
        <Footer />
        <div className={styles.rightHalf}>
          <Header fileName={fileName} />
          <Markdown fileName={fileName}/>
        </div>
      </div>
    </div>
  );
}

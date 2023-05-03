import Head from "next/head";
import styles from "@/styles/home.module.css";
import { getConfig } from '@/helpers/config';

import Sidebar from "@/components/Sidebar";
import Markdown from "@/components/Markdown";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const config = getConfig();
  const [activeLoc, setActiveLoc] = useState(config.wb.defaultLoc);
  const [fileName, setFileName] = useState(config.wb.defaultFileName);

  useEffect(() => {
    setFileName(`${activeLoc[0]}-${activeLoc[1]}.md?v=1`);
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

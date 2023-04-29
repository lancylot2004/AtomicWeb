import Head from "next/head";
import styles from "../styles/home.module.css";

import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atomical 2023</title>
        <meta name="description" content="Atomic's 2023 Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContent}>
        <Editor />
        <Sidebar />

        <div className={styles.markdown}>
          <p>placeholder</p>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import style from "../styles/Questions.module.css";
import  ReactMarkdown  from "react-markdown";
// import remarkGfm from 'remark-gfm'
const inter = Inter({ subsets: ["latin"] });
const markdown = "# https://github.com/facebook/react/blob/main/README.md**"
export default function Home() {
  return (
    <>
      <Head>
        <title>Atomic Challenge 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.container}>
        <div className={style.sidebar}>
          <header>Atomic Challenge 2023</header>

          <ul className={style.questionList}>
            <li>abc</li>
            <li>def</li>
            <li>ghi</li>
            <li>jkl</li>
            <li>lmn</li>
          </ul>
        </div>
        <div className={style.questionBoard}>
            <ReactMarkdown children={markdown}></ReactMarkdown>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae explicabo recusandae provident soluta culpa impedit quaerat ea aspernatur, nihil, quis similique? Quam repudiandae ad nihil dignissimos quia veniam, rem iusto! Maiores optio dolores dicta aliquid reiciendis iure repellat fuga ipsam quos dignissimos vitae odio provident aliquam ab consequuntur, voluptates inventore?
        </div>

      </main>
    </>
  );
}

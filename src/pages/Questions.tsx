import Head from "next/head";
import { Inter } from "next/font/google";
import style from "../styles/Questions.module.css";
import  ReactMarkdown  from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
// import remarkGfm from 'remark-gfm'
const inter = Inter({ subsets: ["latin"] });
export async function getServerSideProps(){
  const res = await fetch("https://raw.githubusercontent.com/facebook/react/main/README.md")
  const data = await res.text()
  return {props:{data}}
}
let didInit = false
export default function Home({data}:{data:string}) {
  const questionBoard = useRef<HTMLDivElement>(null!)
  const miniMapImage = useRef<HTMLImageElement>(null)
  useEffect(()=>{
    if(!didInit){
      html2canvas(questionBoard.current,{scale:3}).then(function(canvas){
        let dataURL = canvas.toDataURL()
        // let img = document.createElement("img")
        // img.setAttribute("src",dataurl)
        // img.className=style.minimap
        // document.body.appendChild(img)
        miniMapImage.current?.setAttribute("src",dataURL)
        didInit = true
        }
      )
    }
  },[])
  return (
    <>
      <Head>
        <title>Atomic Challenge 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.container}>
        <div className={style.minimapContainer}>
          <img ref={miniMapImage} className={style.minimapSource}/>

        </div>
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
        <div className={style.questionBoard} ref={questionBoard}>
            <ReactMarkdown children={data} remarkPlugins={[remarkGfm]}></ReactMarkdown>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae explicabo recusandae provident soluta culpa impedit quaerat ea aspernatur, nihil, quis similique? Quam repudiandae ad nihil dignissimos quia veniam, rem iusto! Maiores optio dolores dicta aliquid reiciendis iure repellat fuga ipsam quos dignissimos vitae odio provident aliquam ab consequuntur, voluptates inventore?
        </div>

      </main>
    </>
  );
}

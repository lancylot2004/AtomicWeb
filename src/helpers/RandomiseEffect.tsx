import { useEffect, useState } from "react";

/**
 * A custom hook that changes the text randomly after a specified time interval.
 * 
 * @param {string} initialText - The initial text.
 * @param {number} minTime - The minimum time interval between changing the text, in milliseconds.
 * @param {number} maxTime - The maximum time interval between changing the text, in milliseconds.
 * @param {string[]} textList - The list of texts to be randomly selected from when changing the text.
 * 
 * @returns {string} The current text.
 */
function RandomiseEffect(initialText: string, minTime: number, maxTime: number, textList: string[]) {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const index = Math.floor(Math.random() * textList.length);
      setText(textList[index]);
    }, Math.floor(Math.random() * (maxTime - minTime)) + minTime);
    return () => clearTimeout(timeoutId);
  }, [text, textList, minTime, maxTime]);

  return text;
}

export default RandomiseEffect;
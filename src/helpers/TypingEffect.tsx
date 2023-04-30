import { useEffect, useRef, useState } from "react";

/**
 * A custom hook that simulates a typewriter effect by typing out a string of text one character at a time.
 *
 * @param {string} text - The text to be typed out.
 * @param {number} delay - The delay between typing each character, in milliseconds.
 *
 * @returns {string} The typed out text.
 */
function TypingEffect(text: string, delay: number): string {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const intervalId = setInterval(() => {
      setTypedText((prevTypedText) => prevTypedText + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        setTypedText(text);
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, [text, delay]);

  return typedText;
}

export default TypingEffect;

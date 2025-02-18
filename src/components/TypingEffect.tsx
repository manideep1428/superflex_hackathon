import React, { useEffect, useState } from 'react';

const TypingEffect: React.FC<{ text: string; speed: number }> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return; // Ensure text is defined

    let index = 0;
    let isMounted = true;

    const startTyping = () => {
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          if (isMounted) {
            setDisplayedText((prev) => prev + text[index]);
            index++;
          }
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            if (isMounted) {
              setDisplayedText(''); // Clear the text
              index = 0; // Reset index
              startTyping(); // Restart typing
            }
          }, 2000); // Reset after 2 seconds
        }
      }, speed);
    };

    startTyping();

    return () => {
      isMounted = false;
    };
  }, [text, speed]);

  return <span>{displayedText || '\u00A0'}</span>; 
};

export default TypingEffect;
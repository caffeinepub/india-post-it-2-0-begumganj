import { useState, useEffect } from 'react';

interface TypewriterNeonProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
}

export function TypewriterNeon({ lines, typingSpeed = 50, lineDelay = 300 }: TypewriterNeonProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsTyping(false);
      return;
    }

    const targetLine = lines[currentLineIndex];
    
    if (currentText.length < targetLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetLine.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next after delay
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, currentText]);
        setCurrentText('');
        setCurrentLineIndex(currentLineIndex + 1);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, lines, displayedLines, typingSpeed, lineDelay]);

  return (
    <div className="space-y-2 font-mono">
      {displayedLines.map((line, index) => (
        <p key={index} className="body-lg text-official-primary">
          {line}
        </p>
      ))}
      {isTyping && currentText && (
        <p className="body-lg text-official-primary typing-cursor">
          {currentText}
        </p>
      )}
    </div>
  );
}

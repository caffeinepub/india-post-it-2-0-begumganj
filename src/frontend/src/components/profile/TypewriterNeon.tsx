import { useEffect, useState } from 'react';

interface TypewriterNeonProps {
  lines: string[];
  speed?: number;
}

/**
 * Typewriter text animation component with blue/yellow/black animated text styling and stable layout.
 * Renders profile biodata lines with continuous blinking cursor after typing completes.
 */
export function TypewriterNeon({ lines, speed = 50 }: TypewriterNeonProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = '';
          }
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Move to next line after a brief pause
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentLineIndex, lines, speed]);

  return (
    <div className="space-y-3 font-mono">
      {/* Render all lines with consistent height containers */}
      {lines.map((line, index) => (
        <div key={index} className="flex items-center gap-2 min-h-[1.5rem]">
          {index < displayedLines.length && (
            <>
              {/* Check if line contains the profile name */}
              {displayedLines[index].includes('𝐏𝐫𝐚𝐛𝐚𝐥 𝐏𝐫𝐚𝐭𝐚𝐩') ? (
                <p className="body-base">
                  <span className="animated-blue-yellow-black-text">
                    {displayedLines[index].split('𝐏𝐫𝐚𝐛𝐚𝐥 𝐏𝐫𝐚𝐭𝐚𝐩')[0]}
                  </span>
                  <span className="bpm-profile-name">𝐏𝐫𝐚𝐛𝐚𝐥 𝐏𝐫𝐚𝐭𝐚𝐩</span>
                  <span className="animated-blue-yellow-black-text">
                    {displayedLines[index].split('𝐏𝐫𝐚𝐛𝐚𝐥 𝐏𝐫𝐚𝐭𝐚𝐩')[1] || ''}
                  </span>
                </p>
              ) : (
                <p className="body-base animated-blue-yellow-black-text">{displayedLines[index]}</p>
              )}
              {index === currentLineIndex && !isComplete && (
                <span className="inline-block w-2 h-5 bg-metallic-gold blinking-cursor" />
              )}
            </>
          )}
        </div>
      ))}
      {isComplete && (
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-5 bg-metallic-gold blinking-cursor" />
        </div>
      )}
    </div>
  );
}

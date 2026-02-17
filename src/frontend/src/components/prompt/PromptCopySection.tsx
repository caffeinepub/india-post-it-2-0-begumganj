import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Check } from 'lucide-react';
import { useClickSound } from '@/hooks/useClickSound';

const PROMPT_TEXT = `Create an exact 100 percent same-to-same clone of the website I will provide. Copy every detail exactly as it is: layout, colors, fonts, spacing, images, animations, buttons, scroll effects, hover effects, sounds, interactions, and full responsive design. Do not change or improve anything. Make the design pixel-perfect and identical to the original. Output complete front-end code including HTML, CSS, and JavaScript exactly matching the original website.`;

/**
 * Responsive UI section with a textarea prefilled with an English "same-to-same clone" prompt
 * and a Copy button that uses the browser clipboard API with success feedback.
 */
export function PromptCopySection() {
  const [copied, setCopied] = useState(false);
  const { playTap } = useClickSound();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      playTap();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="official-panel p-6 md:p-8 space-y-4">
        <div className="space-y-2">
          <h2 className="heading-md">Clone This Website</h2>
          <p className="body-sm text-official-secondary">
            Copy the prompt below and paste it into any AI model to create an exact replica of this website
          </p>
        </div>

        <div className="space-y-3">
          <Textarea
            value={PROMPT_TEXT}
            readOnly
            className="min-h-[120px] resize-none bg-matte-black/50 border-metallic-gold/20 text-official-primary body-sm focus:border-metallic-gold/40 transition-colors"
          />

          <Button
            onClick={handleCopy}
            className="w-full md:w-auto bg-metallic-gold hover:bg-metallic-gold/90 text-matte-black font-semibold transition-all duration-300"
            size="lg"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Prompt
              </>
            )}
          </Button>

          {copied && (
            <p className="text-sm text-metallic-gold animate-in fade-in duration-200">
              ✓ Prompt copied to clipboard successfully
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

import { Lock, ExternalLink } from 'lucide-react';

/**
 * Clear UI placeholder/blocked notice component stating that exact-clone work requires
 * a source URL/assets and permission confirmation before proceeding.
 */
export function CloneWorkBlockedNotice() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="frosted-glass-light rounded-xl p-6 md:p-8 border-2 border-metallic-gold/30 shadow-official">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Lock className="w-8 h-8 text-metallic-gold icon-live" aria-hidden="true" />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="heading-md animated-pink-blue-text">
              Website Cloning Requirements
            </h2>
            <div className="space-y-3 body-base text-official-primary">
              <p>
                To create an exact pixel-perfect clone of any website, the following are required:
              </p>
              <ul className="list-disc list-inside space-y-2 text-official-secondary ml-2">
                <li>Complete source website URL</li>
                <li>All required assets (images, fonts, videos, audio files)</li>
                <li>Confirmation of permission/rights to reproduce the content</li>
                <li>Specific design specifications and brand guidelines</li>
              </ul>
              <p className="text-official-tertiary text-sm mt-4 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Without these details, exact cloning cannot be implemented.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

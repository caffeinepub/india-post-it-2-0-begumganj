export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto py-8 border-t official-divider">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3">
          {/* Copyright */}
          <p className="body-sm text-official-secondary">
            © {currentYear} India Post IT 2.0 - Begumganj. All rights reserved.
          </p>

          {/* Disclaimer */}
          <p className="body-sm text-official-tertiary max-w-2xl mx-auto leading-relaxed">
            This is an informational website. Please verify all scheme details and rates with your local post office. 
            Interest rates and terms are subject to change as per government notifications.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto py-6 border-t official-divider">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="body-sm text-official-secondary">
            © {currentYear} India Post IT 2.0 - Begumganj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

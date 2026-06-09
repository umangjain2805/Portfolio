const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/30 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-secondary text-sm font-medium">
          © {currentYear} Umang Jain. <span className="hidden md:inline">|</span> <br className="md:hidden" />
          <span className="text-accent ml-1">Built with React and Tailwind CSS.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

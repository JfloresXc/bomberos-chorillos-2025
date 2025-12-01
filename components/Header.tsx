import React, { useState, useEffect } from 'react';

const FireIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 18.75a.75.75 0 001.071 1.052 11.25 11.25 0 008.855-5.413.75.75 0 00-.472-1.156l-3.213-.803a.75.75 0 01-.595-.752V11.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v.75a.75.75 0 01-1.5 0V9.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.5a.75.75 0 01-1.5 0v-3a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v10.5a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V18a.75.75 0 011.5 0v2.25a.75.75 0 001.5 0v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 001.5 0V15a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.037a11.218 11.218 0 01-4.228 5.617.75.75 0 00.254 1.33c4.876.69 9.39-2.126 10.972-6.538.784-2.193.36-4.63-.99-6.692a11.25 11.25 0 00-9.21-5.143z" clipRule="evenodd" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', text: 'Servicios' },
    { href: '#seguridad', text: 'Consejos' },
    { href: '#colaborar', text: 'Colaborar' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/95 backdrop-blur-sm shadow-md' : 'py-4 bg-white/80'}`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <FireIcon className="h-8 w-8 text-brand-red" />
            <span className="text-xl font-bold font-heading uppercase text-brand-dark">Bomberos Chorrillos</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-brand-text-primary hover:text-brand-red transition-colors duration-300 font-medium">
                {link.text}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md shadow-lg p-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map(link => (
                 <li key={link.href}>
                  <a href={link.href} className="block text-brand-text-primary hover:text-brand-red transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { Menu, X, Pizza } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Pizza className="h-8 w-8" />
            <span className="ml-2 text-xl font-serif">Napoli Pizza</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Accueil</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#story">Notre Histoire</NavLink>
            <NavLink href="#location">Localisation</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home">Accueil</MobileNavLink>
            <MobileNavLink href="#menu">Menu</MobileNavLink>
            <MobileNavLink href="#story">Notre Histoire</MobileNavLink>
            <MobileNavLink href="#location">Localisation</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium"
  >
    {children}
  </a>
);
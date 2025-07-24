import { Link } from 'react-router-dom';
import { Pizza } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-beige-100/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Pizza className="text-olive-500" size={28} />
          <span className="text-2xl font-bold text-gray-800">Lerchenpizza</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-olive-600 transition-colors">Home</Link>
          <Link to="/menu" className="text-gray-600 hover:text-olive-600 transition-colors">Speisekarte</Link>
          <Link to="/about" className="text-gray-600 hover:text-olive-600 transition-colors">Über uns</Link>
          <Link to="/contact" className="bg-olive-500 text-white px-4 py-2 rounded-md hover:bg-olive-600 transition-colors">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

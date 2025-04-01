
import { Calculator, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="w-8 h-8 text-darkGreen" />
          <h1 className="text-xl md:text-2xl font-bold text-darkGreen">ROAS Calculator</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-darkGreen hover:text-darkGreen/90 hover:bg-mintGreen/10">
            <Link to="/">
              <Calculator className="w-4 h-4 mr-2" />
              Calculator
            </Link>
          </Button>
          <Button asChild variant="ghost" className="text-darkGreen hover:text-darkGreen/90 hover:bg-mintGreen/10">
            <Link to="/about">
              <Info className="w-4 h-4 mr-2" />
              About
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

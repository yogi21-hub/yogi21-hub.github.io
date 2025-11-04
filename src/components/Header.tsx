import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            ShoeStore
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/shop/mens" className="text-sm font-medium transition-colors hover:text-primary">
            Men's
          </Link>
          <Link to="/shop/womens" className="text-sm font-medium transition-colors hover:text-primary">
            Women's
          </Link>
          <Link to="/shop/kids" className="text-sm font-medium transition-colors hover:text-primary">
            Kids'
          </Link>
          <Link to="/shop/sale" className="text-sm font-medium text-accent transition-colors hover:text-accent/80">
            Sale
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center border rounded-md px-3 py-1">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <Input 
              type="search" 
              placeholder="Search shoes..." 
              className="border-0 focus-visible:ring-0 h-8 w-64 p-0"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>

      <div className="container md:hidden px-4 pb-4">
        <div className="flex items-center border rounded-md px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground mr-2" />
          <Input 
            type="search" 
            placeholder="Search shoes..." 
            className="border-0 focus-visible:ring-0 h-8 p-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="font-bold text-white">AS</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">ArtSpark</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-accent transition-colors">
              Home
            </Link>
            <Link to="/explore" className="px-3 py-2 rounded-md hover:bg-accent transition-colors">
              Explore
            </Link>
            <Link to="/create" className="px-3 py-2 rounded-md hover:bg-accent transition-colors">
              Create
            </Link>
          </div>
        </div>
        
        <div className="hidden md:flex relative items-center max-w-sm w-full">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search collections and creators..."
            className="pl-8 w-full"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/profile">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
              <Wallet className="h-4 w-4" />
              <span>Connect</span>
            </Button>
          </Link>
          <Button size="sm" className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            <Link to="/create">Create</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

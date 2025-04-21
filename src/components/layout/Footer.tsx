
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="font-bold text-white">AS</span>
              </div>
              <span className="font-bold text-xl">ArtSpark</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discover, collect, and sell extraordinary digital art and NFTs.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  All NFTs
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Art
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Digital Art
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">My Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">
                  Create
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
                  My Collections
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Join our community</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z"></path>
                  <path d="M10 12a2 2 0 1 1 4 0v4"></path>
                  <path d="M10 12V8"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-5 border-t text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ArtSpark Digital Realm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

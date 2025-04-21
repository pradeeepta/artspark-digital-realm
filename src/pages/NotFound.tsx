
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">404</h1>
          <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link to="/">Go back home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/explore">Explore NFTs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

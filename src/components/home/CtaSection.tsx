
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-purple-500/10 to-blue-500/5">
      <div className="container">
        <div className="rounded-2xl border bg-background p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />
          <div className="absolute top-0 right-0 -mt-16 -mr-16 hidden lg:block">
            <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_25:217)" fillOpacity="0.2" />
              <defs>
                <linearGradient id="paint0_linear_25:217" x1="0" y1="0" x2="256" y2="256" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9b87f5" />
                  <stop offset="1" stopColor="#33C3F0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Create Your First NFT?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of artists and collectors in the digital art revolution. Start your journey today by creating your first NFT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                asChild
              >
                <Link to="/create">Create Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/explore">Explore First</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

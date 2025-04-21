
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/5" />
      <div className="container relative py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Discover, Collect & Create{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Extraordinary</span>{" "}
            NFTs
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The premier marketplace for digital art and collectibles. Explore, trade, and mint your own NFTs on the blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              asChild
            >
              <Link to="/explore">Explore Collection</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/create">Create NFT</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 -z-10 opacity-50 xl:opacity-100">
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
          <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
          <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_25:217)" />
          <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" fill="url(#paint4_linear_25:217)" />
          <defs>
            <linearGradient id="paint0_linear_25:217" x1="277" y1="-162" x2="277" y2="288" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7E69AB" />
              <stop offset="1" stopColor="#9b87f5" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#9b87f5" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#9b87f5" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="paint3_linear_25:217" x1="325.486" y1="122.87" x2="325.486" y2="482.87" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33C3F0" />
              <stop offset="1" stopColor="#33C3F0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.659" x2="184.521" y2="448.383" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="1" stopColor="#F97316" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

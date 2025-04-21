
import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import CtaSection from "@/components/home/CtaSection";
import { featuredNfts, latestNfts } from "@/data/mock-nfts";

const Index = () => {
  return (
    <div>
      <HeroSection />
      
      <FeaturedSection 
        title="Featured Artworks"
        description="Discover the most exceptional digital artworks handpicked by our curation team."
        nfts={featuredNfts}
        viewAllLink="/explore"
      />
      
      <FeaturedSection 
        title="Latest Creations"
        description="Explore the freshest NFTs that have just been minted on our platform."
        nfts={latestNfts.slice(0, 3)}
        viewAllLink="/explore"
      />
      
      <CtaSection />
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { NFTProps } from "../nft/NFTCard";
import NFTGrid from "../nft/NFTGrid";
import { SectionHeader } from "../ui/section-header";
import { Link } from "react-router-dom";

interface FeaturedSectionProps {
  title: string;
  description?: string;
  nfts: NFTProps[];
  viewAllLink?: string;
}

const FeaturedSection = ({
  title,
  description,
  nfts,
  viewAllLink = "/explore",
}: FeaturedSectionProps) => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-end mb-8">
          <SectionHeader title={title} description={description} />
          {viewAllLink && (
            <Button variant="outline" asChild>
              <Link to={viewAllLink}>View All</Link>
            </Button>
          )}
        </div>
        <NFTGrid nfts={nfts.slice(0, 3)} />
      </div>
    </section>
  );
};

export default FeaturedSection;

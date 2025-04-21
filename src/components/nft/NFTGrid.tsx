
import NFTCard, { NFTProps } from "./NFTCard";

interface NFTGridProps {
  nfts: NFTProps[];
  columns?: 1 | 2 | 3 | 4;
}

const NFTGrid = ({ nfts, columns = 3 }: NFTGridProps) => {
  const getGridClass = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    }
  };

  return (
    <div className={`grid ${getGridClass()} gap-6`}>
      {nfts.map((nft) => (
        <NFTCard key={nft.id} {...nft} />
      ))}
    </div>
  );
};

export default NFTGrid;

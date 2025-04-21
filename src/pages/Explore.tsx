
import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import NFTGrid from "@/components/nft/NFTGrid";
import { categories, mockNfts } from "@/data/mock-nfts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Explore = () => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredNfts = mockNfts.filter(nft => {
    // Category filter
    if (category !== "All" && nft.category !== category) {
      return false;
    }
    
    // Search filter
    if (searchQuery && !nft.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const sortedNfts = [...filteredNfts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortBy === "price-high") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sortBy === "price-low") {
      return parseFloat(a.price) - parseFloat(b.price);
    }
    return 0;
  });

  return (
    <div className="container py-12">
      <SectionHeader 
        title="Explore NFTs" 
        description="Discover the latest digital collectibles and art pieces from creators around the world."
        className="mb-8"
      />
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Category filter */}
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {/* Sort options */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(cat)}
            className={category === cat ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" : ""}
          >
            {cat}
          </Button>
        ))}
      </div>
      
      {/* Results count */}
      <p className="text-muted-foreground mb-6">Showing {sortedNfts.length} {sortedNfts.length === 1 ? "result" : "results"}</p>
      
      {/* NFT Grid */}
      {sortedNfts.length > 0 ? (
        <NFTGrid nfts={sortedNfts} columns={4} />
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">No NFTs Found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Explore;

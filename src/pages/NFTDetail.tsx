
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockNfts } from "@/data/mock-nfts";
import { Heart, Share2, Eye, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const NFTDetail = () => {
  const { id } = useParams();
  const nft = mockNfts.find(nft => nft.id === id);
  
  if (!nft) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">NFT Not Found</h1>
        <p className="text-muted-foreground mb-6">The NFT you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <a href="/explore">Browse Collection</a>
        </Button>
      </div>
    );
  }
  
  const handlePurchase = () => {
    toast.success("Purchase initiated!", {
      description: "Please connect your wallet to complete this transaction.",
    });
  };
  
  const handleLike = () => {
    toast.success("Added to favorites!");
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };
  
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* NFT Image */}
        <div>
          <div className="rounded-lg overflow-hidden border bg-card">
            <img 
              src={nft.image} 
              alt={nft.title}
              className="w-full object-cover aspect-square"
            />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleLike}>
                <Heart className="mr-2 h-4 w-4" />
                <span>Favorite</span>
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Eye className="h-4 w-4" />
              <span>1.2K views</span>
            </div>
          </div>
        </div>
        
        {/* NFT Details */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{nft.category}</Badge>
              <Badge variant="secondary">
                <Clock className="mr-1 h-3 w-3" />
                <span>New</span>
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">{nft.title}</h1>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Created by</span>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={nft.creator.avatar} />
                  <AvatarFallback>{nft.creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{nft.creator.name}</span>
              </div>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{nft.price} ETH</span>
                    <span className="text-muted-foreground">($4,882.69)</span>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  size="lg"
                  onClick={handlePurchase}
                >
                  Buy Now
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  Make Offer
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="details">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
              <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
              <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-4 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{nft.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Collection</h3>
                  <p className="text-muted-foreground">{nft.collection}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Created</h3>
                  <p className="text-muted-foreground">{new Date(nft.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Chain</h3>
                  <p className="text-muted-foreground">{nft.blockchain}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Royalties</h3>
                  <p className="text-muted-foreground">10%</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="properties" className="pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-xs text-purple-500 uppercase font-medium">Type</p>
                    <p className="font-semibold">{nft.category}</p>
                    <p className="text-xs text-muted-foreground mt-1">14% have this trait</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-xs text-blue-500 uppercase font-medium">Rarity</p>
                    <p className="font-semibold">Legendary</p>
                    <p className="text-xs text-muted-foreground mt-1">3% have this trait</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-xs text-orange-500 uppercase font-medium">Edition</p>
                    <p className="font-semibold">Original</p>
                    <p className="text-xs text-muted-foreground mt-1">100% have this trait</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="pt-4">
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z"></path>
                        <path d="M10 12a2 2 0 1 1 4 0v4"></path>
                        <path d="M10 12V8"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Minted</p>
                      <p className="text-sm text-muted-foreground">By {nft.creator.name} • {new Date(nft.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </li>
                
                <li className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.5 6a2.5 2.5 0 0 1-2.5 2.5H6"></path>
                        <path d="M16 6V4.5A2.5 2.5 0 0 0 13.5 2h-7A2.5 2.5 0 0 0 4 4.5V18a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5V9"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Listed for sale</p>
                      <p className="text-sm text-muted-foreground">For {nft.price} ETH • 2 days ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;

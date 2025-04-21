
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NFTGrid from "@/components/nft/NFTGrid";
import { latestNfts } from "@/data/mock-nfts";
import { Copy, WalletCards, Link as LinkIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const Profile = () => {
  const myNfts = latestNfts.slice(0, 4);
  const createdNfts = latestNfts.slice(4, 8);
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0x1a2b3c4d5e6f7g8h9i0j...");
    toast.success("Address copied to clipboard");
  };

  return (
    <div className="container py-12">
      <Card className="mb-12 overflow-hidden border-0 bg-transparent relative">
        {/* Cover Image */}
        <div className="h-48 md:h-64 w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFic3RyYWN0JTIwYXJ0fGVufDB8fDB8fHww')] bg-cover bg-center opacity-50"></div>
        </div>
        
        <CardContent className="p-6 pt-0 relative">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Crypto_Nomad</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>0x1a2b3c4d5e6f7g8h9i0j...</span>
                    <button onClick={handleCopyAddress} className="hover:text-foreground transition-colors">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <LinkIcon className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    <WalletCards className="h-4 w-4" />
                    <span>Connect Wallet</span>
                  </Button>
                </div>
              </div>
              <p className="text-muted-foreground">
                Digital artist exploring the intersection of art and technology. Creating unique NFTs since 2021.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Balance</h3>
                <p className="text-2xl font-bold">4.89 ETH</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Collected</h3>
                  <p className="font-medium">{myNfts.length}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Created</h3>
                  <p className="font-medium">{createdNfts.length}</p>
                </div>
              </div>
              
              <Button className="w-full">Manage Funds</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Tabs defaultValue="collected">
            <TabsList className="mb-6">
              <TabsTrigger value="collected">Collected</TabsTrigger>
              <TabsTrigger value="created">Created</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="collected">
              <SectionHeader 
                title="My Collection" 
                description="NFTs you've purchased and collected"
                className="mb-6"
              />
              
              {myNfts.length > 0 ? (
                <NFTGrid nfts={myNfts} columns={3} />
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No NFTs Found</h3>
                  <p className="text-muted-foreground mb-4">You haven't collected any NFTs yet.</p>
                  <Button asChild>
                    <a href="/explore">Browse the Marketplace</a>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="created">
              <SectionHeader 
                title="Created NFTs" 
                description="NFTs you've created and minted"
                className="mb-6"
              />
              
              {createdNfts.length > 0 ? (
                <NFTGrid nfts={createdNfts} columns={3} />
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No Created NFTs</h3>
                  <p className="text-muted-foreground mb-4">You haven't created any NFTs yet.</p>
                  <Button asChild>
                    <a href="/create">Create Your First NFT</a>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="activity">
              <SectionHeader 
                title="Recent Activity" 
                description="Your recent transactions and interactions"
                className="mb-6"
              />
              
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m8 12 3 3 5-5"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Purchased "Cosmic Dreamscape #42"</p>
                          <p className="text-sm text-muted-foreground">2.5 ETH • 2 hours ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </li>
                    
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
                          <p className="font-medium">Created "Digital Genesis"</p>
                          <p className="text-sm text-muted-foreground">Listed for 4.1 ETH • 1 day ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </li>
                    
                    <li className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 11V6a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0"></path>
                            <path d="M13 11V4a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0"></path>
                            <line x1="5" x2="19" y1="11" y2="11"></line>
                            <rect width="14" height="10" x="5" y="11" rx="1"></rect>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Received 0.35 ETH Royalty</p>
                          <p className="text-sm text-muted-foreground">From "Fractalized Consciousness" • 3 days ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;

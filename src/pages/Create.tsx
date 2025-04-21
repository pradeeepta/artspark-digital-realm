
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, ImagePlus, Diamond } from "lucide-react";
import { categories } from "@/data/mock-nfts";
import { toast } from "sonner";

const Create = () => {
  const [nftImage, setNftImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            setNftImage(event.target.result as string);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
        setIsUploading(false);
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMinting(true);
    
    // Simulate minting delay
    setTimeout(() => {
      toast.success("NFT Created Successfully!", {
        description: "Your NFT has been minted and is now available in your collection.",
      });
      setIsMinting(false);
      // In a real app, we would redirect to the newly created NFT page or profile
    }, 2000);
  };

  return (
    <div className="container py-12">
      <SectionHeader
        title="Create New NFT"
        description="Mint your digital creation as an NFT on the blockchain and share it with the world."
        className="mb-8"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <Card className="border-dashed">
          <CardContent className="p-6">
            <div 
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg ${nftImage ? 'p-4' : 'p-12'} text-center`}
            >
              {nftImage ? (
                <div className="w-full">
                  <img 
                    src={nftImage} 
                    alt="NFT Preview" 
                    className="w-full rounded-lg object-cover aspect-square" 
                  />
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setNftImage(null)}
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-full p-6 inline-flex">
                    <ImagePlus className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Upload NFT Artwork</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supported formats: JPG, PNG, GIF, SVG, WEBP. Max size: 100MB.
                    </p>
                    <div className="flex flex-col gap-2 sm:flex-row justify-center">
                      <Button 
                        variant="outline" 
                        className="relative overflow-hidden"
                        disabled={isUploading}
                      >
                        <Input 
                          type="file" 
                          className="absolute inset-0 opacity-0 cursor-pointer" 
                          onChange={handleImageUpload}
                          accept="image/*"
                        />
                        <Upload className="mr-2 h-4 w-4" />
                        {isUploading ? "Uploading..." : "Browse Files"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* NFT Details Form */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">NFT Name</Label>
                <Input id="name" placeholder="Enter NFT name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Provide a detailed description of your NFT" 
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(cat => cat !== "All").map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price (ETH)</Label>
                  <Input 
                    id="price" 
                    type="number" 
                    placeholder="0.05" 
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="royalties">Royalties (%)</Label>
                <Input 
                  id="royalties" 
                  type="number" 
                  placeholder="10" 
                  min="0"
                  max="50"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Percentage of sales you'll receive when your NFT is sold on the secondary market.
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                disabled={!nftImage || isMinting}
              >
                <Diamond className="mr-2 h-4 w-4" />
                {isMinting ? "Creating NFT..." : "Create NFT"}
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Create;


import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface NFTProps {
  id: string;
  title: string;
  image: string;
  price: string;
  creator: {
    name: string;
    avatar: string;
  };
  category?: string;
}

const NFTCard = ({ id, title, image, price, creator, category }: NFTProps) => {
  return (
    <Link to={`/nft/${id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-base line-clamp-1">{title}</h3>
            {category && (
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={creator.avatar} />
              <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{creator.name}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div>
            <p className="text-xs text-muted-foreground">Current Price</p>
            <p className="font-medium">{price} ETH</p>
          </div>
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500">
            View
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NFTCard;

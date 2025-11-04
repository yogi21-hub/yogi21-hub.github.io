import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sale?: boolean;
  salePrice?: number;
}

const ProductCard = ({ id, name, price, image, category, sale, salePrice }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-large group">
        <div className="relative overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {sale && (
            <Badge className="absolute top-4 right-4 bg-accent">
              Sale
            </Badge>
          )}
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-1">{category}</p>
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            {sale && salePrice ? (
              <>
                <span className="font-bold text-accent">${salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">${price}</span>
              </>
            ) : (
              <span className="font-bold">${price}</span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;

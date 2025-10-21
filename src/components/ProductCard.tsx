import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart, Product } from "@/contexts/CartContext";
import { Minus, Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  type: "retail" | "wholesale";
}

const ProductCard = ({ product, type }: ProductCardProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.id, type);
  const price = type === "retail" ? product.retailPrice : product.wholesalePrice;

  const handleToggleCart = () => {
    if (inCart) {
      removeFromCart(product.id, type);
    } else {
      addToCart(product, type);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)]">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge 
          variant="secondary" 
          className="absolute right-2 top-2 bg-card/90 backdrop-blur-sm"
        >
          {product.category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground capitalize">{type}</p>
            <p className="text-xl font-bold text-primary">₹{price}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleToggleCart}
          variant={inCart ? "destructive" : "cart"}
          className="w-full"
        >
          {inCart ? (
            <>
              <Minus className="mr-2 h-4 w-4" />
              Remove from Cart
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

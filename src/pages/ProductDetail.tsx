import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, RotateCcw, Shield, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import shoe1 from "@/assets/shoe-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your size before adding to cart",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart!",
      description: "CloudRun Pro has been added to your cart",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <img 
                  src={shoe1} 
                  alt="CloudRun Pro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-secondary cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src={shoe1} 
                      alt={`View ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4">New Arrival</Badge>
              <h1 className="text-4xl font-bold mb-2">CloudRun Pro</h1>
              <p className="text-muted-foreground mb-4">Men's Running Shoes</p>
              <div className="text-3xl font-bold mb-6">$129.99</div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Select Size</h3>
                  <div className="grid grid-cols-6 gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        className="h-12"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-gradient-hero hover:opacity-90 transition-opacity"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Free Shipping</p>
                      <p className="text-sm text-muted-foreground">On orders over $50</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <RotateCcw className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-semibold">365-Day Returns</p>
                      <p className="text-sm text-muted-foreground">Easy return policy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Secure Payment</p>
                      <p className="text-sm text-muted-foreground">100% protected checkout</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-3">Product Details</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>• Lightweight and breathable mesh upper</p>
                    <p>• Responsive cushioning for maximum comfort</p>
                    <p>• Durable rubber outsole for superior traction</p>
                    <p>• Engineered for performance running</p>
                    <p>• Available in multiple colors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

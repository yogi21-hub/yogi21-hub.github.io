import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, RotateCcw, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-shoes.jpg";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import shoe5 from "@/assets/shoe-5.jpg";
import shoe6 from "@/assets/shoe-6.jpg";

const Index = () => {
  const featuredProducts = [
    { id: "1", name: "CloudRun Pro", price: 129.99, image: shoe1, category: "Men's Running" },
    { id: "2", name: "Urban Style", price: 89.99, image: shoe2, category: "Women's Casual" },
    { id: "3", name: "Kids Active", price: 59.99, image: shoe3, category: "Kids' Sports" },
    { id: "4", name: "Classic Leather", price: 149.99, image: shoe4, category: "Men's Boots" },
    { id: "5", name: "Street Fashion", price: 99.99, image: shoe5, category: "Women's High-Top", sale: true, salePrice: 79.99 },
    { id: "6", name: "Performance Max", price: 139.99, image: shoe6, category: "Athletic" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          </div>
          
          <div className="container relative z-10 px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Step Into Your
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Perfect Fit
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the latest styles in footwear. From athletic performance to everyday comfort.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/shop/sale">
                  <Button size="lg" variant="outline">
                    View Sale
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 border-y bg-secondary/50">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">365-Day Returns</h3>
                  <p className="text-sm text-muted-foreground">Easy return policy</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">100% protected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground">Discover our most popular styles</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/shop">
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground">Find the perfect shoes for everyone</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/shop/mens" className="group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-medium hover:shadow-large transition-all duration-300">
                  <img 
                    src={shoe1} 
                    alt="Men's Shoes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold mb-2">Men's Shoes</h3>
                      <p className="text-muted-foreground mb-4">Performance & Style</p>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Shop Men's
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/shop/womens" className="group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-medium hover:shadow-large transition-all duration-300">
                  <img 
                    src={shoe2} 
                    alt="Women's Shoes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold mb-2">Women's Shoes</h3>
                      <p className="text-muted-foreground mb-4">Fashion & Comfort</p>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Shop Women's
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/shop/kids" className="group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-medium hover:shadow-large transition-all duration-300">
                  <img 
                    src={shoe3} 
                    alt="Kids' Shoes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold mb-2">Kids' Shoes</h3>
                      <p className="text-muted-foreground mb-4">Growing in Style</p>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Shop Kids'
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import shoe5 from "@/assets/shoe-5.jpg";
import shoe6 from "@/assets/shoe-6.jpg";

const Shop = () => {
  const { category } = useParams();
  
  const allProducts = [
    { id: "1", name: "CloudRun Pro", price: 129.99, image: shoe1, category: "Men's Running" },
    { id: "2", name: "Urban Style", price: 89.99, image: shoe2, category: "Women's Casual" },
    { id: "3", name: "Kids Active", price: 59.99, image: shoe3, category: "Kids' Sports" },
    { id: "4", name: "Classic Leather", price: 149.99, image: shoe4, category: "Men's Boots" },
    { id: "5", name: "Street Fashion", price: 99.99, image: shoe5, category: "Women's High-Top", sale: true, salePrice: 79.99 },
    { id: "6", name: "Performance Max", price: 139.99, image: shoe6, category: "Athletic" },
    { id: "7", name: "Trail Runner", price: 119.99, image: shoe1, category: "Men's Running" },
    { id: "8", name: "Comfort Walk", price: 79.99, image: shoe2, category: "Women's Casual" },
    { id: "9", name: "Junior Sprint", price: 54.99, image: shoe3, category: "Kids' Sports", sale: true, salePrice: 44.99 },
  ];

  const getCategoryTitle = () => {
    switch(category) {
      case "mens": return "Men's Shoes";
      case "womens": return "Women's Shoes";
      case "kids": return "Kids' Shoes";
      case "sale": return "Sale Items";
      default: return "All Products";
    }
  };

  const filterProducts = () => {
    if (!category) return allProducts;
    if (category === "sale") return allProducts.filter(p => p.sale);
    return allProducts.filter(p => 
      p.category.toLowerCase().includes(category.replace("s", ""))
    );
  };

  const products = filterProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-secondary/30 py-12">
          <div className="container px-4">
            <h1 className="text-4xl font-bold mb-2">{getCategoryTitle()}</h1>
            <p className="text-muted-foreground">
              {products.length} products available
            </p>
          </div>
        </div>

        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Running</Button>
              <Button variant="outline" size="sm">Casual</Button>
              <Button variant="outline" size="sm">Sports</Button>
              <Button variant="outline" size="sm">Boots</Button>
            </div>

            <Select defaultValue="featured">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;

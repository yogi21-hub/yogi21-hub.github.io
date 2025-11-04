import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-20">
          <div className="container px-4 text-center text-primary-foreground">
            <h1 className="text-5xl font-bold mb-6">About ShoeStore</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Your trusted destination for quality footwear since 2020
            </p>
          </div>
        </div>

        <div className="container px-4 py-16">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ShoeStore was founded with a simple mission: to provide everyone with access to high-quality, 
                stylish, and comfortable footwear at fair prices. What started as a small online shop has grown 
                into a trusted destination for shoe enthusiasts around the world.
              </p>
              <p>
                We believe that the right pair of shoes can change your day, boost your confidence, and support 
                you in achieving your goals. That's why we carefully curate our collection to include only the 
                best styles from leading brands and emerging designers.
              </p>
              <p>
                Our commitment extends beyond just selling shoes. We're dedicated to providing exceptional 
                customer service, hassle-free returns, and a shopping experience that keeps you coming back.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl mb-2">500K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-2xl mb-2">50+</h3>
              <p className="text-muted-foreground">Brand Partners</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-bold text-2xl mb-2">30+</h3>
              <p className="text-muted-foreground">Countries Served</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-bold text-2xl mb-2">4.8/5</h3>
              <p className="text-muted-foreground">Customer Rating</p>
            </Card>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every product is carefully selected and tested 
                  to meet our high standards.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We offer 365-day returns and responsive 
                  customer support to ensure your happiness.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental impact through sustainable 
                  practices and eco-friendly partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

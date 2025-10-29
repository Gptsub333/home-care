import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-medical.jpg";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional healthcare at home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Expert Healthcare at Your Doorstep
          </h1>
          <p className="text-md md:text-lg text-muted-foreground mb-8">
            Connect with certified doctors and nurses for professional medical care in the comfort of your home.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl shadow-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-3 font-medium">What medical service do you need?</p>
            <div className="flex gap-3 flex-col sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="e.g., Blood test, General checkup, Vaccination..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 h-12 text-sm border-2 focus:border-primary"
                />
              </div>
              <Button
                variant="hero"
                size="lg"
                onClick={handleSearch}
                className="h-12 px-8"
              >
                Find Doctors
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setSearchQuery("Blood Test");
                onSearch("Blood Test");
              }}
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium text-foreground transition-colors"
            >
              Blood Test
            </button>
            <button
              onClick={() => {
                setSearchQuery("Vaccination");
                onSearch("Vaccination");
              }}
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium text-foreground transition-colors"
            >
              Vaccination
            </button>
            <button
              onClick={() => {
                setSearchQuery("Health Checkup");
                onSearch("Health Checkup");
              }}
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium text-foreground transition-colors"
            >
              Health Checkup
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

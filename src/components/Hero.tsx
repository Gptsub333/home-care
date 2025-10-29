import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("query", searchQuery);
    if (location) params.set("location", location);
    if (specialty) params.set("specialty", specialty);
    
    navigate(`/doctors?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleQuickSearch = (query: string) => {
    navigate(`/doctors?query=${encodeURIComponent(query)}`);
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
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Expert Healthcare at Your Doorstep
          </h1>
          <p className="text-md md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect instantly with certified doctors and experienced nurses to receive professional medical care right in the comfort of your home. Enjoy peace of mind knowing expert medical support is just a click away — anytime, anywhere.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border max-w-4xl mx-auto">
            <p className="text-base text-muted-foreground mb-4 font-medium text-center">What medical service do you need?</p>
            <div className="flex gap-4 flex-col">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <Input
                    type="text"
                    placeholder="Search service or doctor..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 h-14 text-sm border-2 focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="h-14 pl-10 text-sm border-2">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="andheri">Andheri West, Mumbai</SelectItem>
                      <SelectItem value="bandra">Bandra East, Mumbai</SelectItem>
                      <SelectItem value="powai">Powai, Mumbai</SelectItem>
                      <SelectItem value="juhu">Juhu, Mumbai</SelectItem>
                      <SelectItem value="worli">Worli, Mumbai</SelectItem>
                      <SelectItem value="colaba">Colaba, Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Select value={specialty} onValueChange={setSpecialty}>
                  <SelectTrigger className="h-14 text-sm border-2">
                    <SelectValue placeholder="Select Specialist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Physician</SelectItem>
                    <SelectItem value="cardiologist">Cardiologist</SelectItem>
                    <SelectItem value="pediatrician">Pediatrician</SelectItem>
                    <SelectItem value="orthopedic">Orthopedic</SelectItem>
                    <SelectItem value="dermatologist">Dermatologist</SelectItem>
                    <SelectItem value="ent">ENT Specialist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="default"
                size="lg"
                onClick={handleSearch}
                className="h-14 px-8 text-md font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Doctors
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => handleQuickSearch("Vaccination")}
              className="px-5 py-2 md:px-6 md:py-3 bg-[#11c7d4] hover:bg-[#11c7d4]/80 rounded-full text-white font-medium text-foreground transition-colors text-[13px]"
            >
              Vaccination
            </button>
            <button
              onClick={() => handleQuickSearch("Health Checkup")}
              className="px-5 py-2 md:px-6 md:py-3 bg-[#11c7d4] hover:bg-[#11c7d4]/80 rounded-full text-white font-medium text-foreground transition-colors text-[13px]"
            >
              Health Checkup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

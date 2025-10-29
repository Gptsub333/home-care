import { Stethoscope, TestTube, Syringe, HeartPulse, Baby, UserCheck, Pill, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Checkup",
      description: "Comprehensive health examinations and consultations at your convenience",
      price: "From ₹500",
    },
    {
      icon: TestTube,
      title: "Lab Tests",
      description: "Blood tests, urine tests, and other diagnostic services at home",
      price: "From ₹300",
    },
    {
      icon: Syringe,
      title: "Vaccination",
      description: "All types of vaccines administered by trained healthcare professionals",
      price: "From ₹400",
    },
    {
      icon: HeartPulse,
      title: "ECG & Monitoring",
      description: "Cardiac monitoring and ECG tests in the comfort of your home",
      price: "From ₹600",
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description: "Specialized care for infants and children by pediatric experts",
      price: "From ₹700",
    },
    {
      icon: UserCheck,
      title: "Elderly Care",
      description: "Dedicated healthcare services for senior citizens",
      price: "From ₹800",
    },
    {
      icon: Pill,
      title: "Medicine Delivery",
      description: "Prescription medicines delivered to your doorstep",
      price: "Free Delivery",
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      description: "Professional physiotherapy sessions at home for recovery",
      price: "From ₹900",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-md md:text-lg text-muted-foreground">
            Comprehensive healthcare services delivered to your doorstep with professional care and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-md font-bold text-primary">{service.price}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need a custom service package?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact us for personalized healthcare solutions →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Heart, Shield, Clock, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Quality Care",
      description: "Certified healthcare professionals providing exceptional medical services at home",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All doctors verified with proper credentials and background checks",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round-the-clock medical support whenever you need it",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join thousands of families who trust us for their healthcare needs",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">About HomeCare</h2>
          <p className="text-md md:text-lg text-muted-foreground">
            We're revolutionizing healthcare delivery by bringing professional medical services directly to your home.
            Our mission is to make quality healthcare accessible, convenient, and affordable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-md md:text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm md:text-md text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground text-[13px] md:text-[15px]">Licensed and experienced medical professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground text-[13px] md:text-[15px]">Transparent pricing with no hidden charges</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground text-[13px] md:text-[15px]">Easy online booking and scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground text-[13px] md:text-[15px]">Comprehensive follow-up care</span>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary mb-1">500+</p>
                  <p className="text-sm text-muted-foreground">Doctors</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary mb-1">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Patients</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary mb-1">50+</p>
                  <p className="text-sm text-muted-foreground">Cities</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary mb-1">4.8</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 1800-XXX-XXXX",
      link: "tel:+911800XXXXXX",
    },
    {
      icon: Mail,
      title: "Email",
      details: "support@homecare.com",
      link: "mailto:support@homecare.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Healthcare Street, Mumbai, India",
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "24/7 Available",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We're here to help. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input type="text" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    placeholder="How can we help you?"
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. Our team is always ready to assist you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{info.title}</p>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-xl p-6 border border-primary/20 mt-8">
              <h4 className="font-semibold text-foreground mb-2">Emergency Services</h4>
              <p className="text-muted-foreground text-sm mb-4">
                For urgent medical assistance, call our 24/7 emergency helpline
              </p>
              <Button variant="destructive" size="lg" className="w-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency: 108
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Languages, 
  IndianRupee,
  MessageCircle,
  Calendar,
  Send,
  ArrowLeft
} from "lucide-react";
import { Doctor } from "@/components/DoctorCard";

// Mock doctor data
const mockDoctors: { [key: string]: Doctor } = {
  "1": {
    id: "1",
    name: "Priya Sharma",
    specialty: "General Physician",
    experience: 10,
    rating: 4.8,
    reviews: 245,
    location: "Andheri West, Mumbai",
    availability: "Available Today",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    languages: ["English", "Hindi", "Marathi"],
    consultationFee: 500,
  },
  "2": {
    id: "2",
    name: "Rajesh Kumar",
    specialty: "Cardiologist",
    experience: 15,
    rating: 4.9,
    reviews: 328,
    location: "Bandra East, Mumbai",
    availability: "Available Tomorrow",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    languages: ["English", "Hindi"],
    consultationFee: 800,
  },
  "3": {
    id: "3",
    name: "Anjali Patel",
    specialty: "Pediatrician",
    experience: 8,
    rating: 4.7,
    reviews: 189,
    location: "Powai, Mumbai",
    availability: "Available Today",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    languages: ["English", "Hindi", "Gujarati"],
    consultationFee: 600,
  },
  "4": {
    id: "4",
    name: "Vikram Singh",
    specialty: "Orthopedic",
    experience: 12,
    rating: 4.8,
    reviews: 276,
    location: "Juhu, Mumbai",
    availability: "Available Today",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    languages: ["English", "Hindi", "Punjabi"],
    consultationFee: 700,
  },
  "5": {
    id: "5",
    name: "Meera Reddy",
    specialty: "Dermatologist",
    experience: 9,
    rating: 4.9,
    reviews: 312,
    location: "Worli, Mumbai",
    availability: "Available Tomorrow",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    languages: ["English", "Hindi", "Telugu"],
    consultationFee: 650,
  },
  "6": {
    id: "6",
    name: "Arjun Mehta",
    specialty: "ENT Specialist",
    experience: 11,
    rating: 4.6,
    reviews: 198,
    location: "Colaba, Mumbai",
    availability: "Available Today",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    languages: ["English", "Hindi"],
    consultationFee: 550,
  },
};

interface Message {
  id: string;
  text: string;
  sender: "user" | "doctor";
  timestamp: Date;
}

const DoctorProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const doctor = id ? mockDoctors[id] : null;
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hello! I'm Dr. ${doctor?.name}. How can I help you today?`,
      sender: "doctor",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Doctor not found</h2>
            <Button onClick={() => navigate("/doctors")}>Back to Doctors</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages([...messages, userMessage]);
      setNewMessage("");

      // Simulate doctor response
      setTimeout(() => {
        const doctorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for your message. I'll review your concern and get back to you shortly. In case of emergency, please call immediately.",
          sender: "doctor",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, doctorResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/doctors")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Doctors
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Doctor Profile */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="text-center mb-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/20"
                  />
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    Dr. {doctor.name}
                  </h1>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {doctor.specialty}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-foreground">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({doctor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Experience</p>
                      <p className="text-muted-foreground">{doctor.experience} years</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">{doctor.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Languages className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Languages</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {doctor.languages.map((lang) => (
                          <Badge key={lang} variant="secondary" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <IndianRupee className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Consultation Fee</p>
                      <p className="text-muted-foreground">₹{doctor.consultationFee}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {doctor.availability}
                    </Badge>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="h-[calc(100vh-12rem)] flex flex-col">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <div>
                      <h2 className="text-lg font-bold text-foreground">
                        Chat with Dr. {doctor.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Ask about availability, services, or any health concerns
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user"
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-6 border-t border-border">
                  <div className="flex gap-3">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 h-12 text-[12px]"
                    />
                    <Button onClick={handleSendMessage} size="lg" className="px-6">
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorProfilePage;

import { useState } from "react";
import { X, Send, MapPin, Calendar, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Doctor } from "./DoctorCard";
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  sender: "user" | "doctor";
  timestamp: Date;
}

interface ChatInterfaceProps {
  doctor: Doctor;
  onClose: () => void;
}

const ChatInterface = ({ doctor, onClose }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hello! I'm Dr. ${doctor.name}. How can I help you today?`,
      sender: "doctor",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

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
          text: "Thank you for your message. I'll review your concern and get back to you shortly.",
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

  const handleShareLocation = () => {
    toast.success("Location sharing requested");
  };

  const handleSchedule = () => {
    toast.success("Opening appointment scheduler");
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col animate-scale-in">
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-background">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Dr. {doctor.name}</h3>
                <p className="text-sm opacity-90">{doctor.specialty}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-background/20 transition-colors text-black"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
        </CardContent>

        {/* Quick Actions */}
        <div className="flex gap-2 px-4 py-2 border-t border-border bg-muted/30">
          <Button
            variant="outline"
            size="sm"
            onClick={handleShareLocation}
            className="flex-1"
          >
            <MapPin className="w-4 h-4 mr-1" />
            Share Location
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSchedule}
            className="flex-1"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Schedule Visit
          </Button>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border flex-shrink-0">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} variant="default" size="icon" className="flex-shrink-0">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatInterface;

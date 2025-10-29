import { X, Star, Award, MapPin, Clock, MessageCircle, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Doctor } from "./DoctorCard";

interface DoctorDetailProps {
  doctor: Doctor;
  onClose: () => void;
  onOpenChat: (doctor: Doctor) => void;
}

const DoctorDetail = ({ doctor, onClose, onOpenChat }: DoctorDetailProps) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <CardContent className="p-0">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary to-primary-glow p-8 text-primary-foreground">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-background flex-shrink-0 ring-4 ring-primary-foreground/20">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Dr. {doctor.name}</h2>
                <p className="text-lg opacity-90 mb-3">{doctor.specialty}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{doctor.rating}</span>
                    <span className="opacity-80">({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-5 h-5" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 space-y-6">
            {/* Quick Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-foreground">{doctor.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Availability</p>
                  <p className="text-foreground font-medium">{doctor.availability}</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Languages</h3>
              <div className="flex gap-2 flex-wrap">
                {doctor.languages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-sm px-4 py-1">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. {doctor.name} is a highly experienced {doctor.specialty.toLowerCase()} with {doctor.experience} years
                of practice. Specializing in providing quality home healthcare services, ensuring patients receive
                professional medical care in the comfort of their homes.
              </p>
            </div>

            {/* Consultation Fee */}
            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Consultation Fee (Home Visit)</p>
                  <p className="text-3xl font-bold text-foreground">₹{doctor.consultationFee}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">Includes</p>
                  <p className="text-sm font-medium text-foreground">Travel charges & Basic checkup</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 flex-col sm:flex-row">
              <Button
                onClick={() => onOpenChat(doctor)}
                variant="default"
                size="lg"
                className="flex-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Doctor
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Emergency? Call 24/7 helpline: 1800-XXX-XXXX</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDetail;

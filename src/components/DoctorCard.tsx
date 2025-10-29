import { Star, MapPin, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  location: string;
  availability: string;
  image: string;
  languages: string[];
  consultationFee: number;
}

interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile: (doctor: Doctor) => void;
}

const DoctorCard = ({ doctor, onViewProfile }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary/50">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Doctor Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary-glow flex-shrink-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground mb-1 truncate">
              Dr. {doctor.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{doctor.specialty}</p>

            {/* Rating & Experience */}
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
                <span className="text-xs text-muted-foreground">({doctor.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Award className="w-4 h-4" />
                <span className="text-xs">{doctor.experience} years exp</span>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="flex items-start gap-2 mb-2">
              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <span className="text-xs text-muted-foreground">{doctor.location}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs font-medium text-primary">{doctor.availability}</span>
            </div>

            {/* Languages */}
            <div className="flex gap-2 flex-wrap">
              {doctor.languages.map((lang) => (
                <Badge key={lang} variant="secondary" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-muted/30 p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Consultation Fee</p>
          <p className="text-lg font-bold text-foreground">₹{doctor.consultationFee}</p>
        </div>
        <Button onClick={() => onViewProfile(doctor)} variant="default">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;

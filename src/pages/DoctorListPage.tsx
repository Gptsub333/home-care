import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import DoctorList from "@/components/DoctorList";
import Footer from "@/components/Footer";
import { Doctor } from "@/components/DoctorCard";
import { useNavigate } from "react-router-dom";

// Mock doctor data
const mockDoctors: Doctor[] = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

const locationMapping: { [key: string]: string } = {
  andheri: "Andheri West, Mumbai",
  bandra: "Bandra East, Mumbai",
  powai: "Powai, Mumbai",
  juhu: "Juhu, Mumbai",
  worli: "Worli, Mumbai",
  colaba: "Colaba, Mumbai",
};

const specialtyMapping: { [key: string]: string } = {
  general: "General Physician",
  cardiologist: "Cardiologist",
  pediatrician: "Pediatrician",
  orthopedic: "Orthopedic",
  dermatologist: "Dermatologist",
  ent: "ENT Specialist",
};

const DoctorListPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(mockDoctors);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const location = searchParams.get("location") || "";
    const specialty = searchParams.get("specialty") || "";

    setSearchQuery(query);

    let filtered = [...mockDoctors];

    // Filter by query (service or doctor name)
    if (query.trim()) {
      const searchLower = query.toLowerCase();
      
      const serviceMapping: { [key: string]: string[] } = {
        "general physician": ["fever", "cold", "cough", "general checkup", "health checkup", "routine checkup", "body checkup", "medical checkup"],
        "cardiologist": ["heart", "bp", "blood pressure", "chest pain", "heart checkup", "ecg", "cardiac"],
        "pediatrician": ["child", "baby", "kid", "vaccination", "child checkup", "pediatric", "infant"],
        "orthopedic": ["bone", "fracture", "joint", "knee", "back pain", "spine", "ortho"],
        "dermatologist": ["skin", "acne", "rash", "hair", "derma", "skin problem", "allergy"],
        "ent specialist": ["ear", "nose", "throat", "ent", "hearing", "sinus", "tonsil"]
      };

      filtered = filtered.filter((doctor) => {
        if (doctor.name.toLowerCase().includes(searchLower) || 
            doctor.specialty.toLowerCase().includes(searchLower)) {
          return true;
        }

        const specialtyLower = doctor.specialty.toLowerCase();
        for (const [specialty, services] of Object.entries(serviceMapping)) {
          if (specialtyLower.includes(specialty)) {
            if (services.some(service => searchLower.includes(service) || service.includes(searchLower))) {
              return true;
            }
          }
        }

        return false;
      });
    }

    // Filter by location
    if (location) {
      const locationName = locationMapping[location];
      if (locationName) {
        filtered = filtered.filter(doctor => doctor.location === locationName);
      }
    }

    // Filter by specialty
    if (specialty) {
      const specialtyName = specialtyMapping[specialty];
      if (specialtyName) {
        filtered = filtered.filter(doctor => doctor.specialty === specialtyName);
      }
    }

    setFilteredDoctors(filtered);
  }, [searchParams]);

  const handleViewProfile = (doctor: Doctor) => {
    navigate(`/doctors/${doctor.id}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <DoctorList
          doctors={filteredDoctors}
          searchQuery={searchQuery}
          onViewProfile={handleViewProfile}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DoctorListPage;

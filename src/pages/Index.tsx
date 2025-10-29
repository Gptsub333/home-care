import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorList from "@/components/DoctorList";
import DoctorDetail from "@/components/DoctorDetail";
import ChatInterface from "@/components/ChatInterface";
import About from "@/components/About";
import Services from "@/components/Services";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Doctor } from "@/components/DoctorCard";

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

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [chatDoctor, setChatDoctor] = useState<Doctor | null>(null);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [showDoctors, setShowDoctors] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowDoctors(true);

    if (query.trim()) {
      const filtered = mockDoctors.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(query.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(mockDoctors);
    }

    // Scroll to doctors section
    setTimeout(() => {
      const element = document.getElementById("doctors");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleViewProfile = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseDetail = () => {
    setSelectedDoctor(null);
  };

  const handleOpenChat = (doctor: Doctor) => {
    setChatDoctor(doctor);
    setSelectedDoctor(null);
  };

  const handleCloseChat = () => {
    setChatDoctor(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero onSearch={handleSearch} />
      {showDoctors && (
        <div id="doctors">
          <DoctorList
            doctors={filteredDoctors}
            searchQuery={searchQuery}
            onViewProfile={handleViewProfile}
          />
        </div>
      )}
      <About />
      <Services />
      {/* <Contact /> */}
      <Footer />

      {/* Modals */}
      {selectedDoctor && (
        <DoctorDetail
          doctor={selectedDoctor}
          onClose={handleCloseDetail}
          onOpenChat={handleOpenChat}
        />
      )}
      {chatDoctor && <ChatInterface doctor={chatDoctor} onClose={handleCloseChat} />}
    </div>
  );
};

export default Index;

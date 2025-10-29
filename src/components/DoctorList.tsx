import { Search } from "lucide-react";
import DoctorCard, { Doctor } from "./DoctorCard";

interface DoctorListProps {
  doctors: Doctor[];
  searchQuery: string;
  onViewProfile: (doctor: Doctor) => void;
}

const DoctorList = ({ doctors, searchQuery, onViewProfile }: DoctorListProps) => {
  if (doctors.length === 0) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-md mx-auto">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No doctors found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or browse all available doctors
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2">
            {searchQuery ? `Results for "${searchQuery}"` : "Available Doctors"}
          </h2>
          <p className="text-muted-foreground text-md">
            {doctors.length} doctor{doctors.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onViewProfile={onViewProfile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorList;

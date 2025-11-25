import React, { useState, useMemo } from "react";
import { AlumniFilter } from "./AlumniFilter";
import { AlumniTable } from "./AlumniInfoTable";
import { alumniDummyData } from "../../data/AlumniData";

interface Alumni {
  studentId: string;
  name: string;
  profilePic: string;
  jobTypes: string;
  position: string;
  Institute: string;
  location: string;
}

const AlumniPage: React.FC = () => {
  // State management
  const [filters, setFilters] = useState({
    jobType: "",
    position: "",
    location: "",
    searchTerm: "",
  });

  // Filter data based on all criteria
  const filteredData = useMemo(() => {
    return (alumniDummyData as Alumni[]).filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        user.studentId.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesJobType =
        !filters.jobType || user.jobTypes === filters.jobType;
      const matchesPosition =
        !filters.position || user.position === filters.position;
      const matchesLocation =
        !filters.location || user.location === filters.location;

      return (
        matchesSearch && matchesJobType && matchesPosition && matchesLocation
      );
    });
  }, [filters]);

  // Check if any filters are active
  const isFiltered =
    filters.jobType ||
    filters.position ||
    filters.location ||
    filters.searchTerm;

  // Handle clearing all filters
  const handleClearFilters = () => {
    setFilters({
      jobType: "",
      position: "",
      location: "",
      searchTerm: "",
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Alumni Directory</h1>
        <p className="text-gray-600 mt-2">
          Connect with {filteredData.length} alumni members
        </p>
      </div>

      {/* Filter Component */}
      <AlumniFilter
        searchTerm={filters.searchTerm}
        onSearchChange={(value) =>
          setFilters({ ...filters, searchTerm: value })
        }
        jobType={filters.jobType}
        onJobTypeChange={(value) => setFilters({ ...filters, jobType: value })}
        position={filters.position}
        onPositionChange={(value) =>
          setFilters({ ...filters, position: value })
        }
        location={filters.location}
        onLocationChange={(value) =>
          setFilters({ ...filters, location: value })
        }
        isFiltered={!!isFiltered}
        onClearFilters={handleClearFilters}
      />

      {/* Table Component with integrated pagination */}
      <AlumniTable data={filteredData} itemsPerPage={10} />
    </div>
  );
};

export default AlumniPage;

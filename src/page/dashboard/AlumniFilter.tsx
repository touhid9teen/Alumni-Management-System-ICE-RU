// ===== 1. FILTER COMPONENT =====
import React from "react";
import { Search, X } from "lucide-react";
import Select, { CSSObjectWithLabel, SingleValue } from "react-select";

interface FilterOption {
  value: string;
  label: string;
}

interface AlumniFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  jobType: string;
  onJobTypeChange: (value: string) => void;
  position: string;
  onPositionChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  isFiltered: boolean;
  onClearFilters: () => void;
}

const jobTypeOptions: FilterOption[] = [
  { value: "Private", label: "Private" },
  { value: "Government", label: "Government" },
  { value: "Freelance", label: "Freelance" },
  { value: "Startup", label: "Startup" },
];

const positionOptions: FilterOption[] = [
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Data Analyst", label: "Data Analyst" },
  { value: "Web Developer", label: "Web Developer" },
  { value: "Project Manager", label: "Project Manager" },
  { value: "CTO", label: "CTO" },
];

const locationOptions: FilterOption[] = [
  { value: "Dhaka, Bangladesh", label: "Dhaka, Bangladesh" },
  { value: "New York, USA", label: "New York, USA" },
  { value: "London, UK", label: "London, UK" },
  { value: "Toronto, Canada", label: "Toronto, Canada" },
  { value: "San Francisco, USA", label: "San Francisco, USA" },
];

export const AlumniFilter: React.FC<AlumniFilterProps> = ({
  searchTerm,
  onSearchChange,
  jobType,
  onJobTypeChange,
  position,
  onPositionChange,
  location,
  onLocationChange,
  isFiltered,
  onClearFilters,
}) => {
  const handleSelectChange = (
    selectedOption: SingleValue<FilterOption>,
    filterName: string
  ) => {
    const value = selectedOption ? selectedOption.value : "";
    if (filterName === "jobType") onJobTypeChange(value);
    if (filterName === "position") onPositionChange(value);
    if (filterName === "location") onLocationChange(value);
  };

  const selectStyles = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      borderColor: "#d1d5db",
      boxShadow: "none",
      "&:hover": { borderColor: "#3b82f6" },
    }),
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Filter Alumni</h2>

      {/* Search Bar */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search by Name or ID
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Enter name or student ID..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Type
          </label>
          <Select
            options={jobTypeOptions}
            onChange={(option) => handleSelectChange(option, "jobType")}
            placeholder="All Job Types"
            isClearable
            isSearchable
            styles={selectStyles}
            value={
              jobType
                ? jobTypeOptions.find((opt) => opt.value === jobType)
                : null
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Position
          </label>
          <Select
            options={positionOptions}
            onChange={(option) => handleSelectChange(option, "position")}
            placeholder="All Positions"
            isClearable
            isSearchable
            styles={selectStyles}
            value={
              position
                ? positionOptions.find((opt) => opt.value === position)
                : null
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <Select
            options={locationOptions}
            onChange={(option) => handleSelectChange(option, "location")}
            placeholder="All Locations"
            isClearable
            isSearchable
            styles={selectStyles}
            value={
              location
                ? locationOptions.find((opt) => opt.value === location)
                : null
            }
          />
        </div>
      </div>

      {/* Clear Filters Button */}
      {isFiltered && (
        <div className="flex justify-end">
          <button
            onClick={onClearFilters}
            className="px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors text-sm"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

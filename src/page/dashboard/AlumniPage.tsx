import React, { useState, useMemo, FC } from "react";
import { Search, X, ChevronDown } from "lucide-react";
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

interface FilterState {
  jobType: string;
  position: string;
  location: string;
  searchTerm: string;
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

interface AlumniFilterProps {
  jobType: string;
  onJobTypeChange: (value: string) => void;
  position: string;
  onPositionChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
}

const jobTypeOptions = [
  "Private",
  "Startup",
  "Government",
  "Freelance",
  "Consulting",
  "Education",
  "Healthcare",
  "Tech",
  "Finance",
  "Marketing",
  "Real Estate",
  "Sports",
  "Non-Profit",
  "HR",
  "Arts",
  "Business",
  "Health",
];

const positionOptions = [
  "Software Engineer",
  "Web Developer",
  "Data Analyst",
  "Project Manager",
  "CTO",
  "Business Analyst",
  "Professor",
  "Doctor",
  "Cybersecurity Analyst",
  "Financial Analyst",
  "Digital Marketing Specialist",
  "Real Estate Agent",
  "Sports Coach",
  "Program Coordinator",
  "Mobile Developer",
  "HR Manager",
  "Graphic Designer",
  "Teacher",
  "Nurse Practitioner",
  "Accountant",
  "Librarian",
  "Athletic Trainer",
  "Physical Therapist",
];

const locationOptions = [
  "Dhaka, Bangladesh",
  "New York, USA",
  "London, UK",
  "Toronto, Canada",
  "San Francisco, USA",
  "Sydney, Australia",
  "Chicago, USA",
  "Paris, France",
  "Berlin, Germany",
  "Miami, USA",
  "Los Angeles, USA",
  "Seattle, USA",
  "Boston, USA",
  "Austin, USA",
  "San Diego, USA",
  "Philadelphia, USA",
  "Denver, USA",
  "Houston, USA",
  "Phoenix, USA",
];

export const FilterSelect: FC<FilterSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="flex-1 min-w-0">
      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3.5 py-2.5 pr-9 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm text-gray-700 hover:border-gray-300 transition appearance-none cursor-pointer font-medium"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-3 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
};

export const AlumniFilter: FC<AlumniFilterProps> = ({
  jobType,
  onJobTypeChange,
  position,
  onPositionChange,
  location,
  onLocationChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 flex-1">
      <FilterSelect
        label="Job Type"
        value={jobType}
        onChange={onJobTypeChange}
        options={jobTypeOptions}
        placeholder="All Job Types"
      />

      <FilterSelect
        label="Position"
        value={position}
        onChange={onPositionChange}
        options={positionOptions}
        placeholder="All Positions"
      />

      <FilterSelect
        label="Location"
        value={location}
        onChange={onLocationChange}
        options={locationOptions}
        placeholder="All Locations"
      />
    </div>
  );
};

interface AlumniTableProps {
  data: Alumni[];
  itemsPerPage: number;
}

export const AlumniTable: FC<AlumniTableProps> = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Student ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Position
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Job Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Location
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                Institute
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayedData.length > 0 ? (
              displayedData.map((alumni, index) => (
                <tr
                  key={alumni.studentId}
                  className="hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={alumni.profilePic}
                        alt={alumni.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                      />
                      <span className="text-sm font-semibold text-gray-900">
                        {alumni.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {alumni.studentId}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {alumni.position}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      {alumni.jobTypes}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {alumni.location}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {alumni.Institute}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  No alumni found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const AlumniPage: FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    jobType: "",
    position: "",
    location: "",
    searchTerm: "",
  });

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

  const isFiltered =
    filters.jobType ||
    filters.position ||
    filters.location ||
    filters.searchTerm;

  const handleClearFilters = (): void => {
    setFilters({
      jobType: "",
      position: "",
      location: "",
      searchTerm: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Alumni Directory</h1>
          <p className="text-blue-100 text-sm mt-1">
            Connect with {filteredData.length} alumni members
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-blue-100">
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or student ID..."
                value={filters.searchTerm}
                onChange={(e) =>
                  setFilters({ ...filters, searchTerm: e.target.value })
                }
                className="w-full px-5 py-2.5 pl-11 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm text-gray-700 placeholder-gray-400 shadow-sm hover:border-gray-300 transition"
              />
              <Search
                className="absolute left-3.5 top-2.5 text-blue-600"
                size={18}
              />
              {filters.searchTerm && (
                <button
                  onClick={() => setFilters({ ...filters, searchTerm: "" })}
                  className="absolute right-3.5 top-2.5 text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
            <AlumniFilter
              jobType={filters.jobType}
              onJobTypeChange={(value) =>
                setFilters({ ...filters, jobType: value })
              }
              position={filters.position}
              onPositionChange={(value) =>
                setFilters({ ...filters, position: value })
              }
              location={filters.location}
              onLocationChange={(value) =>
                setFilters({ ...filters, location: value })
              }
            />

            {isFiltered && (
              <button
                onClick={handleClearFilters}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 font-medium text-sm rounded-lg hover:bg-red-100 transition whitespace-nowrap border border-red-200"
              >
                <X size={16} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {isFiltered && (
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredData.length}
            </span>{" "}
            results
          </div>
        )}

        <AlumniTable data={filteredData} itemsPerPage={10} />
      </main>
    </div>
  );
};

export default AlumniPage;

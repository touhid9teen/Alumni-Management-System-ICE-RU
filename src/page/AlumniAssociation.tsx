import { useState, useEffect } from "react";
import { getFromStorage } from "../utils/token";
import { LOCAL_STORAGE_KEYS } from "../constants/Global";
import { toast } from "react-toastify";
import CommitteeMembers from "../components/AlumniAssocation/CommitteeMember";
import committeeMembers from "../data/Committeedummydata";
import Loader from "../components/Loader";
import { Users, Plus, Award, Search, Filter, Briefcase } from "lucide-react";

interface CommitteeMember {
  id: number | string;
  image: string;
  role: string;
  name: string;
  designation: string;
}

const AlumniAssociation: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const token = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // API call will be made here
        // const url = getBaseUrl() + "/executive-committee/list";
        // const response = await axios.get(url, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
      } catch {
        const error_message = "Something went wrong !";
        toast.error(error_message, {
          autoClose: 3000,
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [token]);

  const role = getFromStorage(LOCAL_STORAGE_KEYS.AUTH_ROLE);

  // Get unique roles for filter
  const uniqueRoles = [
    "All",
    ...new Set(committeeMembers.map((m: CommitteeMember) => m.role)),
  ];

  // Filter members based on search and role
  const filteredMembers = committeeMembers.filter((member: CommitteeMember) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner Header */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-3">Executive Committee</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            ICE Alumni Association - Meet Our Leadership Team
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Total Members
              </h3>
            </div>
            <p className="text-4xl font-bold text-blue-900">
              {committeeMembers.length}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Active Committee Members
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Departments
              </h3>
            </div>
            <p className="text-4xl font-bold text-blue-900">
              {uniqueRoles.length - 1}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Different Leadership Areas
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Experience
              </h3>
            </div>
            <p className="text-4xl font-bold text-blue-900">25+</p>
            <p className="text-sm text-gray-600 mt-2">
              Years Combined Experience
            </p>
          </div>
        </section>

        {/* Header Section with Add Button */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                  Our Leadership Team
                </h2>
                <p className="text-blue-700">
                  Dedicated professionals driving our mission forward
                </p>
              </div>
              {role && role === "admin" && (
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition font-semibold whitespace-nowrap">
                  <Plus size={20} /> Add Member
                </button>
              )}
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-3.5 text-blue-600"
                />
                <input
                  type="text"
                  placeholder="Search by name or designation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-2 border-blue-300 px-10 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div className="relative">
                <Filter
                  size={20}
                  className="absolute left-3 top-3.5 text-blue-600"
                />
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full border-2 border-blue-300 px-10 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition appearance-none bg-white"
                >
                  {uniqueRoles.map((role) => (
                    <option key={role} value={role}>
                      {role === "All" ? "All Departments" : role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Showing{" "}
              <span className="font-semibold text-blue-600">
                {filteredMembers.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-blue-600">
                {committeeMembers.length}
              </span>{" "}
              members
            </p>
          </div>
        </section>

        {/* Committee Members Grid */}
        <section>
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMembers.map((member: CommitteeMember) => (
                <CommitteeMembers
                  key={Number(member.id)}
                  id={Number(member.id)}
                  image={member.image}
                  role={member.role}
                  name={member.name}
                  designation={member.designation}
                />
              ))}
            </div>
          ) : (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-12 text-center">
              <Users size={48} className="mx-auto text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                No Members Found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AlumniAssociation;

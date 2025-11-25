// ===== 3. TABLE COMPONENT =====
import { useNavigate } from "react-router";
import AvatarWithDescription from "../../components/AvatarWithDescription";
import React from "react";
import { Pagination } from "./Pagination";

interface Alumni {
  studentId: string;
  name: string;
  profilePic: string;
  jobTypes: string;
  position: string;
  Institute: string;
  location: string;
}

interface AlumniTableProps {
  data: Alumni[];
  isLoading?: boolean;
  itemsPerPage?: number;
  onRowClick?: (studentId: string) => void;
}

export const AlumniTable: React.FC<AlumniTableProps> = ({
  data = [],
  isLoading = false,
  itemsPerPage = 10,
  onRowClick,
}) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);

  const tableData = Array.isArray(data) ? data : [];

  const totalItems = tableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = tableData.slice(startIndex, endIndex);

  // Reset to first page when data changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [tableData.length]);

  const handleRowClick = (studentId: string) => {
    if (onRowClick) {
      onRowClick(studentId);
    } else {
      navigate(`/dashboard/profile/${studentId}`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Job Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">
                Institute
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden lg:table-cell">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="px-6 py-12">
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                </td>
              </tr>
            ) : tableData.length > 0 ? (
              paginatedData.map((user) => (
                <tr
                  key={user.studentId}
                  onClick={() => handleRowClick(user.studentId)}
                  className="hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <AvatarWithDescription
                      avatar={user.profilePic}
                      title={user.name}
                      onClick={() => handleRowClick(user.studentId)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {user.jobTypes}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {user.position}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 hidden sm:table-cell">
                    {user.Institute}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 hidden lg:table-cell">
                    {user.location}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="text-gray-500">
                    <p className="text-lg font-medium">No alumni found</p>
                    <p className="text-sm mt-1">
                      Try adjusting your filters or search term
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-6 py-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            variant="default"
          />
        </div>
      )}
    </div>
  );
};

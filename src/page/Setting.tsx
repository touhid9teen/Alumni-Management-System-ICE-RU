import React, { useState, FC } from "react";
import {
  User,
  Mail,
  Lock,
  Trash2,
  Camera,
  Save,
  X,
  Eye,
  EyeOff,
  ChevronRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  position: string;
  company: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const AlumniSettingsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [profileImage, setProfileImage] = useState<string>(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  );
  const [formData, setFormData] = useState<FormData>({
    firstName: "Ahmed",
    lastName: "Hassan",
    email: "ahmed.hassan@email.com",
    phone: "+880 1788 888 222",
    bio: "Software Engineer | Tech Enthusiast | ICE Alumni",
    position: "Senior Software Engineer",
    company: "Tech Solutions Ltd.",
  });

  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState<{
    current: boolean;
    new: boolean;
    confirm: boolean;
  }>({
    current: false,
    new: false,
    confirm: false,
  });

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deletePassword, setDeletePassword] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        showSuccess("Profile photo updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      showError("Please fill in all required fields");
      return;
    }
    showSuccess("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      showError("Please fill in all password fields");
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showError("New passwords do not match");
      return;
    }
    if (passwordData.newPassword.length < 8) {
      showError("New password must be at least 8 characters long");
      return;
    }
    showSuccess("Password changed successfully!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleDeleteAccount = () => {
    if (!deletePassword) {
      showError("Please enter your password to confirm account deletion");
      return;
    }
    showSuccess("Account deletion initiated. You will be logged out shortly.");
    setTimeout(() => {
      setShowDeleteModal(false);
      setDeletePassword("");
    }, 2000);
  };

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const showError = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 sticky top-0 z-30 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-blue-100 text-sm mt-1">
            Manage your account and preferences
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="text-green-600" size={20} />
            <p className="text-green-800 font-medium">{successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle className="text-red-600" size={20} />
            <p className="text-red-800 font-medium">{errorMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
              {[
                { id: "profile", label: "Profile", icon: <User size={20} /> },
                {
                  id: "email",
                  label: "Email & Password",
                  icon: <Lock size={20} />,
                },
                {
                  id: "security",
                  label: "Security",
                  icon: <AlertCircle size={20} />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 border-l-4 transition ${
                    activeTab === tab.id
                      ? "bg-blue-50 border-l-blue-600 text-blue-600"
                      : "border-l-transparent text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                  {activeTab === tab.id && (
                    <ChevronRight className="ml-auto" size={18} />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <User className="text-blue-600" size={24} />
                    Profile Information
                  </h2>

                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="relative">
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                        />
                        <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition shadow-lg">
                          <Camera size={20} />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Profile Photo
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          JPG, PNG or GIF. Max size 5MB
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Position
                          </label>
                          <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleFormChange}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                        />
                      </div>

                      <button
                        onClick={handleSaveProfile}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
                      >
                        <Save size={20} />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "email" && (
              <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <Mail className="text-blue-600" size={24} />
                    Email & Password
                  </h2>

                  <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Change Email
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Current Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            disabled
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            New Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter new email address"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                          />
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md">
                          <Save size={20} />
                          Update Email
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Change Password
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Current Password *
                          </label>
                          <div className="relative">
                            <input
                              type={showPasswords.current ? "text" : "password"}
                              name="currentPassword"
                              value={passwordData.currentPassword}
                              onChange={handlePasswordChange}
                              placeholder="Enter current password"
                              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            />
                            <button
                              onClick={() =>
                                setShowPasswords((prev) => ({
                                  ...prev,
                                  current: !prev.current,
                                }))
                              }
                              className="absolute right-4 top-3.5 text-gray-600 hover:text-gray-900"
                            >
                              {showPasswords.current ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            New Password *
                          </label>
                          <div className="relative">
                            <input
                              type={showPasswords.new ? "text" : "password"}
                              name="newPassword"
                              value={passwordData.newPassword}
                              onChange={handlePasswordChange}
                              placeholder="Enter new password (min 8 characters)"
                              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            />
                            <button
                              onClick={() =>
                                setShowPasswords((prev) => ({
                                  ...prev,
                                  new: !prev.new,
                                }))
                              }
                              className="absolute right-4 top-3.5 text-gray-600 hover:text-gray-900"
                            >
                              {showPasswords.new ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Confirm New Password *
                          </label>
                          <div className="relative">
                            <input
                              type={showPasswords.confirm ? "text" : "password"}
                              name="confirmPassword"
                              value={passwordData.confirmPassword}
                              onChange={handlePasswordChange}
                              placeholder="Confirm new password"
                              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            />
                            <button
                              onClick={() =>
                                setShowPasswords((prev) => ({
                                  ...prev,
                                  confirm: !prev.confirm,
                                }))
                              }
                              className="absolute right-4 top-3.5 text-gray-600 hover:text-gray-900"
                            >
                              {showPasswords.confirm ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={handleChangePassword}
                          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
                        >
                          <Lock size={20} />
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <AlertCircle className="text-blue-600" size={24} />
                    Security & Account
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-blue-800 mb-4">
                        Enhance your account security with two-factor
                        authentication
                      </p>
                      <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                        Enable 2FA
                      </button>
                    </div>

                    <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-lg">
                      <h3 className="text-lg font-semibold text-amber-900 mb-2">
                        Active Sessions
                      </h3>
                      <p className="text-amber-800 mb-4">
                        Manage your active sessions and log out from other
                        devices
                      </p>
                      <button className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition">
                        View Sessions
                      </button>
                    </div>

                    <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg">
                      <h3 className="text-lg font-semibold text-red-900 mb-2">
                        Delete Account
                      </h3>
                      <p className="text-red-800 mb-4">
                        Permanently delete your account and all associated data.
                        This action cannot be undone.
                      </p>
                      <button
                        onClick={() => setShowDeleteModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition shadow-md"
                      >
                        <Trash2 size={20} />
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Delete Account
                </h2>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-red-900">Warning!</p>
                  <p className="text-sm text-red-800 mt-1">
                    This action is permanent and cannot be undone. All your data
                    will be deleted.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter your password to confirm deletion
                </label>
                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-6 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="flex-1 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniSettingsPage;

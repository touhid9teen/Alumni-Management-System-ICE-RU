import { useState } from "react";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const notificationCount = 5;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <div className="flex items-center justify-between px-6 lg:px-8 py-4 gap-6">
        {/* Logo/Brand */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span className="font-semibold text-xl text-gray-900 hidden sm:block">Dashboard</span>
          </div>

          {/* Search - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search projects, files, or people..."
                className="w-96 px-4 py-2.5 pl-11 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent text-sm transition-all"
              />
              <svg
                className="absolute left-4 top-3 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <kbd className="absolute right-3 top-2.5 px-2 py-0.5 text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Mobile Search Modal */}
        {showSearch && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 p-6">
            <div className="flex items-center gap-4 mb-6">
              <button 
                onClick={() => setShowSearch(false)} 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <input
                type="search"
                placeholder="Search..."
                autoFocus
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Button */}
          <button
            onClick={() => setShowSearch(true)}
            className="lg:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>

          {/* Quick Actions */}
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-sm font-medium text-gray-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            New
          </button>

          {/* Notification */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Notifications"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold ring-2 ring-white">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-40">
                  <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-gray-900">Notifications</h3>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-[28rem] overflow-y-auto">
                    {[
                      { type: 'success', title: 'Project deployed successfully', time: '5 minutes ago', icon: '✓' },
                      { type: 'info', title: 'New team member joined', time: '1 hour ago', icon: '👤' },
                      { type: 'warning', title: 'Storage limit reached 80%', time: '2 hours ago', icon: '⚠' },
                      { type: 'info', title: 'Monthly report is ready', time: '5 hours ago', icon: '📊' },
                      { type: 'success', title: 'Code review approved', time: '1 day ago', icon: '✓' }
                    ].map((notification, i) => (
                      <div
                        key={i}
                        className="p-4 hover:bg-gray-50 border-b border-gray-50 cursor-pointer transition-colors flex items-start gap-4"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          notification.type === 'success' ? 'bg-green-100 text-green-600' :
                          notification.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          <span className="text-lg">{notification.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-100 text-center">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-gray-200 mx-1" />

          {/* Avatar with Dropdown */}
          <button className="flex items-center gap-3 pl-2 pr-3 py-2 hover:bg-gray-100 rounded-xl transition-colors">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 ring-2 ring-white shadow-sm">
              JD
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-semibold text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">john@company.com</div>
            </div>
            <svg className="hidden md:block w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
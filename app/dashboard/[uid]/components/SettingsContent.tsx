const SettingsContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
        <h2 className="text-2xl font-semibold text-white mb-6">Settings</h2>

        <div className="space-y-6">
          {/* General Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">General</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Dark Mode</h4>
                  <p className="text-gray-400 text-sm">
                    Toggle dark/light theme
                  </p>
                </div>
                <div className="bg-cyan-500 w-12 h-6 rounded-full flex items-center justify-end px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Sound Effects</h4>
                  <p className="text-gray-400 text-sm">
                    Enable notification sounds
                  </p>
                </div>
                <div className="bg-gray-600 w-12 h-6 rounded-full flex items-center justify-start px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Privacy</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Show Online Status</h4>
                  <p className="text-gray-400 text-sm">
                    Let others see when you're online
                  </p>
                </div>
                <div className="bg-cyan-500 w-12 h-6 rounded-full flex items-center justify-end px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Anonymous Mode</h4>
                  <p className="text-gray-400 text-sm">
                    Hide your identity by default
                  </p>
                </div>
                <div className="bg-gray-600 w-12 h-6 rounded-full flex items-center justify-start px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">New Messages</h4>
                  <p className="text-gray-400 text-sm">
                    Get notified of new messages
                  </p>
                </div>
                <div className="bg-cyan-500 w-12 h-6 rounded-full flex items-center justify-end px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Room Invitations</h4>
                  <p className="text-gray-400 text-sm">
                    Notify when invited to rooms
                  </p>
                </div>
                <div className="bg-cyan-500 w-12 h-6 rounded-full flex items-center justify-end px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">System Updates</h4>
                  <p className="text-gray-400 text-sm">
                    Get notified of app updates
                  </p>
                </div>
                <div className="bg-gray-600 w-12 h-6 rounded-full flex items-center justify-start px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Management */}
      <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
        <h3 className="text-lg font-semibold text-white mb-4">
          Account Management
        </h3>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left">
            Change Password
          </button>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left">
            Export Data
          </button>
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left">
            Deactivate Account
          </button>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;

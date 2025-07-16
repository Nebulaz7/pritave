interface ProfileContentProps {
  user: any;
}

const ProfileContent = ({ user }: ProfileContentProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Profile Information
        </h2>

        <div className="flex items-center space-x-6 mb-6">
          {user?.user_metadata?.avatar_url && (
            <img
              src={user.user_metadata.avatar_url}
              alt="Profile"
              className="w-20 h-20 rounded-full ring-4 ring-cyan-500/30"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold text-white">
              {user?.user_metadata?.full_name || "User"}
            </h3>
            <p className="text-gray-400">{user?.email}</p>
            <p className="text-cyan-400 text-sm mt-1">Verified Account</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Account Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">User ID:</span>
                <span className="text-white">{user?.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Created:</span>
                <span className="text-white">
                  {user?.created_at
                    ? new Date(user.created_at).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Login:</span>
                <span className="text-white">
                  {user?.last_sign_in_at
                    ? new Date(user.last_sign_in_at).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Preferences</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Dark Mode</span>
                <div className="bg-cyan-500 w-12 h-6 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Notifications</span>
                <div className="bg-cyan-500 w-12 h-6 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;

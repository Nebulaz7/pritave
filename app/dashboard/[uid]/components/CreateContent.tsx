const CreateContent = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Create New Chat Room
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">
                Room Name
              </label>
              <input
                type="text"
                placeholder="Enter room name..."
                className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Description
              </label>
              <textarea
                placeholder="Room description..."
                rows={3}
                className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Room Type
              </label>
              <select className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500">
                <option value="public">Public Room</option>
                <option value="private">Private Room</option>
                <option value="anonymous">Anonymous Room</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">
                Max Participants
              </label>
              <input
                type="number"
                placeholder="50"
                min="2"
                max="100"
                className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                placeholder="60"
                min="5"
                max="1440"
                className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-white font-medium">Options</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-cyan-500 bg-black/20 border-gray-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-gray-300">Content Filtering</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-cyan-500 bg-black/20 border-gray-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-gray-300">Auto-delete messages</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-cyan-500 bg-black/20 border-gray-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-gray-300">Allow file sharing</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200">
            Create Room
          </button>
          <button className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg transition-all duration-200">
            Cancel
          </button>
        </div>
      </div>

      <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
        <h3 className="text-lg font-semibold text-white mb-4">
          Quick Templates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 cursor-pointer transition-all">
            <h4 className="text-white font-medium mb-2">Study Group</h4>
            <p className="text-gray-400 text-sm">
              Perfect for collaborative learning
            </p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 cursor-pointer transition-all">
            <h4 className="text-white font-medium mb-2">Gaming Session</h4>
            <p className="text-gray-400 text-sm">Coordinate with your team</p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 cursor-pointer transition-all">
            <h4 className="text-white font-medium mb-2">Anonymous Chat</h4>
            <p className="text-gray-400 text-sm">
              Speak freely without identity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;

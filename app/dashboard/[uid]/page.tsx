"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { User } from "@supabase/supabase-js";

export default function UserDashboard() {
  const params = useParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const uid = params.uid as string;

  useEffect(() => {
    const checkUser = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          // User not authenticated, redirect to sign-in
          router.push("/signin");
          return;
        }

        if (session.user.id !== uid) {
          // User trying to access different user's dashboard
          router.push(`/dashboard/${session.user.id}`);
          return;
        }

        setUser(session.user);
        setLoading(false);
      } catch (error) {
        console.error("Error checking user:", error);
        router.push("/signin");
      }
    };

    checkUser();
  }, [uid, router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgb(25, 26, 31)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(25, 26, 31)]">
      {/* Header */}
      <header className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">
                Pritave Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {user?.user_metadata?.avatar_url && (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-white text-sm">
                  {user?.user_metadata?.full_name || user?.email}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
            <h2 className="text-xl font-semibold text-white mb-4">
              Welcome Back!
            </h2>
            <p className="text-gray-300">
              Hello{" "}
              {user?.user_metadata?.full_name || user?.email?.split("@")[0]}!
            </p>
            <p className="text-gray-400 text-sm mt-2">User ID: {uid}</p>
          </div>

          {/* Stats Card */}
          <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
            <h2 className="text-xl font-semibold text-white mb-4">
              Statistics
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Account Created:</span>
                <span className="text-cyan-400">
                  {user?.created_at
                    ? new Date(user.created_at).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Last Sign In:</span>
                <span className="text-cyan-400">
                  {user?.last_sign_in_at
                    ? new Date(user.last_sign_in_at).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
                New Chat
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl rounded-2xl p-6 border border-gray-600">
            <h2 className="text-xl font-semibold text-white mb-4">
              Recent Activity
            </h2>
            <div className="text-gray-400 text-center py-8">
              <p>
                No recent activity yet. Start using Pritave to see your activity
                here!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

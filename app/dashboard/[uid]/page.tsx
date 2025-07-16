"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { User } from "@supabase/supabase-js";
import Sidebar from "./components/sidebar";
import ProfileContent from "./components/ProfileContent";
import CreateContent from "./components/CreateContent";
import SettingsContent from "./components/SettingsContent";

export default function UserDashboard() {
  const params = useParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");
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

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileContent user={user} />;
      case "create":
        return <CreateContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <ProfileContent user={user} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgb(25, 26, 31)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#af1aff] mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(25, 26, 31)]">
      <Sidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content - Adjusted for sidebar */}
      <div className="lg:ml-64 pb-16 lg:pb-0">
        {/* Header - Only visible on desktop */}
        <header className="hidden lg:block bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl border-b border-gray-600">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white capitalize">
                  {activeTab}
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  Welcome back,{" "}
                  {user?.user_metadata?.full_name || user?.email?.split("@")[0]}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-lg border border-cyan-500/30">
                  <span className="text-cyan-300 text-sm font-medium">
                    Pro User
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden bg-[rgb(32, 33, 39)] bg-opacity-70 backdrop-blur-xl border-b border-gray-600">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-white capitalize">
                  {activeTab}
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                {user?.user_metadata?.avatar_url && (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="Profile"
                    className="w-8 h-8 rounded-full ring-2 ring-cyan-500/30"
                  />
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 lg:p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

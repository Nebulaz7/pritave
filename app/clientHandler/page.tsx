"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function ClientHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthRedirect = async () => {
      try {
        // Check if user is already authenticated
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          // User is already signed in, redirect to dashboard
          router.push(`/dashboard/${session.user.id}`);
          return;
        }

        // Listen for auth state changes
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange(async (event, session) => {
          if (event === "SIGNED_IN" && session?.user) {
            // User successfully signed in, redirect to dashboard
            router.push(`/dashboard/${session.user.id}`);
          } else if (event === "SIGNED_OUT") {
            // User signed out, redirect to home
            router.push("/");
          }
        });

        // Clean up subscription on unmount
        return () => subscription.unsubscribe();
      } catch (error) {
        console.error("Auth error:", error);
        router.push("/signin");
      }
    };

    handleAuthRedirect();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(25, 26, 31)]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#af1aff] mx-auto mb-4"></div>
        <p className="text-white text-lg">Checking authentication...</p>
      </div>
    </div>
  );
}

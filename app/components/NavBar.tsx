"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { User } from "@supabase/supabase-js";

const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="pb-2 sticky top-0 w-full shrink-0 bg-primary/50 backdrop-blur-xl z-30">
      <div className="flex justify-between items-center gap-5 w-full max-w-7xl px-2 md:px-6 h-[3.5rem] mx-auto">
        <div
          role="link"
          tabIndex={0}
          className="select-none cursor-pointer outline-0"
          onClick={() => router.push("/")}
        >
          <h1 className="text-[24px] ">
            Pritave{" "}
            <span className="text-sm text-white  p-[6px] border-solid border-[1.3px] border-white rounded-full">
              Beta
            </span>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {loading ? (
            <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          ) : user ? (
            <>
              <Link
                href={`/dashboard/${user.id}`}
                className="appearance-none cursor-pointer px-4 py-1 font-heading rounded-full text-sm bg-cyan-500/20 border border-cyan-500/40 hover:bg-cyan-500/30 focus-visible:bg-cyan-500/30 text-cyan-300 backdrop-blur-sm transition-all duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="appearance-none cursor-pointer px-4 py-1 font-heading rounded-full text-sm bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 focus-visible:bg-red-500/30 text-red-300 backdrop-blur-sm transition-all duration-200"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/signin"
              className="appearance-none cursor-pointer px-6 py-1 font-heading rounded-full text-sm bg-white/10 border border-white/20 hover:bg-white/20 focus-visible:bg-white/20 text-white backdrop-blur-sm transition-all duration-200"
            >
              Try now
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;

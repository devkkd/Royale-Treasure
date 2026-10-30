"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const SESSION_KEY = "rt_loaded";

export default function ClientWrapper({ children }) {
  // Show loader only if this is the first visit in this browser session
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    return !alreadySeen;
  });

  const handleComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setLoading(false);
  };

  return (
    <>
      {/* Loader — only on first visit per session */}
      {loading && <LoadingScreen onComplete={handleComplete} />}

      {/* Full site */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.7s ease",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

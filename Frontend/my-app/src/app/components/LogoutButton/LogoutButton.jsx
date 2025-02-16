"use client";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", { 
        method: "GET",
        credentials: "include", // Ensures cookies are sent
      });

      if (response.ok) {
        // Redirect to frontend (3001) after logout
        window.location.href = "http://localhost:3001";
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-sm text-white focus:ring-opacity-50 rounded-lg px-4 py-2 transition-all duration-300"
      aria-label="Logout"
    >
      <LogOut size={18} />
    </button>
  );
};

export default LogoutButton;

"use client";
import React, { useState } from "react";
import { SidebarBody, SidebarLink, Sidebar } from "../../components/ui/sidebar";
import {
  IconActivity,
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "../../lib/utils";
import Dashboard from "./Dashboard"; 
import Logo, { LogoIcon } from "./Logo"; 
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";


const SidebarDemo = () => {
  const [open, setOpen] = useState(false);
  const [showCollections, setShowCollections] = useState(false); // State to toggle BentoGridDemo
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler className="sidebar-icon" /> },
    { label: "Profile", href: "#", icon: <IconUserBolt className="sidebar-icon" /> },
    { label: "Settings", href: "#", icon: <IconSettings className="sidebar-icon" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="sidebar-icon" /> },
  ];

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/session", {
          method: "GET",
          credentials: "include", // Ensures cookies are sent
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error("Failed to fetch session");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();
  }, [session]);


  console.log(user)
  return (
    <div className={cn("rounded-md flex flex-col md:flex-row w-full flex-1 max-w-7xl mx-auto border dark:border-neutral-700 overflow-hidden h-screen")}>
      <Sidebar open={open} setOpen={setOpen} className={open ? "w-64" : "w-20"}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <nav className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              {/* Browse Collection Link with Click Event */}
              <div 
                className="cursor-pointer flex items-center p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700"
                onClick={() => setShowCollections((prev) => !prev)}
              >
                <IconActivity className="sidebar-icon" />
                {open && <span className="ml-2">Browse Collection</span>}
              </div>
            </nav>
          </div>
          <SidebarLink
            link={{
              label: "User Name",
              href: "#",
              icon: (
                <Image
                  src=""
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </SidebarBody>
      </Sidebar>
      
      {/* Pass state to Dashboard */}
      <Dashboard showCollections={showCollections} />
    </div>
  );
};

export default SidebarDemo;
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../lib/utils";

const ManageCollection = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler className="sidebar-icon" /> },
    { label: "Profile", href: "#", icon: <IconUserBolt className="sidebar-icon" /> },
    { label: "Settings", href: "#", icon: <IconSettings className="sidebar-icon" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="sidebar-icon" /> },
  ];

  return (
    <div className={cn("rounded-md flex flex-col md:flex-row w-full flex-1 max-w-7xl mx-auto border dark:border-neutral-700 overflow-hidden h-screen")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <nav className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </nav>
          </div>
          <SidebarLink
            link={{
              label: "Manu Arora",
              href: "#",
              icon: (
                <Image
                  src="https://assets.aceternity.com/manu.png"
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
      <Dashboard />
    </div>
  );
};

// ✅ Sidebar Logo Components
const Logo = () => (
  <Link href="#" className="logo-link">
    <div className="logo-icon" />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="logo-text">
      Acet Labs
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="#" className="logo-link">
    <div className="logo-icon" />
  </Link>
);

// ✅ Dashboard Placeholder
const Dashboard = () => (
  <div className="flex flex-1">
    <div className="dashboard-container">
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="dashboard-box" />
        ))}
      </div>
      <div className="flex gap-2 flex-1">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="dashboard-box h-full" />
        ))}  
      </div>
    </div>
  </div>
);

export default ManageCollection; // ✅ Default export

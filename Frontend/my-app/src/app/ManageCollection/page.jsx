"use client"; // Required for state and hooks

import React, { useState } from "react";
import Sidebar from "../components/ui/sidebar"; // Ensure correct path
import SidebarBody from "../components/ui/sidebarBody";
import SidebarLink from "../components/ui/sidebarLink";
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
    <div className="flex flex-col md:flex-row w-full h-screen border dark:border-neutral-700">
      {/* Sidebar */}
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
              label: "User Name",
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

      {/* Main Content */}
      <Dashboard />
    </div>
  );
};

// ✅ Sidebar Logo Components
const Logo = () => (
  <Link href="#" className="flex items-center space-x-2">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white">
      Acet Labs
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="#" className="flex items-center">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
  </Link>
);

// ✅ Dashboard Placeholder
const Dashboard = () => (
  <div className="flex-1 p-6 bg-white dark:bg-neutral-900">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Manage Your Collections</h1>
    <p className="text-gray-500">Create, edit, and manage your collections here.</p>
  </div>
);

export default ManageCollection; // ✅ Default export

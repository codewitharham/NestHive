import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => (
  <Link href="#" className="flex items-center space-x-2">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white">
      NextHive
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href="#" className="flex items-center">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
  </Link>
);

export default Logo;
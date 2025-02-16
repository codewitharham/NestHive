import React from "react";
import { BentoGridDemo } from "./Collection";

const Dashboard = ({ showCollections }) => {
  return (
    <div className="flex flex-1 h-screen overflow-hidden">
      <div className="p-4 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {showCollections ? "Your Collection" : "Manage Your Collections"}
        </h1>
        <p className="text-gray-500">
          {showCollections
            ? "Browse your collections below."
            : "Create, edit, and manage your collections here."}
        </p>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto pr-2">
          {/* Normal Cards (only when Browse Collection is NOT clicked) */}
          {!showCollections && (
            <div className="flex gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
                ></div>
              ))}
            </div>
          )}

          {/* BentoGridDemo appears when "Browse Collection" is clicked */}
          {showCollections && (
            <div className="mt-4">
              <BentoGridDemo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
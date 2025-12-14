import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/clerk-react";
import Sidebar from "../components/SideBar";
import logo from "../assets/logo.png";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <SignedIn>
        <div className="flex h-screen">
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300`}>
            <header className="bg-gray-900 border-b h-14 px-3 border-gray-200 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleSidebar}
                  className="text-white cursor-pointer hover:bg-gray-800 p-2 rounded-md transition-colors"
                  aria-label="Toggle sidebar"
                >
                  <span className="material-symbols-outlined">
                    {isSidebarOpen ? "menu_open" : "menu"}
                  </span>
                </button>
                <img
                  src={logo}
                  alt=""
                  width={32}
                  className="rounded-md"
                />
              </div>
              <div className="flex items-center">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonPopoverCard: "shadow-lg",
                      avatarBox: { width: "32px", height: "32px" },
                    },
                  }}
                />
              </div>
            </header>
            <div className="flex-1 overflow-y-auto p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default DashboardLayout;

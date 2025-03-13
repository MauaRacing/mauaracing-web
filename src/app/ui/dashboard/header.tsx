// "use client";

import Image from "next/image";
import { PowerIcon, Bars3Icon } from "@heroicons/react/24/outline";
// import { useState, useEffect } from "react";
// import { signOut } from "next-auth/react";
// import { User } from "@/lib/userSession";
import { SignOut } from "@/ui/auth/signout-button";
import { UserName } from "@/ui/auth/userName";
import ClientToggle from './clientToogle';
import Counter from "./counter";

// export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
export default async function Header() {
  // const [loading, setLoading] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-300 bg-white">
      <div className="mx-auto flex h-14 md:h-16 items-center justify-between px-6 sm:px-8 lg:px-10">
        <div className="flex space-x-4 sm:space-x-6 items-center">
          {/* <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200">
            <Bars3Icon className="w-6 h-6" />
          </button> */}

          <div className="flex items-center space-x-2">
            <Image
              priority
              src="/assets/images/logoMR_whitebg.png"
              height={100}
              width={100}
              alt="IMT - Instituto Mauá de Tecnologia"
              className="h-10 w-20"
            />
            <p className="font-outfit font-medium text-lg sm:text-xl lg:text-2xl">
              <span className="dark:text-white">MauaRacing Team</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
        <Counter />
        <UserName />
        <SignOut />
        </div>
        {/* <div className="flex items-center space-x-3">
          {user && (
            <div className="hidden font-bold sm:block">
              {user.name}
            </div>
          )}

          <button
            onClick={handleLogout}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">{loading ? "Saindo..." : "Sair"}</div>
          </button>
        </div> */}
      </div>
    </nav>
  );
}

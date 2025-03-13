"use client";
import { useState } from "react";

export default function ClientToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      Menu{" "}
    </button>
  );
}

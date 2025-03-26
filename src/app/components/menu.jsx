import React from "react";

export default function Menu() {
  return (
    <nav className="bg-red-700 border-gray-200 dark:bg-gray-900 mt-3">
      <div className="container mx-auto flex items-center justify-between px-4 h-24">
        <img src="/logo_menu.png" alt="logo" className="h-16" />
        <div className="flex items-center">
          <div className="bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <img className="h-12 w-12 rounded-full" src="/user.png" alt="user photo" />
          </div>
        </div>
      </div>
    </nav>
  );
}

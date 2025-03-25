import React from "react";

export default function Menu() {
  return(
  <nav className="bg-red-700 border-gray-200 dark:bg-gray-900 mt-3 h-[92px] justify-between">
    <div className="max-w-screen-2xl flex flex-wrap items-center justify-between">
        <img src="/logo_menu.png" className="h-24 ml-50" alt="logo" />
    <div className="flex items-center">
        <div className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <img className="h-15 w-15 rounded-full" src="/user.png" alt="user photo" />
        </div>
    </div>
    </div>
  </nav>
  );  
};

import React from 'react';
import { Settings, Bell } from 'lucide-react';

const Cabecalho = () => {
  return (
    <header className="relative flex justify-center items-center mb-6 min-h-[48px]">
      <img src="/logo.png" alt="Logo MeuTDAH" className="h-12 object-contain" />
      
      <div className="absolute right-0 flex gap-4 z-20">
        <Settings className="text-[#352F5B] cursor-pointer hover:text-[#6C63FF]" size={24} />
        <div className="relative">
          <Bell className="text-[#352F5B] cursor-pointer hover:text-[#6C63FF]" size={24} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-[#FDFBF7] bg-red-500 transform translate-x-1/2 -translate-y-1/4"></span>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
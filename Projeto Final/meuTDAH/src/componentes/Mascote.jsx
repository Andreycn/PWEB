import React from 'react';

const Mascote = ({ nome, nivel }) => (
  <div className="flex items-center justify-center gap-4 mb-8 relative">
    <div className="relative z-10">
      <p className="absolute -top-4 left-0 right-0 text-center text-xs font-bold text-[#2D2C54] tracking-widest">BOB</p>
      <img src="/bob.png" alt="Mascote Bob" className="w-28 h-28 object-contain drop-shadow-lg" />
    </div>
    <div className="bg-white p-4 rounded-2xl shadow-sm rounded-tl-none max-w-[200px] border border-gray-100 relative">
      <div className="absolute w-3 h-3 bg-white border-l border-t border-gray-100 transform -rotate-45 -left-1.5 top-8"></div>
      <p className="text-sm text-gray-600 leading-tight">
        Bom dia, <span className="font-bold text-[#2D2C54]">{nome}</span>! Você está no Nível {nivel}.
      </p>
    </div>
  </div>
);

export default Mascote;
import React from 'react';
import { Home, Calendar, Sprout, BarChart2 } from 'lucide-react';

const BarraNavegacao = ({ telaAtual, aoNavegar }) => {
  return (
    <nav className="bg-white border-t border-gray-100 px-8 py-4 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)] z-50 flex justify-between items-center relative shrink-0">
      <button onClick={() => aoNavegar('home')} className={`flex flex-col items-center gap-1 ${telaAtual === 'home' ? 'text-[#E95678]' : 'text-gray-400'}`}>
          <Home size={24} strokeWidth={telaAtual === 'home' ? 2.5 : 2} />
          <span className="text-[10px] font-bold">Home</span>
      </button>
      
      <button onClick={() => aoNavegar('lista')} className={`flex flex-col items-center gap-1 ${telaAtual === 'lista' ? 'text-[#E95678]' : 'text-gray-400'}`}>
          <Calendar size={24} strokeWidth={telaAtual === 'lista' ? 2.5 : 2} />
          <span className="text-[10px] font-bold">Tarefas</span>
      </button>
      
      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#2D2C54]">
          <Sprout size={24} />
          <span className="text-[10px] font-bold">Hábitos</span>
      </button>
      
      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#2D2C54]">
          <BarChart2 size={24} />
          <span className="text-[10px] font-bold">Relatórios</span>
      </button>
    </nav>
  );
};

export default BarraNavegacao;
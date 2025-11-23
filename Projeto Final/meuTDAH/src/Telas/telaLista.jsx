import React from 'react';
import { Plus, CheckCircle, Circle, Trash2, Pencil, Calendar } from 'lucide-react';

export default function TelaLista({ tarefas, alternar, deletar, aoEditar, aoNovo }) {
  return (
    <div className="flex flex-col h-full p-6 animate-fade-in relative">
      <h2 className="text-2xl font-serif font-bold text-[#2D2C54] mb-6">Todas as Tarefas</h2>
      {!tarefas.length ? (
         <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4"><Calendar size={32}/><p>Nenhuma tarefa.</p></div>
      ) : (
        <div className="space-y-3 overflow-y-auto pb-24 no-scrollbar">
          {tarefas.map(t => (
            <div key={t.id} onClick={() => alternar(t.id)} className={`p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer transition-colors ${t.concluida ? 'bg-gray-50' : 'bg-white'}`}>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t.concluida ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>{t.concluida && <CheckCircle size={16} className="text-white" />}</div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-[#2D2C54] truncate ${t.concluida ? 'line-through opacity-50' : ''}`}>{t.titulo}</p>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{t.categoria}</span>
              </div>
              <div className="flex gap-1">
                <button onClick={(e) => { e.stopPropagation(); aoEditar(t); }} className="text-gray-300 hover:text-[#6C63FF] p-2"><Pencil size={18} /></button>
                <button onClick={(e) => { e.stopPropagation(); deletar(t.id); }} className="text-gray-300 hover:text-red-500 p-2"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="absolute bottom-6 right-6 z-10">
        <button onClick={aoNovo} className="bg-[#2D2C54] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95"><Plus size={28} /></button>
      </div>
    </div>
  );
}
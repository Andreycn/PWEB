import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CATEGORIAS } from '../componentes/constantes';

export default function TelaFormulario({ aoSalvar, aoVoltar, tarefaInicial }) {
  const [tit, setTit] = useState(tarefaInicial ? tarefaInicial.titulo : '');
  const [cat, setCat] = useState(tarefaInicial ? tarefaInicial.categoria : 'Geral');

  const submit = (e) => { e.preventDefault(); aoSalvar(tit, cat, tarefaInicial?.id); };

  return (
    <div className="flex flex-col h-full p-6 animate-fade-in">
      <header className="flex items-center mb-8">
        <button onClick={aoVoltar} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} className="text-[#2D2C54]" /></button>
        <h1 className="flex-1 text-center text-2xl font-serif font-bold text-[#2D2C54] mr-8">{tarefaInicial ? 'Editar' : 'Nova Tarefa'}</h1>
      </header>
      <form onSubmit={submit} className="flex-1 flex flex-col gap-6">
        <div>
          <label className="block text-sm font-bold text-[#2D2C54] mb-2">O que fazer?</label>
          <input autoFocus type="text" placeholder="Ex: Ler livro" value={tit} onChange={e => setTit(e.target.value)} className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-lg outline-none focus:ring-2 focus:ring-[#6C63FF]" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#2D2C54] mb-2">Categoria</label>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIAS.map(c => (
              <button type="button" key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${cat === c ? 'bg-[#352F5B] text-white' : 'bg-white border border-gray-200'}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <button type="submit" disabled={!tit.trim()} className="w-full bg-[#2D2C54] text-white font-bold py-4 rounded-2xl shadow-lg hover:scale-[1.02] disabled:opacity-50 transition-transform">Salvar</button>
        </div>
      </form>
    </div>
  );
}
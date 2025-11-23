import React, { useState, useEffect } from 'react';

import TelaPrincipal from './Telas/telaPrincipal'; 
import TelaLista from './Telas/telaLista';
import TelaFormulario from './Telas/telaFormulario';

import BarraNavegacao from './componentes/BarraNavegacao';

import { DADOS_INICIAIS } from './componentes/constantes'; 

export default function App() {
  const [tela, setTela] = useState('home');
  const [usuario] = useState({ nome: 'Usuário', nivel: 1 });
  const [tarefaEditando, setTarefaEditando] = useState(null);
  
  const [ativo, setAtivo] = useState(false);
  const [tempo, setTempo] = useState(25 * 60);
  useEffect(() => {
    let t = null;
    if (ativo && tempo > 0) t = setInterval(() => setTempo(prev => prev - 1), 1000);
    else if (tempo === 0) { setAtivo(false); setTempo(25 * 60); alert("Tempo acabou!"); }
    return () => clearInterval(t);
  }, [ativo, tempo]);
  const formatar = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const [tarefas, setTarefas] = useState(() => {
    try { return JSON.parse(localStorage.getItem('meutdah_tarefas')) || DADOS_INICIAIS; } 
    catch { return DADOS_INICIAIS; }
  });

  useEffect(() => localStorage.setItem('meutdah_tarefas', JSON.stringify(tarefas)), [tarefas]);

  const salvar = (titulo, categoria, id) => {
    if (id) setTarefas(prev => prev.map(t => t.id === id ? { ...t, titulo, categoria } : t));
    else setTarefas(prev => [...prev, { id: Date.now(), titulo, categoria, concluida: false }]);
    setTela('lista');
  };

  return (
    <div className="w-full h-screen bg-[#FDFBF7] font-sans overflow-hidden flex justify-center">
      <div className="w-full max-w-md h-full relative bg-[#FDFBF7] flex flex-col shadow-2xl">
        <main className="flex-1 overflow-hidden relative">
          {tela === 'home' && (
            <TelaPrincipal 
              usuario={usuario} 
              tarefas={tarefas} 
              alternar={id => setTarefas(t => t.map(i => i.id === id ? { ...i, concluida: !i.concluida } : i))} 
              pomodoro={{ ativo, setAtivo, tempo, formatar }} 
            />
          )}
          {tela === 'lista' && (
            <TelaLista 
              tarefas={tarefas} 
              alternar={id => setTarefas(t => t.map(i => i.id === id ? { ...i, concluida: !i.concluida } : i))} 
              deletar={id => setTarefas(t => t.filter(i => i.id !== id))} 
              aoEditar={t => { setTarefaEditando(t); setTela('form'); }} 
              aoNovo={() => { setTarefaEditando(null); setTela('form'); }} 
            />
          )}
          {tela === 'form' && (
            <TelaFormulario 
              aoSalvar={salvar} 
              aoVoltar={() => setTela('lista')} 
              tarefaInicial={tarefaEditando} 
            />
          )}
        </main>
        {tela !== 'form' && <BarraNavegacao telaAtual={tela} aoNavegar={setTela} />}
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Nunito:wght@400;600;700;800&display=swap'); .font-serif { font-family: 'Merriweather', serif; } .font-sans { font-family: 'Nunito', sans-serif; } .no-scrollbar::-webkit-scrollbar { display: none; } .animate-fade-in { animation: fadeIn 0.3s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
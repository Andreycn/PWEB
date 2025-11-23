import React from 'react';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';
import Cabecalho from '../componentes/cabecalho';
import Mascote from '../componentes/Mascote';

export default function TelaPrincipal({ usuario, tarefas, pomodoro, alternar }) {
  const { ativo, setAtivo, tempo, formatar } = pomodoro;
  const concluidas = tarefas.filter(t => t.concluida).length;
  const proxima = tarefas.find(t => !t.concluida);
  const progresso = tarefas.length ? (concluidas / tarefas.length) * 100 : 0;

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto pb-24 animate-fade-in">
      <Cabecalho />
      <h1 className="text-4xl font-serif font-bold text-[#2D2C54] mb-8 text-center">Painel Diário</h1>
      <Mascote nome={usuario.nome} nivel={usuario.nivel} />
      
      <div className="bg-[#352F5B] rounded-3xl p-6 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-lg font-semibold opacity-90 mb-2">Sua próxima ação:</h2>
          <p className="text-2xl font-serif font-bold mb-6 leading-tight">{proxima ? proxima.titulo : "Tudo feito! 🎉"}</p>
          <button onClick={() => setAtivo(!ativo)} className="w-full bg-gradient-to-r from-[#6C63FF] to-[#FF6584] p-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
            {ativo ? `PAUSAR: ${formatar(tempo)}` : 'INICIAR FOCO (25m)'}
            {!ativo && <ChevronRight size={20} />}
          </button>
        </div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#6C63FF] opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-end mb-3">
          <h3 className="font-serif font-bold text-[#2D2C54]">Tarefas de Hoje</h3>
          <span className="text-sm text-gray-500 font-medium">{concluidas}/{tarefas.length} concluídas</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden mb-4">
          <div className="bg-[#86EFAC] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${progresso}%` }}></div>
        </div>
        <div className="space-y-2">
           {tarefas.slice(0, 3).map(t => (
               <div key={t.id} onClick={() => alternar(t.id)} className="flex items-center gap-3 text-sm text-gray-600 p-1 cursor-pointer hover:bg-gray-50 rounded">
                   {t.concluida ? <CheckCircle size={16} className="text-green-500"/> : <Circle size={16}/>}
                   <span className={t.concluida ? "line-through opacity-50" : ""}>{t.titulo}</span>
               </div>
           ))}
        </div>
      </div>
    </div>
  );
}
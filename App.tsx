import React, { useState, useEffect } from 'react';
import { MusicPlayer } from './components/MusicPlayer';
import { CodeViewer } from './components/CodeViewer';
import { INITIAL_SONGS, INITIAL_PROMPT } from './constants';
import { generatePythonCode } from './services/geminiService';
import { Sparkles, PlayCircle, Github, FileCode2 } from 'lucide-react';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState(INITIAL_PROMPT);
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Generate initial code on mount
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;
    
    setIsLoading(true);
    const result = await generatePythonCode(prompt);
    setCode(result);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-slate-950/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-500 p-2 rounded-lg">
              <FileCode2 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              PyMusic GenAI
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="hidden sm:inline">Powered by Gemini 2.5</span>
            <a href="#" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
          {/* Left Column: Generator Controls & Simulation */}
          <div className="space-y-6 flex flex-col">
            
            {/* Simulation Preview */}
            <div className="bg-slate-800/50 rounded-2xl p-1 border border-slate-700/50">
                <MusicPlayer songs={INITIAL_SONGS} />
            </div>

            {/* Prompt Input */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h2 className="font-semibold text-lg">Generador de Código</h2>
              </div>
              
              <div className="flex-1 flex flex-col gap-4">
                <label className="text-sm text-slate-400">
                  Describe cómo quieres que funcione tu reproductor en Python:
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none min-h-[120px]"
                  placeholder="Ej: Quiero un reproductor simple con pygame que reproduzca archivos MP3 de una carpeta..."
                />
                <button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all
                    ${isLoading 
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40'
                    }`}
                >
                  {isLoading ? (
                    'Generando...'
                  ) : (
                    <>
                      <PlayCircle className="w-5 h-5" />
                      Generar Código Python
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Code Output */}
          <div className="lg:h-[calc(100vh-8rem)] min-h-[500px]">
            <CodeViewer code={code} isLoading={isLoading} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
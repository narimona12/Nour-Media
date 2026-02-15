
import React, { useState } from 'react';
import { getBusinessStrategy } from '../services/geminiService';
import { TranslationContent } from '../types';

interface Props {
  t: TranslationContent;
  lang: string;
}

const AIConsultant: React.FC<Props> = ({ t, lang }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const strategy = await getBusinessStrategy(input, lang);
    setResult(strategy);
    setLoading(false);
  };

  return (
    <div id="ai-strategy" className="py-24 border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-futuristic font-bold mb-8 tracking-tighter text-center">{t.ai.title}</h2>
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.ai.placeholder}
              className="w-full bg-black border border-zinc-800 p-6 text-white font-mono focus:outline-none focus:border-white transition-colors min-h-[120px]"
            />
            <div className="absolute bottom-4 right-4 text-[10px] text-zinc-600 font-mono">NEURAL_READY</div>
          </div>
          <button
            onClick={handleAnalyze}
            disabled={loading || !input}
            className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? t.ai.thinking : t.ai.button}
          </button>

          {result && (
            <div className="mt-8 p-8 border border-zinc-800 bg-black animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-[10px] text-zinc-500 font-mono mb-4">RESPONSE_LOG_01</div>
              <div className="prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed">
                {result.split('\n').map((line, i) => (
                  <p key={i} className="mb-4">{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;

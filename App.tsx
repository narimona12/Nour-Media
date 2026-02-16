
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from './types';
import LanguageSwitcher from './components/LanguageSwitcher';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isReady, setIsReady] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    // Simulate system check for futuristic feel and ensuring components are ready
    const timer = setTimeout(() => setIsReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-mono">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-2 border-white animate-spin mb-4"></div>
          <div className="text-[10px] tracking-[0.5em] text-white">INITIALIZING_NOUR_MEDIA</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-white selection:text-black animate-in fade-in duration-1000">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border-2 border-white flex items-center justify-center">
              <span className="text-sm font-bold">N</span>
            </div>
            <span className="font-futuristic font-bold tracking-[0.3em] text-xl">NOUR MEDIA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <a href="#services" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#ai-strategy" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">{t.nav.aiConsultant}</a>
            <a href="#contact" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">{t.nav.contact}</a>
            <LanguageSwitcher current={lang} onChange={setLang} />
          </div>

          <div className="md:hidden">
             <LanguageSwitcher current={lang} onChange={setLang} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px]"></div>
          <div className="absolute top-0 right-0 w-[400px] h-full border-l border-white/[0.03]"></div>
          <div className="absolute top-0 left-0 w-full h-[400px] border-b border-white/[0.03]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-block px-3 py-1 border border-zinc-800 text-[10px] font-mono tracking-widest mb-6 animate-pulse">
            SYSTEM_STATUS: ONLINE
          </div>
          <h1 className="text-7xl md:text-9xl font-futuristic font-bold tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {t.hero.title}
          </h1>
          <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            {t.hero.subtitle}
          </p>
          <a 
            href="#contact"
            className="inline-block px-10 py-5 bg-white text-black text-sm font-bold uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all duration-300 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-futuristic font-bold tracking-tighter">{t.services.title}</h2>
            <div className="w-full md:w-1/2 h-[1px] bg-zinc-800 mb-4 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'web', data: t.services.web, code: '0X01' },
              { id: 'automation', data: t.services.automation, code: '0X02' },
              { id: 'funnels', data: t.services.funnels, code: '0X03' }
            ].map((service) => (
              <div key={service.id} className="group relative p-10 border border-zinc-900 bg-black hover:border-white transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-0 bg-white group-hover:h-full transition-all duration-500"></div>
                <div className="text-[10px] font-mono text-zinc-600 mb-8 tracking-[0.5em]">{service.code}</div>
                <h3 className="text-2xl font-futuristic font-bold mb-4">{service.data.name}</h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-12">
                  {service.data.desc}
                </p>
                <div className="flex items-center text-[10px] font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                  VIEW_DETAILS <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultant Feature */}
      <AIConsultant t={t} lang={lang} />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-8xl font-futuristic font-bold tracking-tighter mb-10 leading-none">
              {t.contact.title}
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-black pl-6">
                <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Location</p>
                <p className="font-medium">Global Digital Operations</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Status</p>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <p className="font-medium italic">Online - Accepting Projects</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="border-b border-black pb-4">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4 block text-zinc-500">{t.contact.name}</label>
              <input type="text" className="w-full bg-transparent outline-none text-xl placeholder:text-zinc-300" placeholder="---" />
            </div>
            <div className="border-b border-black pb-4">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4 block text-zinc-500">{t.contact.email}</label>
              <input type="email" className="w-full bg-transparent outline-none text-xl placeholder:text-zinc-300" placeholder="---" />
            </div>
            <div className="border-b border-black pb-4">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4 block text-zinc-500">{t.contact.message}</label>
              <textarea className="w-full bg-transparent outline-none text-xl placeholder:text-zinc-300 min-h-[100px]" placeholder="---"></textarea>
            </div>
            <button className="px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.5em] hover:bg-zinc-800 transition-colors w-full md:w-auto">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-2 grayscale opacity-50">
            <div className="w-6 h-6 border border-white flex items-center justify-center">
              <span className="text-[10px] font-bold">N</span>
            </div>
            <span className="font-futuristic font-bold tracking-[0.2em] text-sm">NOUR MEDIA</span>
          </div>
          <p className="text-[10px] font-mono text-zinc-600 tracking-widest">{t.footer.rights}</p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors">TELEGRAM</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

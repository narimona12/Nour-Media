
import React from 'react';
import { Language } from '../types';

interface Props {
  current: Language;
  onChange: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<Props> = ({ current, onChange }) => {
  const langs: { id: Language; label: string }[] = [
    { id: 'en', label: 'EN' },
    { id: 'ru', label: 'RU' },
    { id: 'uz', label: 'UZ' },
  ];

  return (
    <div className="flex space-x-4">
      {langs.map((l) => (
        <button
          key={l.id}
          onClick={() => onChange(l.id)}
          className={`text-xs font-mono tracking-widest transition-all ${
            current === l.id ? 'text-white border-b border-white' : 'text-zinc-500 hover:text-white'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

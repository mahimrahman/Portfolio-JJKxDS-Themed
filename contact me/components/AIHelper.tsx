
import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { getAIThemedResponse } from '../services/geminiService';

interface Props {
  theme: ThemeMode;
  submissionResult: string | null;
}

const AIHelper: React.FC<Props> = ({ theme, submissionResult }) => {
  const [aiMessage, setAiMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAiMessage(theme === ThemeMode.JUJUTSU 
      ? "Detecting cursors. Ready."
      : "Crow standing by.");
  }, [theme]);

  useEffect(() => {
    if (submissionResult) {
      handleSubmissionResponse();
    }
  }, [submissionResult]);

  const handleSubmissionResponse = async () => {
    setIsLoading(true);
    const themedRes = await getAIThemedResponse("User", submissionResult || "Sent", theme);
    setAiMessage(themedRes);
    setIsLoading(false);
  };

  const accentColor = theme === ThemeMode.JUJUTSU ? 'text-[#bc13fe]' : 'text-[#10b981]';

  return (
    <div className={`p-4 border-l transition-all duration-500 bg-white/[0.02] ${
      theme === ThemeMode.JUJUTSU ? 'border-[#bc13fe]/30' : 'border-[#10b981]/30'
    }`}>
      <div className="flex gap-3 items-center">
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-sm ${
          theme === ThemeMode.JUJUTSU ? 'text-[#bc13fe]' : 'text-[#10b981]'
        }`}>
          {theme === ThemeMode.JUJUTSU ? '●' : '▲'}
        </div>
        <div className="flex-1">
          <p className="text-[9px] font-black tracking-widest opacity-30 mb-0.5 uppercase">LOCATION: CANADA</p>
          <p className="text-[11px] font-medium leading-tight text-slate-300">
            {aiMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIHelper;

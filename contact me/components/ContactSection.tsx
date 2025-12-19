
import React, { useState } from 'react';
import { ThemeMode, SocialLink, MessageData } from '../types';
import ContactForm from './ContactForm';
import SocialGrid from './SocialGrid';
import AIHelper from './AIHelper';

interface Props {
  theme: ThemeMode;
}

const ContactSection: React.FC<Props> = ({ theme }) => {
  const [submissionResult, setSubmissionResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socials: SocialLink[] = [
    { name: 'LinkedIn', url: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', technique: 'LINK' },
    { name: 'GitHub', url: '#', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12', technique: 'FORGE' },
    { name: 'Discord', url: '#', icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.666 4.37a.071.071 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z', technique: 'GUILD' },
  ];

  const handleSubmit = async (data: MessageData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmissionResult(`TRANSMISSION SUCCESSFUL.`);
  };

  const accentClass = theme === ThemeMode.JUJUTSU ? 'text-[#bc13fe]' : 'text-[#10b981]';

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      
      {/* LEFT: INFO & SOCIALS */}
      <div className="space-y-8 lg:pr-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
            Inquire <br /> 
            <span className={accentClass}>Directly</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs font-light">
            {theme === ThemeMode.JUJUTSU 
              ? "Establishing a direct link to the cursed realm. Hollow purple energy verified." 
              : "A message delivered through the forest. The Tanjiro spirit resolve is active."}
          </p>
        </div>

        <SocialGrid theme={theme} socials={socials} />

        <div className="pt-4">
            <AIHelper theme={theme} submissionResult={submissionResult} />
        </div>
      </div>

      {/* RIGHT: COMPACT FORM */}
      <div className={`form-container p-8 rounded-xl border transition-all duration-500 ${
        theme === ThemeMode.JUJUTSU ? 'border-[#bc13fe]/10' : 'border-[#10b981]/10'
      }`}>
        <ContactForm 
          theme={theme} 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
};

export default ContactSection;

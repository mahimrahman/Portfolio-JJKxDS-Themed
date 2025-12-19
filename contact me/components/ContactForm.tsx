
import React, { useState } from 'react';
import { ThemeMode, MessageData } from '../types';

interface Props {
  theme: ThemeMode;
  onSubmit: (data: MessageData) => void;
  isSubmitting: boolean;
  onSuccess: () => void;
}

const ContactForm: React.FC<Props> = ({ theme, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<MessageData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    onSubmit(formData);
  };

  const inputClasses = `w-full bg-white/[0.02] border-b py-3 px-1 transition-all duration-500 outline-none text-sm font-medium placeholder:text-slate-600 ${
    theme === ThemeMode.JUJUTSU 
      ? 'border-slate-800 focus:border-[#bc13fe] text-purple-50' 
      : 'border-slate-800 focus:border-[#10b981] text-emerald-50'
  }`;

  const labelClasses = `text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-1 block`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClasses}>Identity</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="ENTER NAME"
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Channel</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ENTER EMAIL"
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Intel</label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="TYPE MESSAGE..."
          className={`${inputClasses} resize-none`}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 mt-2 text-xs font-black uppercase tracking-[0.4em] transition-all duration-500 rounded border ${
          isSubmitting ? 'opacity-30 cursor-not-allowed' : 'hover:scale-[0.98]'
        } ${
          theme === ThemeMode.JUJUTSU 
            ? 'bg-[#bc13fe]/10 border-[#bc13fe]/30 text-[#bc13fe] hover:bg-[#bc13fe] hover:text-white' 
            : 'bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981] hover:bg-[#10b981] hover:text-black'
        }`}
      >
        {isSubmitting ? 'Syncing...' : 'Transmit'}
      </button>
    </form>
  );
};

export default ContactForm;

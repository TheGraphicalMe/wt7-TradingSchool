import React, { useState } from 'react';

export default function RegistrationForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    experience: 'Absolute Beginner',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScFzKbbmQa9hXQHUjdkSLlkJR7cX1KBvJ1nJWx5Id89C0efog/formResponse";
    
    const submitData = new URLSearchParams();
    submitData.append("entry.1101357551", formData.name);
    submitData.append("entry.1763182920", formData.email);
    submitData.append("entry.2066513083", formData.whatsapp);
    submitData.append("entry.860426586", formData.experience);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: submitData
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] overflow-y-auto p-4 flex items-center justify-center animate-fade-in"
      style={{ background: 'rgba(5,7,10,0.85)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
    >
      {/* Form Container Wrapper */}
      <div className="relative w-full max-w-md mx-auto my-4 animate-scale-in">
        
        {/* 1. Premium Rotating Border Background */}
        <div className="absolute -inset-[2px] rounded-[26px] overflow-hidden pointer-events-none z-0">
          <div className="absolute -inset-[100%] animate-[spin_16s_linear_infinite]"
            style={{
              background: `conic-gradient(from 0deg, 
                   transparent 0%, transparent 20%, rgba(147,51,234,0.15) 40%, rgba(147,51,234,0.9) 49.5%, #ffffff 50%, 
                   transparent 50%, transparent 70%, rgba(147,51,234,0.15) 90%, rgba(147,51,234,0.9) 99.5%, #ffffff 100%)`
            }}
          />
        </div>
        
        {/* 2. Border Glow Bloom */}
        <div className="absolute -inset-[2.5px] rounded-[26px] overflow-hidden pointer-events-none blur-[12px] opacity-60 z-0">
          <div className="absolute -inset-[100%] animate-[spin_16s_linear_infinite]"
            style={{
              background: `conic-gradient(from 0deg, 
                   transparent 0%, transparent 20%, rgba(147,51,234,0.4) 40%, #9333EA 50%, 
                   transparent 50%, transparent 70%, rgba(147,51,234,0.4) 90%, #9333EA 100%)`
            }}
          />
        </div>

        {/* 3. Main Card Body */}
        <div 
          className="relative z-10 w-full rounded-[24px] p-8 sm:p-10 overflow-hidden"
          style={{
            background: 'linear-gradient(165deg, rgba(20, 24, 32, 1) 0%, rgba(10, 12, 18, 1) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.06)',
          }}
        >
          {/* Close Button */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full
                       border border-white/10 bg-white/5 text-white/70
                       cursor-pointer flex items-center justify-center z-50
                       transition-all hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>
          )}

          {/* Header */}
          {!submitted && (
            <div className="flex flex-col gap-2 mb-6 text-center relative z-10">
              <h3 className="font-cond text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                Fill your details and we will get back to you.
              </h3>
            </div>
          )}

          {/* Form / Success State */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4 animate-fade-in relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#9333EA]/20 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              </div>
              <h3 className="font-cond text-3xl font-black uppercase text-white text-center">
                Thank you!
              </h3>
              <p className="font-body text-gray-400 text-sm text-center">
                We will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
              
              <div>
                <label className="block mb-1.5 font-cond text-xs font-bold tracking-widest uppercase text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-white/5 text-white font-body text-sm border border-white/10 focus:border-[#9333EA] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block mb-1.5 font-cond text-xs font-bold tracking-widest uppercase text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-white/5 text-white font-body text-sm border border-white/10 focus:border-[#9333EA] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block mb-1.5 font-cond text-xs font-bold tracking-widest uppercase text-gray-400">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="Enter your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-white/5 text-white font-body text-sm border border-white/10 focus:border-[#9333EA] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block mb-1.5 font-cond text-xs font-bold tracking-widest uppercase text-gray-400">
                  Trading Experience
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-white/5 text-white font-body text-sm border border-white/10 focus:border-[#9333EA] focus:outline-none transition-colors cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239333EA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center'
                  }}
                >
                  <option value="Absolute Beginner" className="bg-[#141820] text-white">Absolute Beginner</option>
                  <option value="Intermediate" className="bg-[#141820] text-white">Intermediate</option>
                  <option value="Advance" className="bg-[#141820] text-white">Advance</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 rounded-xl flex items-center justify-center gap-2
                       font-cond font-bold text-sm tracking-widest uppercase
                       bg-[#9333EA] text-white border-none shadow-[0_0_20px_rgba(147,51,234,0.4)]
                       transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:bg-[#a855f7] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Captcha State
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "",
    project: "",
    budget: "",
    timeline: "",
    final: "",
  });

  useEffect(() => {
    // Generate simple math problem on load
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const next = () => setStep((s) => s + 1);

  const select = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => {
      next();
    }, 300);
  };

  const handleSubmit = async () => {
    // Verify Captcha First
    if (parseInt(captchaAnswer) !== (captchaNum1 + captchaNum2)) {
      alert("Error ❌: Math captcha failed. Are you a robot? 🤖");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(`Error ❌: ${data.error || "Failed to send."}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white font-sans p-4">
      <div className="w-[420px] p-10 rounded-[20px] backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-300 relative overflow-hidden">
        
        {step === 0 && (
          <div className="animate-in fade-in zoom-in duration-500">
            <h2 className="text-2xl font-bold mb-6">Let’s Build Something Cool 🚀</h2>
            <button className="w-full p-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded-xl font-medium text-white shadow-lg shadow-orange-500/20" onClick={next}>
              Start
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold mb-6">What should I call you? 😄</h2>
            <input 
              className="w-full p-3 mb-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-colors" 
              value={form.name} 
              onChange={(e) => setForm({...form, name: e.target.value})} 
              placeholder="Your Name" 
            />
            <button className="w-full p-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded-xl font-medium text-white shadow-lg shadow-orange-500/20" onClick={next}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold mb-6">Where should I reply?</h2>
            <input 
              className="w-full p-3 mb-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-colors" 
              value={form.email} 
              onChange={(e) => setForm({...form, email: e.target.value})} 
              placeholder="Your Email" 
            />
            <button className="w-full p-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded-xl font-medium text-white shadow-lg shadow-orange-500/20" onClick={next}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold mb-6">So… why are you here? 👀</h2>
            <div className="space-y-3">
              {[
                { id: "Project", label: "💼 Project" },
                { id: "Networking", label: "🧠 Networking" },
                { id: "Just Hi", label: "😄 Just Hi" },
                { id: "Exploring", label: "🕵️ Just exploring" },
                { id: "Collaborate", label: "🤝 Let’s collaborate" }
              ].map((opt) => (
                <div 
                  key={opt.id}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${form.purpose === opt.id ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 hover:bg-white/10'}`}
                  onClick={() => select('purpose', opt.id)}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold mb-6">Alright, tell me everything (or at least something useful) 😌</h2>
            <textarea 
              className="w-full p-3 mb-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-colors h-32 resize-none" 
              value={form.project} 
              onChange={(e) => setForm({...form, project: e.target.value})} 
            />
            <button className="w-full p-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded-xl font-medium text-white shadow-lg shadow-orange-500/20" onClick={next}>Next</button>
          </div>
        )}

        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold mb-6">Be honest… what’s the budget? 💸</h2>
            <div className="space-y-3">
              {[
                { id: "5k", label: "₹0–₹5k (student vibes)" },
                { id: "20k", label: "₹5k–₹20k" },
                { id: "50k", label: "₹20k–₹50k" },
                { id: "50k+", label: "₹50k+ (now we’re talking 🔥)" }
              ].map((opt) => (
                <div 
                  key={opt.id}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${form.budget === opt.id ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 hover:bg-white/10'}`}
                  onClick={() => select('budget', opt.id)}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold mb-6">How urgent is this? ⏳</h2>
            <div className="space-y-3">
              {[
                { id: "ASAP", label: "ASAP (panic mode 😵)" },
                { id: "Week", label: "2-4 weeks" }
              ].map((opt) => (
                <div 
                  key={opt.id}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${form.timeline === opt.id ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 hover:bg-white/10'}`}
                  onClick={() => select('timeline', opt.id)}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            {submitted ? (
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-semibold">Nice 😎</h2>
                <p className="text-white/60">
                  I’ll get back to you soon… unless I get kidnapped by bugs in my code.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-6">Final Message 👀</h2>
                <textarea 
                  className="w-full p-3 mb-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-colors h-24 resize-none" 
                  value={form.final} 
                  onChange={(e) => setForm({...form, final: e.target.value})} 
                />
                
                {/* Anti-Spam Captcha */}
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-white/80 font-medium">Verify human: {captchaNum1} + {captchaNum2} = ?</span>
                  <input 
                    type="number"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    className="w-20 p-2 rounded-lg bg-black/20 border border-white/20 text-center text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button 
                  className="w-full p-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 transition-colors rounded-xl font-medium text-white shadow-lg shadow-orange-500/20" 
                  onClick={handleSubmit}
                  disabled={loading || !captchaAnswer}
                >
                  {loading ? "Submitting..." : "Submit 🚀"}
                </button>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

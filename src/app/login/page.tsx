"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    
    if (error) {
      alert("Error: " + error.message);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="w-[400px] p-8 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
        <h1 className="text-3xl text-white font-bold mb-2">Admin Login 🔐</h1>
        <p className="text-white/60 mb-8">Access your portfolio dashboard</p>
        
        <input 
          type="email" 
          placeholder="Admin Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-colors"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-8 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition-colors"
        />
        <button 
          onClick={handleLogin} 
          disabled={loading}
          className="w-full p-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-medium disabled:opacity-50 transition-colors shadow-lg shadow-orange-500/20"
        >
          {loading ? "Verifying..." : "Enter Dashboard"}
        </button>
      </div>
    </div>
  );
}

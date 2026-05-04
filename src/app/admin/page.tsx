"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndFetch = async () => {
      // 1. Check if user is logged in
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      
      // 2. Fetch data from Supabase
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });
      
      console.log("✅ Fetch result:", { data, error });
      
      if (error) {
        console.error("❌ Supabase query error:", error.message);
      }
      if (data) setContacts(data);
      setLoading(false);
    };
    checkAuthAndFetch();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center font-sans">
        <div className="animate-pulse text-orange-500 font-bold text-xl">Loading Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] p-8 text-white font-sans selection:bg-orange-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Admin Dashboard 📊
            </h1>
            <p className="text-white/40 mt-2">Manage your incoming portfolio leads.</p>
          </div>
          <button 
            onClick={() => supabase.auth.signOut().then(() => router.push("/login"))} 
            className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium text-white/80"
          >
            Sign out
          </button>
        </div>
        
        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-xl">
            <p className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Total Inquiries</p>
            <p className="text-5xl font-bold text-orange-500">{contacts.length}</p>
          </div>
          <div className="p-6 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-xl">
            <p className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Recent (Last 7 Days)</p>
            <p className="text-5xl font-bold text-blue-400">
              {contacts.filter(c => new Date(c.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
            </p>
          </div>
          <div className="p-6 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <p className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">High Budget ($50k+)</p>
            <p className="text-5xl font-bold text-green-400">
              {contacts.filter(c => c.budget === "50k+").length}
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white/5 border border-white/10 rounded-[20px] overflow-hidden backdrop-blur-xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-black/20 border-b border-white/10 uppercase tracking-wider text-xs font-semibold text-white/50">
              <tr>
                <th className="p-6">Client</th>
                <th className="p-6">Purpose</th>
                <th className="p-6">Budget & Timeline</th>
                <th className="p-6">Message</th>
                <th className="p-6">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6">
                    <p className="font-semibold text-base text-white">{c.name}</p>
                    <p className="text-orange-400/80">{c.email}</p>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                      {c.purpose}
                    </span>
                  </td>
                  <td className="p-6">
                    <p className="text-green-400 font-medium mb-1">{c.budget}</p>
                    <p className="text-white/40 text-xs flex items-center gap-1">
                      ⏳ {c.timeline}
                    </p>
                  </td>
                  <td className="p-6">
                    <div className="max-w-xs text-white/70 line-clamp-2" title={c.message}>
                      {c.message || <span className="text-white/20 italic">No message</span>}
                    </div>
                  </td>
                  <td className="p-6 text-white/40 whitespace-nowrap">
                    {new Date(c.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                </tr>
              ))}
              
              {contacts.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-white/40">
                    No contacts yet. Your inbox is very quiet. 🦗
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BarChart3, Calendar, DollarSign, Users, Plus, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/organizer")({
  head: () => ({
    meta: [
      { title: "Organizer Dashboard — Book My Event" },
      { name: "description", content: "Create and manage events, track bookings and revenue, all in one beautiful dashboard." },
    ],
  }),
  component: Organizer,
});

function Organizer() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Organizer</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Welcome back, Priya</h1>
            <p className="text-muted-foreground">Here's how your events are performing this week.</p>
          </div>
          <button className="bg-gradient-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold shadow-elegant hover:shadow-glow transition flex items-center gap-2">
            <Plus className="h-4 w-4" /> Create event
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {[
            { icon: DollarSign, label: "Revenue", value: "₹4,82,300", trend: "+12.4%" },
            { icon: Users, label: "Tickets sold", value: "1,284", trend: "+8.1%" },
            { icon: Calendar, label: "Active events", value: "7", trend: "+2" },
            { icon: TrendingUp, label: "Conversion", value: "6.8%", trend: "+0.9%" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5 hover:shadow-glow transition"
            >
              <s.icon className="h-5 w-5 text-accent mb-3" />
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="font-display text-2xl font-bold mt-1">{s.value}</div>
              <div className="text-xs text-emerald-400 mt-1">{s.trend} this week</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold">Sales overview</h2>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex items-end gap-2 h-48">
              {[40, 65, 45, 80, 55, 90, 75, 95, 60, 85, 70, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className="flex-1 bg-gradient-primary rounded-t-lg opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 space-y-4">
            <h2 className="font-display text-xl font-bold">Upcoming events</h2>
            {["Neon Nights", "Stand-Up Riot", "Indie Open Air"].map((e, i) => (
              <div key={e} className="glass rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{e}</div>
                  <div className="text-xs text-muted-foreground">Dec {14 + i} • 8 PM</div>
                </div>
                <div className="text-xs text-accent font-semibold">{85 + i * 4}% sold</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

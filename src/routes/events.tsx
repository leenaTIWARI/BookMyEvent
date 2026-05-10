import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { events, categories } from "@/lib/events-data";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Browse Events — Book My Event" },
      { name: "description", content: "Browse all upcoming concerts, movies, sports, comedy and festival events. Filter by city, category and price." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() =>
    events.filter(e =>
      (cat === "All" || e.category === cat) &&
      (q === "" || e.title.toLowerCase().includes(q.toLowerCase()) || e.city.toLowerCase().includes(q.toLowerCase()))
    ), [q, cat]);

  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="space-y-3 mb-10">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Discover</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">All events</h1>
          <p className="text-muted-foreground">Find your next favourite night out.</p>
        </div>
        <div className="glass-strong rounded-2xl p-4 flex flex-col md:flex-row gap-3 mb-8">
          <div className="flex-1 flex items-center gap-2 glass rounded-xl px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search events or cities…"
              className="bg-transparent flex-1 py-3 outline-none text-sm"
            />
          </div>
          <button className="glass rounded-xl px-4 py-3 text-sm flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {["All", ...categories.map(c => c.name.replace("Concerts", "Concert").replace("Movies", "Movies").replace("Sports","Sports").replace("Comedy","Comedy"))].map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${cat === c ? "bg-gradient-primary text-primary-foreground shadow-elegant" : "glass hover:bg-muted"}`}
            >
              {c}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">No events match your filters.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

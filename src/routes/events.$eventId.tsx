import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { events } from "@/lib/events-data";
import { Calendar, MapPin, Star, Clock, Share2, Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const event = events.find(e => e.id === params.eventId);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.event.title} — Book My Event` },
      { name: "description", content: loaderData?.event.description },
      { property: "og:title", content: loaderData?.event.title },
      { property: "og:description", content: loaderData?.event.description },
      { property: "og:image", content: loaderData?.event.image },
    ],
  }),
  component: EventDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Event not found</h1>
        <Link to="/events" className="text-primary">← Back to events</Link>
      </div>
    </div>
  ),
});

const ROWS = ["A", "B", "C", "D", "E", "F", "G"];
const COLS = 12;
// Pre-determined "booked" set so SSR matches
const BOOKED = new Set(["A3","A4","B7","C2","C3","D9","E5","F1","F2","G10","G11","B8","D10","E6"]);

function EventDetail() {
  const { event } = Route.useLoaderData();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    if (BOOKED.has(id)) return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const subtotal = selected.size * event.price;
  const fee = Math.round(subtotal * 0.05);
  const total = subtotal + fee;

  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-card">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 p-6 space-y-3">
                <span className="glass-strong px-3 py-1 rounded-full text-xs font-semibold inline-block">{event.category}</span>
                <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">{event.title}</h1>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              <Info icon={Calendar} label={event.date} />
              <Info icon={MapPin} label={`${event.venue}, ${event.city}`} />
              <Info icon={Star} label={`${event.rating} (2.4k reviews)`} />
              <Info icon={Clock} label="3 hrs" />
            </div>

            <div className="glass rounded-3xl p-6 space-y-3">
              <h2 className="font-display text-xl font-bold">About this event</h2>
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>

            <SeatMap selected={selected} toggle={toggle} />
          </div>

          <div className="lg:col-span-5">
            <div className="glass-strong rounded-3xl p-6 sticky top-28 space-y-5 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Starting at</div>
                  <div className="font-display text-3xl font-bold text-gradient">₹{event.price}</div>
                </div>
                <div className="flex gap-2">
                  <button className="glass p-2.5 rounded-xl"><Heart className="h-4 w-4" /></button>
                  <button className="glass p-2.5 rounded-xl"><Share2 className="h-4 w-4" /></button>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2 text-sm">
                <Row label={`Tickets × ${selected.size}`} value={`₹${subtotal}`} />
                <Row label="Convenience fee" value={`₹${fee}`} muted />
                <div className="border-t border-border pt-3 flex justify-between font-semibold">
                  <span>Total</span><span className="text-gradient text-lg">₹{total}</span>
                </div>
              </div>

              <input
                placeholder="Promo code"
                className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary"
              />

              <button
                disabled={selected.size === 0}
                className="w-full bg-gradient-primary text-primary-foreground rounded-xl py-3.5 font-semibold shadow-elegant hover:shadow-glow transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {selected.size === 0 ? "Select seats to continue" : `Proceed to payment →`}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                Secure checkout • UPI / Card / Wallet / Net Banking
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function SeatMap({ selected, toggle }: { selected: Set<string>; toggle: (id: string) => void }) {
  return (
    <div className="glass rounded-3xl p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="font-display text-xl font-bold">Choose your seats</h2>
        <div className="flex gap-4 text-xs">
          <Legend color="bg-muted" label="Available" />
          <Legend color="bg-accent" label="Selected" />
          <Legend color="bg-destructive/60" label="Booked" />
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground tracking-[0.4em] py-2 border-y border-border">
        ── STAGE ──
      </div>
      <div className="overflow-x-auto">
        <div className="inline-block mx-auto space-y-2 py-4">
          {ROWS.map(row => (
            <div key={row} className="flex items-center gap-1.5 justify-center">
              <span className="w-5 text-xs font-semibold text-muted-foreground">{row}</span>
              {Array.from({ length: COLS }).map((_, i) => {
                const id = `${row}${i + 1}`;
                const isBooked = BOOKED.has(id);
                const isSel = selected.has(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggle(id)}
                    disabled={isBooked}
                    className={`w-7 h-7 rounded-md text-[10px] font-semibold transition-all ${
                      isBooked
                        ? "bg-destructive/40 cursor-not-allowed"
                        : isSel
                          ? "bg-accent text-accent-foreground scale-110 shadow-glow"
                          : "bg-muted hover:bg-primary/40 hover:scale-110"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {selected.size > 0 && (
        <div className="text-sm text-center text-muted-foreground">
          Selected: <span className="text-foreground font-semibold">{[...selected].sort().join(", ")}</span>
        </div>
      )}
    </div>
  );
}

function Info({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm">
      <Icon className="h-4 w-4 text-primary" /> {label}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return <div className="flex items-center gap-1.5"><span className={`w-3 h-3 rounded ${color}`} />{label}</div>;
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className={`flex justify-between ${muted ? "text-muted-foreground" : ""}`}>
      <span>{label}</span><span>{value}</span>
    </div>
  );
}

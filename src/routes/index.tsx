import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Search, Ticket, ShieldCheck, Zap, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-concert.jpg";
import { events, categories } from "@/lib/events-data";
import { EventCard } from "@/components/EventCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Book My Event — Concerts, Movies, Sports & More" },
      { name: "description", content: "Discover and book unforgettable events. Concerts, movies, sports, comedy and festivals — instant tickets, best seats, secure checkout." },
      { property: "og:title", content: "Book My Event — Premium Event Booking" },
      { property: "og:description", content: "Concerts, movies, sports, festivals & more. Instant booking with the best seats." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Trending />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Over 2M+ tickets booked this season
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Book your favourite <br />
            <span className="text-gradient">events instantly.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Concerts, movies, sports, festivals & more. Real-time seats, secure
            checkout and instant digital tickets — all in one beautiful place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/events"
              className="bg-gradient-primary text-primary-foreground px-7 py-4 rounded-2xl font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              Browse Events <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/organizer"
              className="glass-strong px-7 py-4 rounded-2xl font-semibold hover:bg-white/10 transition flex items-center gap-2"
            >
              Become an Organizer
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-8 pt-4"
          >
            {[
              { v: "2M+", l: "Happy fans" },
              { v: "10K+", l: "Events" },
              { v: "4.9★", l: "Avg rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <SearchCard />
        </motion.div>
      </div>
    </section>
  );
}

function SearchCard() {
  return (
    <div className="glass-strong rounded-3xl p-6 shadow-card space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <Search className="h-4 w-4 text-primary" /> Find your next experience
      </div>
      <div className="space-y-3">
        <input
          placeholder="Search events, artists, venues…"
          className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-primary"
        />
        <div className="grid grid-cols-2 gap-3">
          <select className="glass rounded-xl px-4 py-3 text-sm outline-none">
            <option>Mumbai</option><option>Delhi</option><option>Bangalore</option><option>Pune</option>
          </select>
          <select className="glass rounded-xl px-4 py-3 text-sm outline-none">
            <option>Any category</option><option>Concerts</option><option>Movies</option><option>Sports</option>
          </select>
        </div>
        <Link to="/events" className="block text-center bg-gradient-primary text-primary-foreground rounded-xl py-3 font-semibold shadow-elegant hover:shadow-glow transition">
          Search 1,200+ events
        </Link>
      </div>
      <div className="pt-2 flex flex-wrap gap-2">
        {["Tonight", "This weekend", "Free", "Near me"].map((t) => (
          <span key={t} className="text-xs glass px-3 py-1.5 rounded-full">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Browse" title="Pick your vibe" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
        {categories.map((c, i) => (
          <motion.button
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 text-center hover:shadow-glow transition group"
          >
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{c.icon}</div>
            <div className="font-semibold text-sm">{c.name}</div>
            <div className="text-xs text-muted-foreground">{c.count} events</div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function Trending() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SectionHeader eyebrow="Trending" title="Selling out fast 🔥" />
        <Link to="/events" className="text-sm font-semibold text-primary hover:text-primary-glow flex items-center gap-1">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {events.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Search, title: "Discover", desc: "Browse curated events near you across every category." },
    { icon: Ticket, title: "Choose & book", desc: "Pick the perfect seat with our live interactive seat map." },
    { icon: Zap, title: "Enjoy instantly", desc: "Get your QR ticket on email & in-app — no queues, no fuss." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="How it works" title="Three steps to showtime" />
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl p-8 relative overflow-hidden hover:shadow-glow transition"
          >
            <div className="text-7xl font-display font-bold text-gradient/20 absolute -top-4 right-6 opacity-30">
              0{i + 1}
            </div>
            <div className="bg-gradient-primary inline-flex p-3 rounded-2xl shadow-glow mb-4">
              <s.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const features = [
    { icon: ShieldCheck, title: "Bank-grade security", desc: "Encrypted payments via UPI, cards, wallets and net banking." },
    { icon: Zap, title: "Real-time seats", desc: "No double bookings. What you see is what you get." },
    { icon: Sparkles, title: "AI recommendations", desc: "Discover events you'll actually love — tailored to your taste." },
    { icon: Ticket, title: "Instant refunds", desc: "Cancel up to 24 hours before. Money back to source in minutes." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Why us" title="Built for fans, by fans" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition"
          >
            <f.icon className="h-6 w-6 text-accent mb-3" />
            <h4 className="font-semibold mb-1">{f.title}</h4>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const data = [
    { name: "Aarav Mehta", role: "Music fan", text: "The seat map is unreal — picked front row in 30 seconds. Tickets in my inbox before I closed the tab." },
    { name: "Priya Shah", role: "Event organizer", text: "Selling out my comedy nights has never been smoother. The analytics dashboard is gorgeous." },
    { name: "Rohan Iyer", role: "Sports lover", text: "Got refunded within an hour after a rain cancellation. That's customer service done right." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Loved by fans" title="What people are saying" />
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {data.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-3xl p-6 space-y-4"
          >
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-accent" />)}
            </div>
            <p className="text-sm leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-2">
              <div className="bg-gradient-primary w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary-foreground">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: "How do I receive my tickets?", a: "Instantly to your email and inside the app — with a QR code that's scanned at the venue." },
    { q: "Can I cancel my booking?", a: "Yes. Most events allow free cancellation up to 24 hours before. Refunds are processed in minutes." },
    { q: "Are seat selections live?", a: "Absolutely — every seat is reserved in real-time so two people can never book the same spot." },
    { q: "What payment methods are supported?", a: "UPI, all major cards, popular wallets and net banking. Everything is fully encrypted." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="FAQ" title="Questions, answered" />
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold"
            >
              {f.q}
              <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="px-5 pb-5 text-sm text-muted-foreground"
              >
                {f.a}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{eyebrow}</div>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Book My Event" },
      { name: "description", content: "We're on a mission to make discovering and booking live experiences effortless and joyful." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-6 space-y-8">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">About us</div>
        <h1 className="font-display text-5xl font-bold leading-tight">Live experiences,<br /><span className="text-gradient">made effortless.</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Book My Event was born from a simple frustration: booking great nights out shouldn't feel like a chore.
          Today we host over 10,000 events across India — from the biggest concerts to the smallest open mics —
          all with the same obsession for delightful, instant booking.
        </p>
        <div className="glass rounded-3xl p-8 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { v: "10K+", l: "Events hosted" },
            { v: "2M+", l: "Tickets booked" },
            { v: "180+", l: "Cities covered" },
          ].map(s => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

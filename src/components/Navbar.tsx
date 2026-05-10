import { Link } from "@tanstack/react-router";
import { Ticket, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/organizer", label: "Organizer" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <nav className="glass-strong mx-auto max-w-7xl flex items-center justify-between px-5 py-3 rounded-2xl">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-primary p-2 rounded-xl shadow-glow group-hover:scale-110 transition-transform">
            <Ticket className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">Book My Event</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition">Sign in</button>
          <button className="bg-gradient-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong md:hidden mx-auto max-w-7xl mt-2 p-4 rounded-2xl flex flex-col gap-3"
        >
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium py-2" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <button className="bg-gradient-primary text-primary-foreground py-2 rounded-xl text-sm font-semibold">Get Started</button>
        </motion.div>
      )}
    </motion.header>
  );
}

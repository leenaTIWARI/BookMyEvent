import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star } from "lucide-react";
import type { EventItem } from "@/lib/events-data";

export function EventCard({ event, index = 0 }: { event: EventItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to="/events/$eventId"
        params={{ eventId: event.id }}
        className="group block glass rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all hover:-translate-y-2 duration-500"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute top-3 left-3 glass-strong px-3 py-1 rounded-full text-xs font-semibold">
            {event.category}
          </div>
          <div className="absolute top-3 right-3 glass-strong px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="h-3 w-3 fill-accent text-accent" />
            {event.rating}
          </div>
          <div className="absolute bottom-0 inset-x-0 p-4 space-y-2">
            <h3 className="font-display font-bold text-lg leading-tight line-clamp-2">{event.title}</h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{event.date.split("•")[0]}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{event.city}</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">From</div>
                <div className="font-display font-bold text-gradient text-lg">₹{event.price}</div>
              </div>
              <div className="bg-gradient-primary text-primary-foreground px-3 py-1.5 rounded-xl text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Book Now →
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

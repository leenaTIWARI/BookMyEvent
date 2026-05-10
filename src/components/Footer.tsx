import { Ticket, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-xl shadow-glow">
              <Ticket className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">Book My Event</span>
          </div>
          <p className="text-sm text-muted-foreground">
            India's most-loved platform to discover and book the experiences you love.
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <button key={i} className="glass p-2 rounded-xl hover:shadow-glow transition">
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
        {[
          { title: "Discover", items: ["Concerts", "Movies", "Sports", "Comedy", "Festivals"] },
          { title: "Company", items: ["About", "Careers", "Press", "Contact", "Blog"] },
          { title: "Support", items: ["Help Center", "Refunds", "Terms", "Privacy", "Cookies"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Book My Event. Crafted with passion.
      </div>
    </footer>
  );
}

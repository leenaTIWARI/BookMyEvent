import e1 from "@/assets/event-1.jpg";
import e2 from "@/assets/event-2.jpg";
import e3 from "@/assets/event-3.jpg";
import e4 from "@/assets/event-4.jpg";

export type EventItem = {
  id: string;
  title: string;
  category: string;
  city: string;
  venue: string;
  date: string;
  price: number;
  rating: number;
  image: string;
  description: string;
};

export const events: EventItem[] = [
  {
    id: "neon-nights",
    title: "Neon Nights — Live Concert",
    category: "Concert",
    city: "Mumbai",
    venue: "Jio World Garden",
    date: "Sat, Dec 14 • 8:00 PM",
    price: 1499,
    rating: 4.8,
    image: e1,
    description:
      "An immersive electronic experience under a sea of lasers. Headliners across three stages, food trucks, and a 20m LED dome.",
  },
  {
    id: "midnight-premiere",
    title: "Midnight Premiere — Cinema Gala",
    category: "Movies",
    city: "Bangalore",
    venue: "PVR IMAX Orion",
    date: "Fri, Dec 6 • 11:30 PM",
    price: 499,
    rating: 4.6,
    image: e2,
    description: "Be the first to watch the most anticipated release of the season on a true IMAX screen.",
  },
  {
    id: "el-clasico",
    title: "El Clásico Live Screening",
    category: "Sports",
    city: "Delhi",
    venue: "Indira Gandhi Stadium",
    date: "Sun, Dec 15 • 5:30 PM",
    price: 899,
    rating: 4.9,
    image: e3,
    description: "Watch the biggest rivalry on a 50ft LED with stadium acoustics, fan zones and merchandise.",
  },
  {
    id: "stand-up-riot",
    title: "Stand-Up Riot — Comedy Night",
    category: "Comedy",
    city: "Pune",
    venue: "The Grand Theatre",
    date: "Sat, Dec 21 • 9:00 PM",
    price: 799,
    rating: 4.7,
    image: e4,
    description: "Five of India's funniest comics. One unforgettable night. Strictly 18+.",
  },
];

export const categories = [
  { name: "Concerts", icon: "🎤", count: 124 },
  { name: "Movies", icon: "🎬", count: 86 },
  { name: "Sports", icon: "⚽", count: 47 },
  { name: "Comedy", icon: "🎭", count: 39 },
  { name: "Festivals", icon: "🎡", count: 22 },
  { name: "College Fest", icon: "🎓", count: 31 },
];

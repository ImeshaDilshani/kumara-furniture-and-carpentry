
import React from 'react';
import { Service, GalleryItem, Testimonial } from './types';
import { Hammer, Zap, ShieldCheck, Timer, MapPin } from 'lucide-react';

export const BUSINESS_NAME = "Kumara Furniture";
export const BUSINESS_NAME_SI = "Kumara Furniture & Carpentry";
export const TAGLINE = "Strong Wood • Skilled Work • Fair Price";
export const TAGLINE_SI = "Strong Wood • Skilled Work • Fair Price";

export const PHONE_NUMBER = "077 442 7112";
export const PHONE_NUMBER_SECONDARY = "071 765 0522";
export const LOCATION = "Minuwangoda, Western Province, Sri Lanka";
export const WHATSAPP_LINK = "https://wa.me/94774427112";

export const SERVICES: Service[] = [
  {
    id: 'cupboards',
    title: 'Cupboards',
    description: 'High-quality cupboards designed to fit your room perfectly. Beautiful finishes with smart space management.',
    useCases: [
      'Master Bedroom Wardrobes',
      'Walk-in Closets',
      'Under-stair Storage Units',
      'Office Document Cabinets',
      'Retail Display Shelves'
    ],
    imageUrl: new URL('/assets/images/cupboard.jpg', import.meta.url).href,
  },

  {
    id: 'beds-tables',
    title: 'Beds & Tables',
    description: 'Tables and beds crafted from strong timber to last generations. Premium woods like Teak and Jackfruit.',
    useCases: [
      'Teak Dining Table Sets',
      'King & Queen Size Beds',
      'Study & Office Desks',
      'Coffee Tables',
      'Bedside Tables'
    ],
    imageUrl: new URL('/assets/images/bed-and-tables.jpg', import.meta.url).href,
  },
  {
    id: 'doors-windows',
    title: 'Doors & Windows',
    description: 'Traditional and modern designs for main doors and windows. A blend of security and elegance.',
    useCases: [
      'Main Entrance Double Doors',
      'Arched Door Frames',
      'Modern Glass Windows',
      'Security Room Doors',
      'Ventilation Fan Frames'
    ],
    imageUrl: new URL('/assets/images/doors-and-windows.jpg', import.meta.url).href,
  },
  {
    id: 'kitchen',
    title: 'Pantry Cupboards',
    description: 'Modern pantry cupboards and kitchen fittings. Durable materials that withstand wear and tear.',
    useCases: [
      'Full Pantry Cupboard Sets',
      'Kitchen Islands with Storage',
      'Overhead Cabinets',
      'Built-in Appliance Units',
      'Granite-top Preparations'
    ],
    imageUrl: new URL('/assets/images/pantry-cupboard.jpg', import.meta.url).href,
  },
  {
    id: 'repairs',
    title: 'Repairs & Polishing',
    description: 'Restoring old furniture to give it a new look. Fixing broken chairs, tables, and re-polishing.',
    useCases: [
      'Antique Furniture Restoration',
      'Re-polishing & Varnishing',
      'Chair Leg & Joint Repairs',
      'Table Surface Refinishing',
      'Sofa Frame Strengthening'
    ],
    imageUrl: new URL('/assets/images/old.jpg', import.meta.url).href,
  },
  {
    id: 'general-woodwork',
    title: 'Custom Woodwork & Decor',
    description: 'From elegant TV units and bookshelves to intricate wooden railings and home decor. We craft any unique wood item based on your specific design and measurements.',
    useCases: [
      'Custom TV Units',
      'Solid Wood Bookshelves',
      'Wooden Staircases & Railings',
      'Carved Wall Decor',
      'Unique Wooden Artifacts'
    ],
    imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href,
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', title: 'Teak Dining Table', category: 'Furniture', imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href},
  { id: '2', title: 'Modern Pantry Set', category: 'Kitchen', imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href},,
  { id: '3', title: 'Main Door', category: 'Doors', imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href},,
  { id: '4', title: 'Wardrobe Restoration', category: 'Repairs', imageUrl: 'https://images.unsplash.com/photo-1558997519-53bb890929a3?auto=format&fit=crop&q=80&w=800', beforeImageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Office Desk', category: 'Furniture', imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href},
  { id: '6', title: 'Bedroom Wardrobe', category: 'Cupboards', imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href},
  { id: '7', title: 'Traditional Sofa', category: 'Furniture', imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href},
  { id: '8', title: 'TV Stand', category: 'Furniture', imageUrl: new URL('/assets/images/custom.jpg', import.meta.url).href},
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Nimal Perera', text: 'Kumara did our kitchen cupboards beautifully. Fair price and good wood used. Finished the job on time.', location: 'Minuwangoda' },
  { id: '2', name: 'Sarath Bandara', text: 'A very skilled carpenter. The dining table he made is extremely strong. The finish is top-notch. Highly recommended.', location: 'Gampaha' },
  { id: '3', name: 'Priyantha De Silva', text: 'Repaired our old chairs wonderfully. It is hard to find such skilled, honest carpenters these days.', location: 'Negombo' },
];

export const TRUST_INDICATORS = [
  { icon: <Hammer className="w-5 h-5" />, text: "Skilled Craftsmanship", textEn: "Expert Work" },
  { icon: <ShieldCheck className="w-5 h-5" />, text: "Quality Wood", textEn: "Guaranteed" },
  { icon: <Zap className="w-5 h-5" />, text: "Fair Pricing", textEn: "Best Value" },
  { icon: <Timer className="w-5 h-5" />, text: "On-time Delivery", textEn: "Punctual" },
  { icon: <MapPin className="w-5 h-5" />, text: "Local Service", textEn: "Community First" },
];

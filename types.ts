
export interface Service {
  id: string;
  title: string;
  description: string;
  useCases: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  beforeImageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  location: string;
}

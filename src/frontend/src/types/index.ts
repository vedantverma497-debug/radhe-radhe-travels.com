export interface DayItinerary {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  id: number;
  name: string;
  destination: string;
  destinationId?: number;
  duration: string;
  startingPrice: number;
  highlights: string[];
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  galleryImages: string[];
  departureDates: string[];
  groupSize: string;
}

export interface Destination {
  id: number;
  name: string;
  overview: string;
  highlights: string[];
  imageUrl: string;
}

export interface InquiryRequest {
  name: string;
  email: string;
  phone: string;
  tourName: string;
  desiredDate: string;
  groupSize: number;
  message: string;
}

import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type InquiryId = bigint;
export interface Destination {
    id: DestinationId;
    name: string;
    overview: string;
    highlights: Array<string>;
    imageUrl: string;
}
export interface InquiryRequest {
    desiredDate: string;
    name: string;
    email: string;
    tourName: string;
    message: string;
    phone: string;
    groupSize: bigint;
}
export interface DayItinerary {
    day: bigint;
    title: string;
    description: string;
}
export interface Tour {
    id: TourId;
    galleryImages: Array<string>;
    startingPrice: bigint;
    destination: string;
    duration: string;
    destinationId?: DestinationId;
    name: string;
    inclusions: Array<string>;
    highlights: Array<string>;
    exclusions: Array<string>;
    departureDates: Array<string>;
    groupSize: string;
    itinerary: Array<DayItinerary>;
}
export type TourId = bigint;
export type DestinationId = bigint;
export interface backendInterface {
    getDestination(id: DestinationId): Promise<Destination | null>;
    getTour(id: TourId): Promise<Tour | null>;
    getToursByDestination(destination: string): Promise<Array<Tour>>;
    listDestinations(): Promise<Array<Destination>>;
    listTours(): Promise<Array<Tour>>;
    submitInquiry(req: InquiryRequest): Promise<InquiryId>;
}

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { sampleDestinations, sampleTours } from "../data/sampleData";
import type { Destination, InquiryRequest, Tour } from "../types";

// Tours
export function useTours() {
  return useQuery<Tour[]>({
    queryKey: ["tours"],
    queryFn: async () => sampleTours,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useTour(id: number) {
  return useQuery<Tour | undefined>({
    queryKey: ["tour", id],
    queryFn: async () => sampleTours.find((t) => t.id === id),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!id,
  });
}

export function useToursByDestination(destination: string) {
  return useQuery<Tour[]>({
    queryKey: ["tours", "destination", destination],
    queryFn: async () =>
      sampleTours.filter(
        (t) => t.destination.toLowerCase() === destination.toLowerCase(),
      ),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!destination,
  });
}

// Destinations
export function useDestinations() {
  return useQuery<Destination[]>({
    queryKey: ["destinations"],
    queryFn: async () => sampleDestinations,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useDestination(id: number) {
  return useQuery<Destination | undefined>({
    queryKey: ["destination", id],
    queryFn: async () => sampleDestinations.find((d) => d.id === id),
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!id,
  });
}

// Inquiry
export function useSubmitInquiry() {
  const queryClient = useQueryClient();
  return useMutation<number, Error, InquiryRequest>({
    mutationFn: async (_req: InquiryRequest) => {
      // Simulate async submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      return Math.floor(Math.random() * 10000);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}

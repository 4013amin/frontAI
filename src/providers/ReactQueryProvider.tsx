"use client"
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});


export default function ReactQueryProvider({ children }: IProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

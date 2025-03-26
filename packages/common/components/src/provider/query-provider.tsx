import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function QueryProvider({
  children,
  client,
}: {
  children: React.ReactNode;
  client?: QueryClient;
}) {
  const queryClient = client ?? new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type Document, type InsertDocument } from "@shared/routes"; // Ensure these are exported from shared/routes

// Re-export types for convenience
export type { Document, InsertDocument };

export function useDocuments() {
  return useQuery({
    queryKey: [api.documents.list.path],
    queryFn: async () => {
      const res = await fetch(api.documents.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch documents");
      return api.documents.list.responses[200].parse(await res.json());
    },
  });
}

export function useDocument(id: number) {
  const path = api.documents.get.path.replace(":id", id.toString());
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      const res = await fetch(path, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch document");
      return api.documents.get.responses[200].parse(await res.json());
    },
  });
}

export function useCreateDocument() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertDocument) => {
      const res = await fetch(api.documents.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to create document");
      }
      return api.documents.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.documents.list.path] });
    },
  });
}

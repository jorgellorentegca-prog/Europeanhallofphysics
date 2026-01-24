import { useState } from "react";
import { useDocuments, useCreateDocument, type InsertDocument } from "@/hooks/use-documents";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertDocumentSchema } from "@shared/routes"; // Import from routes to get correct schema type
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, FileText, Download, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { z } from "zod";

// Ensure schema is compatible with client-side form
const formSchema = insertDocumentSchema.extend({
  // Override or add fields if needed for the form specifically
});

export default function Repository() {
  const { data: documents, isLoading } = useDocuments();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredDocs = documents?.filter(doc => 
    doc.title.toLowerCase().includes(search.toLowerCase()) || 
    doc.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <Header />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display text-white mb-2">Document Repository</h1>
            <p className="text-blue-200/60 max-w-xl">
              Access papers, exercises, and historical texts from across the continent.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
              <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search archives..."
                className="w-full bg-[#002266]/50 border border-blue-800 rounded-sm pl-10 pr-4 py-2 text-sm text-white placeholder:text-blue-500 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gold text-[#003399] hover:bg-white hover:text-[#003399] font-display font-bold uppercase tracking-wider text-xs">
                  <Plus className="w-4 h-4 mr-2" />
                  Contribute
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#002266] border border-gold/20 text-white max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-gold">Submit Document</DialogTitle>
                </DialogHeader>
                <CreateDocumentForm onSuccess={() => setIsOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredDocs?.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
                <FileText className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-blue-200/50">No documents found matching your search.</p>
              </div>
            ) : (
              filteredDocs?.map((doc, idx) => (
                <motion.div 
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="p-3 bg-[#003399] rounded border border-white/10 group-hover:border-gold/50 transition-colors">
                      <FileText className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-white group-hover:text-gold transition-colors">{doc.title}</h3>
                      <p className="text-sm text-blue-200/60 line-clamp-2 max-w-2xl mb-2">{doc.description}</p>
                      <div className="flex gap-3 text-xs uppercase tracking-wider text-blue-400">
                        {doc.type && <span className="px-2 py-0.5 border border-blue-800 rounded">{doc.type}</span>}
                        {doc.country && <span>{doc.country}</span>}
                        {doc.institution && <span>• {doc.institution}</span>}
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold hover:text-[#003399] uppercase tracking-widest text-xs font-bold w-full md:w-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Access
                  </Button>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function CreateDocumentForm({ onSuccess }: { onSuccess: () => void }) {
  const { mutate, isPending } = useCreateDocument();
  const form = useForm<InsertDocument>({
    resolver: zodResolver(insertDocumentSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "paper",
      institution: "",
      country: "",
      fileUrl: "",
    }
  });

  const onSubmit = (data: InsertDocument) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        onSuccess();
      }
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-gold">Title</label>
        <Input {...form.register("title")} className="bg-black/20 border-white/10 focus:border-gold/50 text-white" />
        {form.formState.errors.title && <p className="text-red-400 text-xs">{form.formState.errors.title.message}</p>}
      </div>
      
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-gold">Description</label>
        <Input {...form.register("description")} className="bg-black/20 border-white/10 focus:border-gold/50 text-white" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-gold">Type</label>
          <select {...form.register("type")} className="w-full h-10 px-3 rounded-md bg-black/20 border border-white/10 focus:border-gold/50 text-white text-sm">
            <option value="paper">Research Paper</option>
            <option value="exercise">Exercise</option>
            <option value="book">Book</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-gold">Country</label>
          <Input {...form.register("country")} className="bg-black/20 border-white/10 focus:border-gold/50 text-white" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-gold">Institution</label>
        <Input {...form.register("institution")} className="bg-black/20 border-white/10 focus:border-gold/50 text-white" />
      </div>

      <Button type="submit" disabled={isPending} className="w-full bg-gold text-[#003399] hover:bg-white font-bold mt-4">
        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit to Archive"}
      </Button>
    </form>
  );
}

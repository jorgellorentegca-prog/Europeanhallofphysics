import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import Home from "@/pages/Home";
import Repository from "@/pages/Repository";
import DocumentDetail from "@/pages/DocumentDetail";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/repository" component={Repository} />
        <Route path="/document/:id" component={DocumentDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
        {/* Placeholder pages for navigation items */}
        <Route path="/collaborators" component={() => (
          <div className="min-h-screen pt-32 px-4 text-center">
            <h1 className="text-4xl font-display text-gold mb-4">Collaborators</h1>
            <p className="text-white/60 font-body">Our network of institutional partners.</p>
          </div>
        )} />
        
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

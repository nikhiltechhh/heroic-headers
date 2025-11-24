import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "@/components/Header";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ------------------------------------
// Wrapper that uses Router context
// ------------------------------------
const AppWrapper = () => {
  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

// ------------------------------------
// MAIN APP — BrowserRouter OUTERMOST
// ------------------------------------
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <AppWrapper />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

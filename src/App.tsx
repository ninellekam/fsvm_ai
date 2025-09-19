import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* App shell adds the global dark gradient background (see App.css) */}
      <div className="app-shell">
        <BrowserRouter>
          {/* Optional: place a shared header here if нужен общий хедер
              <header className="header container">
                <nav className="nav">
                  <div className="nav__brand">
                    <img src="/logo.svg" className="logo" alt="logo" />
                    <span>Brand</span>
                  </div>
                  <div className="nav__actions">
                    <a className="btn btn--ghost" href="#features">Функции</a>
                    <a className="btn btn--primary" href="#get">Попробовать</a>
                  </div>
                </nav>
              </header>
          */}
          <main className="container" role="main">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {/* Optional shared footer:
          <footer className="footer container">
            <small>© {new Date().getFullYear()} Ваша компания. Все права защищены.</small>
          </footer>
          */}
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

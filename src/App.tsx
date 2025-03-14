import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PowerAutomate from "./pages/PowerAutomate";
import AutomationAnywhere from "./pages/AutomationAnywhere";
import ServiceNow from "./pages/ServiceNow";
import SatisfactionSurvey from "./pages/products/SatisfactionSurvey";
import PlatformCalculator from "./pages/products/PlatformCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Define PowerAutomate como a página inicial */}
            <Route path="/" element={<PowerAutomate />} />
            <Route path="/power-automate" element={<PowerAutomate />} />
            <Route path="/automation-anywhere" element={<AutomationAnywhere />} />
            <Route path="/service-now" element={<ServiceNow />} />
            <Route path="/product/satisfaction-survey" element={<SatisfactionSurvey />} />
            <Route path="/product/platform-calculator" element={<PlatformCalculator />} />
            {/* Rota de página não encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

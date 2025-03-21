
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

// Create a new QueryClient
const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendered");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Define PowerAutomate as the initial page */}
              <Route path="/" element={<Navigate to="/power-automate" replace />} />
              <Route path="/power-automate" element={<PowerAutomate />} />
              <Route path="/power-automate/*" element={<PowerAutomate />} />
              <Route path="/automation-anywhere" element={<AutomationAnywhere />} />
              <Route path="/automation-anywhere/*" element={<AutomationAnywhere />} />
              <Route path="/service-now" element={<ServiceNow />} />
              <Route path="/service-now/*" element={<ServiceNow />} />
              <Route path="/product/satisfaction-survey" element={<SatisfactionSurvey />} />
              <Route path="/product/platform-calculator" element={<PlatformCalculator />} />
              {/* Not found page route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

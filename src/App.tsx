import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./components/ScrollToTop";
import SocialFloatingButtons from "./components/SocialFloatingButtons";
import ThemeToggle from "./components/ThemeToggle";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FacialTreatments from "./pages/services/FacialTreatments";
import KoreanInjectables from "./pages/services/KoreanInjectables";
import KoreanFillers from "./pages/services/KoreanFillers";
import AmericanToxins from "./pages/services/AmericanToxins";
import AmericanFillers from "./pages/services/AmericanFillers";
import SkinBoosters from "./pages/services/SkinBoosters";
import Wellness from "./pages/services/Wellness";
import BodySculpting from "./pages/services/BodySculpting";
import IVTherapy from "./pages/services/IVTherapy";
import AestheticsTraining from "./pages/services/AestheticsTraining";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SocialFloatingButtons />
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/facial-treatments" element={<FacialTreatments />} />
            <Route path="/services/korean-injectables" element={<KoreanInjectables />} />
            <Route path="/services/korean-fillers" element={<KoreanFillers />} />
            <Route path="/services/american-toxins" element={<AmericanToxins />} />
            <Route path="/services/american-fillers" element={<AmericanFillers />} />
            <Route path="/services/skin-boosters" element={<SkinBoosters />} />
            <Route path="/services/wellness" element={<Wellness />} />
            <Route path="/services/body-sculpting" element={<BodySculpting />} />
            <Route path="/services/iv-therapy" element={<IVTherapy />} />
            <Route path="/services/training" element={<AestheticsTraining />} />
            <Route path="/training" element={<Training />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

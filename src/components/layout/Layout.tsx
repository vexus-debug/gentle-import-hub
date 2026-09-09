import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../WhatsAppButton";
import DecorativeBackground from "../DecorativeBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <DecorativeBackground />
      <Header />
      <main className="flex-1 pt-20 relative z-10">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
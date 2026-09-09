import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-36 left-6 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm shadow-lg" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "fixed bottom-36 left-6 z-50",
        "w-12 h-12 rounded-full",
        "flex items-center justify-center",
        "transition-all duration-500 ease-out",
        "shadow-lg hover:shadow-xl",
        "hover:scale-110 active:scale-95",
        "border",
        isDark
          ? "bg-gradient-to-br from-spa-chocolate to-secondary border-spa-gold/30 hover:border-spa-gold/50"
          : "bg-gradient-to-br from-card to-spa-beige border-primary/20 hover:border-primary/40"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <Sun
          className={cn(
            "absolute inset-0 w-6 h-6 transition-all duration-500",
            isDark
              ? "opacity-0 rotate-90 scale-50 text-spa-gold"
              : "opacity-100 rotate-0 scale-100 text-primary"
          )}
        />
        {/* Moon icon */}
        <Moon
          className={cn(
            "absolute inset-0 w-6 h-6 transition-all duration-500",
            isDark
              ? "opacity-100 rotate-0 scale-100 text-spa-gold"
              : "opacity-0 -rotate-90 scale-50 text-primary"
          )}
        />
      </div>
      
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full transition-opacity duration-500",
          isDark
            ? "bg-spa-gold/20 blur-md opacity-50"
            : "bg-primary/10 blur-md opacity-0"
        )}
      />
    </button>
  );
};

export default ThemeToggle;

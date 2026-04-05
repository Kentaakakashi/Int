import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const THEMES = [
  { id: 'minimal-dark', label: 'Minimal Dark', class: '' },
  { id: 'red-cyber', label: 'Red Cyber', class: 'theme-red-cyber' },
  { id: 'neon-blue', label: 'Neon Blue', class: 'theme-neon-blue' },
  { id: 'soft-anime', label: 'Soft Anime', class: 'theme-soft-anime' },
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);

  useEffect(() => {
    const savedThemeId = localStorage.getItem('kenta_theme');
    const theme = THEMES.find(t => t.id === savedThemeId) || THEMES[0];
    setActiveTheme(theme);
    applyTheme(theme);
  }, []);

  const applyTheme = (theme: typeof THEMES[0]) => {
    // Remove all theme classes
    THEMES.forEach(t => {
      if (t.class) document.documentElement.classList.remove(t.class);
    });
    // Add new theme class
    if (theme.class) {
      document.documentElement.classList.add(theme.class);
    }
    localStorage.setItem('kenta_theme', theme.id);
  };

  const handleThemeSelect = (theme: typeof THEMES[0]) => {
    setActiveTheme(theme);
    applyTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full right-0 mb-4 bg-card-bg border border-card-border rounded-2xl p-2 shadow-2xl flex flex-col gap-1 min-w-[160px]"
          >
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeSelect(theme)}
                className={cn(
                  "text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                  activeTheme.id === theme.id 
                    ? "bg-text-primary text-bg-color" 
                    : "text-text-secondary hover:text-text-primary hover:bg-card-border/50"
                )}
              >
                {theme.label}
              </button>
            ))}
          </motion.div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-card-bg border border-card-border flex items-center justify-center text-text-primary hover:text-accent-color transition-colors shadow-lg"
          aria-label="Toggle theme"
        >
          <Palette className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

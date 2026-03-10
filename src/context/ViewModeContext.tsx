// ============================================
// VIEW MODE CONTEXT - Investor & Engineer Modes
// ============================================

"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ViewMode, ViewModeContext as ViewModeContextType } from '@/types';

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

const VIEW_MODE_STORAGE_KEY = 'founder-os-view-mode';

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ViewMode>('default');
  const [mounted, setMounted] = useState(false);

  // Load persisted mode on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(VIEW_MODE_STORAGE_KEY) as ViewMode | null;
    if (stored && ['default', 'investor', 'engineer'].includes(stored)) {
      setModeState(stored);
    }
  }, []);

  const setMode = useCallback((newMode: ViewMode) => {
    setModeState(newMode);
    localStorage.setItem(VIEW_MODE_STORAGE_KEY, newMode);
    
    // Dispatch custom event for other components
    window.dispatchEvent(
      new CustomEvent('viewModeChange', { detail: { mode: newMode } })
    );
  }, []);

  const value: ViewModeContextType = {
    mode,
    setMode,
    isInvestorMode: mode === 'investor',
    isEngineerMode: mode === 'engineer',
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ViewModeContext.Provider value={{ 
        mode: 'default', 
        setMode: () => {}, 
        isInvestorMode: false, 
        isEngineerMode: false 
      }}>
        {children}
      </ViewModeContext.Provider>
    );
  }

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  
  return context;
}

// ============================================
// VIEW MODE TOGGLE COMPONENT
// ============================================

import { motion, AnimatePresence } from 'framer-motion';
import { Eye, TrendingUp, Code2, X } from 'lucide-react';

interface ViewModeToggleProps {
  variant?: 'floating' | 'inline';
  showLabels?: boolean;
}

export function ViewModeToggle({ 
  variant = 'floating',
  showLabels = true 
}: ViewModeToggleProps) {
  const { mode, setMode, isInvestorMode, isEngineerMode } = useViewMode();
  const [isOpen, setIsOpen] = useState(false);

  const modes = [
    { 
      value: 'default' as ViewMode, 
      label: 'Default', 
      icon: Eye,
      description: 'Standard portfolio view'
    },
    { 
      value: 'investor' as ViewMode, 
      label: 'Investor', 
      icon: TrendingUp,
      description: 'Business metrics & vision'
    },
    { 
      value: 'engineer' as ViewMode, 
      label: 'Engineer', 
      icon: Code2,
      description: 'Technical architecture'
    },
  ];

  const currentMode = modes.find(m => m.value === mode) || modes[0];
  const CurrentIcon = currentMode.icon;

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2">
        {modes.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setMode(value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              mode === value
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon size={16} />
            {showLabels && <span className="text-sm font-medium">{label}</span>}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-64 p-2 rounded-2xl glass-strong shadow-2xl"
          >
            <div className="p-2 mb-2 border-b border-white/10">
              <p className="text-xs text-gray-400 uppercase tracking-wider">View Mode</p>
            </div>
            {modes.map(({ value, label, icon: Icon, description }) => (
              <button
                key={value}
                onClick={() => {
                  setMode(value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  mode === value
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'hover:bg-white/5 text-gray-300'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  mode === value ? 'bg-primary-500/30' : 'bg-white/5'
                }`}>
                  <Icon size={18} />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">{label}</p>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-white/10 text-white'
            : mode === 'investor'
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-500/25'
            : mode === 'engineer'
            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/25'
            : 'glass text-gray-300 hover:text-white'
        }`}
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <CurrentIcon size={20} />
            <span className="text-sm font-medium">{currentMode.label}</span>
          </>
        )}
      </motion.button>
    </div>
  );
}

export default ViewModeProvider;

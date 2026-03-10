// ============================================
// COMMAND PALETTE - VS Code-like Command Interface
// ============================================

"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  FolderOpen, 
  User, 
  Code2, 
  Mail, 
  Moon, 
  Sun, 
  TrendingUp,
  Rocket,
  Award,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  MessageSquare,
  Eye,
  Command,
  Sparkles
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useViewMode } from '@/context/ViewModeContext';
import { useAIChat } from '@/context/AIChatContext';
import { KEYBOARD_SHORTCUTS } from '@/lib/constants';

// ============================================
// TYPES
// ============================================

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon: React.ElementType;
  shortcut?: string[];
  action: () => void;
  category: 'navigation' | 'action' | 'theme' | 'mode' | 'social' | 'easter-egg';
  keywords?: string[];
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  
  const { theme, setTheme } = useTheme();
  const { mode, setMode } = useViewMode();
  const { setIsOpen: setAIChatOpen } = useAIChat();

  // ============================================
  // COMMANDS
  // ============================================

  const commands: CommandItem[] = useMemo(() => [
    // Navigation
    {
      id: 'home',
      title: 'Go to Home',
      description: 'Navigate to hero section',
      icon: Home,
      shortcut: ['H'],
      action: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      },
      category: 'navigation',
      keywords: ['top', 'start', 'hero'],
    },
    {
      id: 'about',
      title: 'Go to About',
      description: 'Navigate to about section',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      },
      category: 'navigation',
      keywords: ['bio', 'background', 'story'],
    },
    {
      id: 'skills',
      title: 'Go to Skills',
      description: 'Navigate to skills section',
      icon: Code2,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      },
      category: 'navigation',
      keywords: ['tech', 'technologies', 'expertise'],
    },
    {
      id: 'projects',
      title: 'Go to Projects',
      description: 'Navigate to projects section',
      icon: FolderOpen,
      shortcut: ['P'],
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
      category: 'navigation',
      keywords: ['work', 'portfolio'],
    },
    {
      id: 'ventures',
      title: 'Go to Ventures',
      description: 'Navigate to startups section',
      icon: Rocket,
      action: () => {
        document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' });
      },
      category: 'navigation',
      keywords: ['startups', 'business', 'bastra', 'elysian'],
    },
    {
      id: 'achievements',
      title: 'Go to Achievements',
      description: 'Navigate to achievements section',
      icon: Award,
      action: () => {
        document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
      },
      category: 'navigation',
      keywords: ['awards', 'recognition', 'hult'],
    },
    {
      id: 'contact',
      title: 'Go to Contact',
      description: 'Navigate to contact section',
      icon: Mail,
      shortcut: ['C'],
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
      category: 'navigation',
      keywords: ['hire', 'message', 'email'],
    },

    // Actions
    {
      id: 'ai-chat',
      title: 'Open AI Chat',
      description: 'Talk to Raj\'s AI assistant',
      icon: Sparkles,
      shortcut: ['⌘', 'A'],
      action: () => {
        setAIChatOpen(true);
      },
      category: 'action',
      keywords: ['ask', 'question', 'help', 'assistant'],
    },
    {
      id: 'download-resume',
      title: 'Download Resume',
      description: 'Get Raj\'s latest resume',
      icon: Download,
      action: () => {
        window.open('/resume.pdf', '_blank');
      },
      category: 'action',
      keywords: ['cv', 'pdf'],
    },

    // Theme
    {
      id: 'toggle-theme',
      title: 'Toggle Theme',
      description: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
      icon: theme === 'dark' ? Sun : Moon,
      shortcut: ['⌘', 'T'],
      action: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      },
      category: 'theme',
      keywords: ['dark', 'light', 'mode'],
    },

    // View Modes
    {
      id: 'default-mode',
      title: 'Default View',
      description: 'Standard portfolio view',
      icon: Eye,
      action: () => {
        setMode('default');
      },
      category: 'mode',
      keywords: ['normal', 'standard'],
    },
    {
      id: 'investor-mode',
      title: 'Investor Mode',
      description: 'View business metrics & vision',
      icon: TrendingUp,
      shortcut: ['⌘', 'I'],
      action: () => {
        setMode('investor');
      },
      category: 'mode',
      keywords: ['business', 'metrics', 'startup', 'funding'],
    },
    {
      id: 'engineer-mode',
      title: 'Engineer Mode',
      description: 'View technical architecture',
      icon: Code2,
      shortcut: ['⌘', 'E'],
      action: () => {
        setMode('engineer');
      },
      category: 'mode',
      keywords: ['technical', 'code', 'architecture', 'developer'],
    },

    // Social
    {
      id: 'github',
      title: 'Open GitHub',
      description: 'View Raj\'s code repositories',
      icon: Github,
      action: () => {
        window.open('https://github.com/rajbhurtel83-hash', '_blank');
      },
      category: 'social',
      keywords: ['code', 'repos', 'source'],
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn',
      description: 'Connect on LinkedIn',
      icon: Linkedin,
      action: () => {
        window.open('https://www.linkedin.com/in/raj-bhurtel', '_blank');
      },
      category: 'social',
      keywords: ['connect', 'professional', 'network'],
    },
    {
      id: 'email',
      title: 'Send Email',
      description: 'Email rajbhurtel83@gmail.com',
      icon: Mail,
      action: () => {
        window.open('mailto:rajbhurtel83@gmail.com', '_blank');
      },
      category: 'social',
      keywords: ['contact', 'message'],
    },
  ], [theme, setTheme, setMode, setAIChatOpen]);

  // ============================================
  // FILTERED COMMANDS
  // ============================================

  const filteredCommands = useMemo(() => {
    if (!search.trim()) return commands;
    
    const searchLower = search.toLowerCase();
    return commands.filter(cmd => {
      const matchTitle = cmd.title.toLowerCase().includes(searchLower);
      const matchDesc = cmd.description?.toLowerCase().includes(searchLower);
      const matchKeywords = cmd.keywords?.some(k => k.includes(searchLower));
      return matchTitle || matchDesc || matchKeywords;
    });
  }, [commands, search]);

  // Group commands by category
  const groupedCommands = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    filteredCommands.forEach(cmd => {
      if (!groups[cmd.category]) {
        groups[cmd.category] = [];
      }
      groups[cmd.category].push(cmd);
    });
    return groups;
  }, [filteredCommands]);

  const categoryLabels: Record<string, string> = {
    navigation: 'Navigation',
    action: 'Actions',
    theme: 'Appearance',
    mode: 'View Modes',
    social: 'Social',
    'easter-egg': 'Secrets',
  };

  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================

  const executeCommand = useCallback((command: CommandItem) => {
    command.action();
    setIsOpen(false);
    setSearch('');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        return;
      }

      // Close on Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (!isOpen) return;

      // Navigate list
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selectedCommand = filteredCommands[selectedIndex];
        if (selectedCommand) {
          executeCommand(selectedCommand);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, executeCommand]);

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    const selectedElement = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    selectedElement?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  // ============================================
  // RENDER
  // ============================================

  return (
    <>
      {/* Trigger hint */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl glass text-xs text-gray-500">
        <Command size={14} />
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-400">⌘K</kbd>
        <span>to open commands</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-[15%] left-1/2 -translate-x-1/2 z-50 w-full max-w-xl"
            >
              <div className="bg-dark-200/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                  <Search size={20} className="text-gray-500" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  />
                  <kbd className="px-2 py-1 text-xs bg-white/10 rounded text-gray-500 border border-white/10">
                    ESC
                  </kbd>
                </div>

                {/* Commands List */}
                <div 
                  ref={listRef}
                  className="max-h-[400px] overflow-y-auto scrollbar-thin"
                >
                  {filteredCommands.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No commands found for &quot;{search}&quot;
                    </div>
                  ) : (
                    <div className="p-2">
                      {Object.entries(groupedCommands).map(([category, cmds]) => (
                        <div key={category} className="mb-2 last:mb-0">
                          <p className="px-3 py-1.5 text-xs text-gray-500 uppercase tracking-wider">
                            {categoryLabels[category] || category}
                          </p>
                          {cmds.map((cmd, idx) => {
                            const globalIndex = filteredCommands.indexOf(cmd);
                            const Icon = cmd.icon;
                            
                            return (
                              <button
                                key={cmd.id}
                                data-index={globalIndex}
                                onClick={() => executeCommand(cmd)}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                                  selectedIndex === globalIndex
                                    ? 'bg-primary-500/20 text-white'
                                    : 'text-gray-400 hover:bg-white/5'
                                }`}
                              >
                                <div className={`p-2 rounded-lg ${
                                  selectedIndex === globalIndex 
                                    ? 'bg-primary-500/30' 
                                    : 'bg-white/5'
                                }`}>
                                  <Icon size={16} />
                                </div>
                                <div className="flex-1 text-left">
                                  <p className="font-medium text-sm">{cmd.title}</p>
                                  {cmd.description && (
                                    <p className="text-xs text-gray-500">{cmd.description}</p>
                                  )}
                                </div>
                                {cmd.shortcut && (
                                  <div className="flex items-center gap-1">
                                    {cmd.shortcut.map((key, i) => (
                                      <kbd
                                        key={i}
                                        className="px-1.5 py-0.5 text-xs bg-white/10 rounded border border-white/10 text-gray-500"
                                      >
                                        {key}
                                      </kbd>
                                    ))}
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1 bg-white/10 rounded">↑↓</kbd> Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1 bg-white/10 rounded">↵</kbd> Select
                    </span>
                  </div>
                  <span>Founder OS v1.0</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

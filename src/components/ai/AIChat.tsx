// ============================================
// AI CHAT ASSISTANT - "Ask Raj" Floating Component
// Upgraded: quick buttons, typing animation,
// smart suggestions, mobile responsive, auto-scroll
// ============================================

"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Sparkles,
  Bot,
  User,
  Loader2,
  Minimize2,
  Maximize2,
  Trash2,
  ArrowRight,
  Copy,
  Check,
  Clock,
  Zap,
  Brain,
  MessageSquare,
  Code,
  Briefcase,
  GraduationCap,
  Rocket,
  Github,
  Download,
  FolderOpen,
  Mail,
} from 'lucide-react';
import { useAIChat } from '@/context/AIChatContext';
import { sanitizeUrl } from '@/lib/utils';

// ============================================
// MARKDOWN RENDERER - Lightweight Custom
// ============================================

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let codeBlock = false;
  let codeContent = '';
  let codeKey = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block toggle
    if (line.trim().startsWith('```')) {
      if (codeBlock) {
        elements.push(
          <div key={`code-${codeKey++}`} className="my-2 rounded-lg overflow-hidden">
            <pre className="bg-black/30 dark:bg-black/40 border border-white/10 rounded-lg p-3 overflow-x-auto">
              <code className="text-xs font-mono text-emerald-300 leading-relaxed">{codeContent.trim()}</code>
            </pre>
          </div>
        );
        codeContent = '';
        codeBlock = false;
      } else {
        codeBlock = true;
      }
      continue;
    }

    if (codeBlock) {
      codeContent += line + '\n';
      continue;
    }

    // Empty line = spacing
    if (!line.trim()) {
      elements.push(<div key={`br-${i}`} className="h-2" />);
      continue;
    }

    // Bullet list items
    if (/^[\s]*[-•*]\s/.test(line)) {
      const content = line.replace(/^[\s]*[-•*]\s/, '');
      elements.push(
        <div key={`li-${i}`} className="flex gap-2 items-start pl-1 py-0.5">
          <span className="text-primary-400 mt-1.5 text-[6px]">●</span>
          <span>{renderInlineMarkdown(content)}</span>
        </div>
      );
      continue;
    }

    // Numbered list items
    if (/^\s*\d+[.)]\s/.test(line)) {
      const match = line.match(/^\s*(\d+)[.)]\s(.*)/);
      if (match) {
        elements.push(
          <div key={`ol-${i}`} className="flex gap-2 items-start pl-1 py-0.5">
            <span className="text-primary-400 font-semibold text-xs min-w-[16px]">{match[1]}.</span>
            <span>{renderInlineMarkdown(match[2])}</span>
          </div>
        );
        continue;
      }
    }

    // Regular paragraph
    elements.push(
      <span key={`p-${i}`} className="block">
        {renderInlineMarkdown(line)}
      </span>
    );
  }

  return elements;
}

function renderInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Inline code: `text`
    const codeMatch = remaining.match(/`([^`]+?)`/);
    // Link: [text](url)
    const linkMatch = remaining.match(/\[([^\]]+?)\]\(([^)]+?)\)/);

    // Find earliest match
    const matches = [
      boldMatch ? { type: 'bold', match: boldMatch, index: boldMatch.index! } : null,
      codeMatch ? { type: 'code', match: codeMatch, index: codeMatch.index! } : null,
      linkMatch ? { type: 'link', match: linkMatch, index: linkMatch.index! } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const earliest = matches[0]!;
    
    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    switch (earliest.type) {
      case 'bold':
        parts.push(<strong key={`b-${key++}`} className="font-bold text-white/95">{earliest.match[1]}</strong>);
        break;
      case 'code':
        parts.push(
          <code key={`c-${key++}`} className="px-1.5 py-0.5 rounded bg-white/10 text-emerald-300 text-xs font-mono">
            {earliest.match[1]}
          </code>
        );
        break;
      case 'link': {
        const safeHref = sanitizeUrl(earliest.match[2], {
          allowRelative: true,
          allowHash: true,
        });
        parts.push(
          <a key={`l-${key++}`} href={safeHref} target="_blank" rel="noopener noreferrer nofollow" 
             className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors">
            {earliest.match[1]}
          </a>
        );
        break;
      }
    }

    remaining = remaining.slice(earliest.index + earliest.match[0].length);
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>;
}

// ============================================
// MESSAGE BUBBLE - ENHANCED
// ============================================

interface MessageBubbleProps {
  role: 'USER' | 'ASSISTANT' | 'SYSTEM';
  content: string;
  isStreaming?: boolean;
  timestamp?: string;
}

function MessageBubble({ role, content, isStreaming, timestamp }: MessageBubbleProps) {
  const isUser = role === 'USER';
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);
  
  if (role === 'SYSTEM') return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  }) : null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-3 group ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {/* Avatar */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-semibold text-xs shadow-md ${
          isUser 
            ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700' 
            : isDark ? 'bg-gradient-to-br from-accent/90 via-primary-500 to-primary-600' : 'bg-gradient-to-br from-primary-500 via-primary-600 to-accent'
        }`}>
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </motion.div>
      
      {/* Message Content */}
      <div className="max-w-[80%]">
        <div className={`px-4 py-3 rounded-2xl transition-all duration-200 ${
          isUser
            ? isDark 
              ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-tr-md shadow-lg shadow-primary-500/20'
              : 'bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-tr-md shadow-lg shadow-primary-500/20'
            : isDark 
              ? 'bg-white/8 text-gray-100 rounded-tl-md border border-white/15 shadow-lg shadow-black/20 backdrop-blur-sm'
              : 'bg-gray-100 text-gray-900 rounded-tl-md border border-gray-200 shadow-lg shadow-gray-300/20'
        }`}>
          <div className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
            {isUser ? content : renderMarkdown(content)}
            {isStreaming && (
              <span className="inline-block w-2 h-4 ml-1 bg-current animate-pulse rounded-sm" />
            )}
          </div>
        </div>
        
        {/* Footer: timestamp + copy */}
        <div className={`flex items-center gap-2 mt-1 px-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
          {formattedTime && (
            <span className={`text-[10px] flex items-center gap-1 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              <Clock size={9} />
              {formattedTime}
            </span>
          )}
          {!isUser && !isStreaming && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              className={`p-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                isDark ? 'hover:bg-white/10 text-gray-500 hover:text-gray-300' : 'hover:bg-gray-200 text-gray-400 hover:text-gray-600'
              }`}
              title="Copy message"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// TYPING INDICATOR
// ============================================

function TypingIndicator() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center ${
        isDark 
          ? 'from-accent/90 via-primary-500 to-primary-600' 
          : 'from-primary-500 via-primary-600 to-accent'
      }`}>
        <Bot size={16} className="text-white" />
      </div>
      <div className={`rounded-2xl rounded-tl-md px-4 py-3 shadow-lg ${
        isDark
          ? 'bg-white/8 border border-white/15 shadow-black/20 backdrop-blur-sm'
          : 'bg-gray-100 border border-gray-200 shadow-gray-300/20'
      }`}>
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          <span className={`text-xs ml-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Thinking...</span>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// SUGGESTED QUESTIONS - WITH CATEGORIES
// ============================================

const questionCategories = [
  {
    icon: Code,
    label: "Technical",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/20",
    questions: [
      "What are Raj's technical skills?",
      "What programming languages does Raj use?",
      "Tell me about Raj's projects",
    ],
  },
  {
    icon: Rocket,
    label: "Startups",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10 border-orange-500/20",
    questions: [
      "Tell me about Bastra startup",
      "What is Elysian Official?",
      "Describe Raj's entrepreneurial journey",
    ],
  },
  {
    icon: GraduationCap,
    label: "Background",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10 border-blue-500/20",
    questions: [
      "What's Raj's educational background?",
      "Tell me about Raj's leadership roles",
      "What are Raj's achievements?",
    ],
  },
  {
    icon: Briefcase,
    label: "Collaborate",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10 border-purple-500/20",
    questions: [
      "How can I contact Raj?",
      "What's Raj's vision for the future?",
      "Is Raj available for freelance work?",
    ],
  },
];

function SuggestedQuestions({ onSelect }: { onSelect: (q: string) => void }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-4 w-full"
    >
      {/* Category Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {questionCategories.map((cat, idx) => (
          <motion.button
            key={cat.label}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveCategory(idx)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 whitespace-nowrap ${
              activeCategory === idx
                ? cat.bgColor + ' ' + cat.color
                : isDark
                  ? 'text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            <cat.icon size={12} />
            {cat.label}
          </motion.button>
        ))}
      </div>

      {/* Questions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-2"
        >
          {questionCategories[activeCategory].questions.map((question, index) => (
            <motion.button
              key={question}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ translateX: 4 }}
              onClick={() => onSelect(question)}
              className={`group px-4 py-2.5 text-sm text-left rounded-xl transition-all duration-200 flex items-center justify-between ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white'
                  : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-300'
              }`}
            >
              <span className="font-medium">{question}</span>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================
// QUICK ACTION BUTTONS
// ============================================

const QUICK_ACTIONS = [
  { label: "About Raj", icon: User, query: "Tell me about Raj Bhurtel" },
  { label: "Projects", icon: FolderOpen, query: "What are Raj's main projects?" },
  { label: "Skills", icon: Code, query: "What are Raj's technical skills?" },
  { label: "Contact", icon: Mail, query: "How can I contact Raj?" },
  { label: "GitHub", icon: Github, query: "What's on Raj's GitHub?" },
];

function QuickActions({ onSelect }: { onSelect: (q: string) => void }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap gap-1.5"
    >
      {QUICK_ACTIONS.map((action, idx) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 + idx * 0.05 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onSelect(action.query)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
            isDark
              ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white'
              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200'
          }`}
        >
          <action.icon size={12} />
          {action.label}
        </motion.button>
      ))}
    </motion.div>
  );
}

// ============================================
// SMART FOLLOW-UP SUGGESTIONS
// ============================================

const SMART_SUGGESTIONS = [
  { label: "View projects", icon: FolderOpen, query: "Show me Raj's projects" },
  { label: "Download resume", icon: Download, query: "How can I download Raj's resume?" },
  { label: "Visit GitHub", icon: Github, query: "What's Raj's GitHub profile?" },
];

function FollowUpSuggestions({ onSelect }: { onSelect: (q: string) => void }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-wrap gap-1.5 pl-10"
    >
      {SMART_SUGGESTIONS.map((item, index) => (
        <motion.button
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.06 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(item.query)}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] rounded-full font-medium transition-all ${
            isDark
              ? 'bg-primary-500/10 border border-primary-500/20 text-primary-300 hover:bg-primary-500/20 hover:text-primary-200'
              : 'bg-primary-50 border border-primary-200 text-primary-600 hover:bg-primary-100'
          }`}
        >
          <item.icon size={11} />
          {item.label}
        </motion.button>
      ))}
    </motion.div>
  );
}

// ============================================
// MAIN AI CHAT COMPONENT - ENHANCED
// ============================================

export default function AIChat() {
  const {
    isOpen,
    setIsOpen,
    messages,
    sendMessage,
    clearMessages,
    isLoading,
    isStreaming,
    streamingContent,
  } = useAIChat();

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [, setIsSpeaking] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const messageCount = messages.length;
  const maxChars = 500;

  // Show follow-ups after bot responds
  useEffect(() => {
    if (messageCount > 1 && !isLoading && !isStreaming) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg?.role === 'ASSISTANT' && lastMsg.id !== 'greeting') {
        setShowFollowUp(true);
      }
    } else {
      setShowFollowUp(false);
    }
  }, [messageCount, isLoading, isStreaming, messages]);

  // Auto-scroll: smooth for new messages, instant for streaming
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: isStreaming ? 'auto' : 'smooth' });
  }, [messages, streamingContent, showFollowUp, isStreaming]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [isOpen, setIsOpen]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognitionClass) {
        recognitionRef.current = new SpeechRecognitionClass();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          let transcript = '';
          for (let i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setInput(transcript);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }

      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const speakText = useCallback((text: string) => {
    if (!synthRef.current || !isVoiceEnabled || !text.trim()) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  }, [isVoiceEnabled]);

  const stopSpeaking = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  }, []);

  useEffect(() => {
    if (!isVoiceEnabled) {
      stopSpeaking();
    }
  }, [isVoiceEnabled, stopSpeaking]);

  const handleSubmit = useCallback(async (e?: React.FormEvent, overrideMessage?: string) => {
    e?.preventDefault();
    const rawMessage = overrideMessage ?? input;
    if (!rawMessage.trim() || isLoading) return;

    const message = rawMessage.trim();
    if (!overrideMessage) setInput('');
    setShowFollowUp(false);
    
    // Reset textarea height
    if (inputRef.current) inputRef.current.style.height = 'auto';

    const assistantText = await sendMessage(message);
    if (assistantText) speakText(assistantText);
  }, [input, isLoading, sendMessage, speakText]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setInput('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Auto-resize textarea on input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= maxChars) {
      setInput(val);
      const ta = e.target;
      ta.style.height = 'auto';
      ta.style.height = Math.min(ta.scrollHeight, 100) + 'px';
    }
  };

  // Determine if we have a real conversation (beyond just the greeting)
  const hasConversation = messages.length > 1 || (messages.length === 1 && messages[0].id !== 'greeting');

  return (
    <>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-semibold shadow-2xl transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white shadow-primary-500/40 hover:shadow-primary-500/60'
                : 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white shadow-primary-600/40 hover:shadow-primary-600/60'
            }`}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={20} />
            </motion.div>
            <span>Ask Raj</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-50 flex flex-col ${
              isExpanded
                ? 'inset-2 sm:inset-4 md:inset-8'
                : 'bottom-3 right-3 sm:bottom-6 sm:right-6 w-[calc(100vw-1.5rem)] sm:w-[380px] h-[75vh] sm:h-[600px] max-h-[calc(100vh-3rem)]'
            } rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all ${
              isDark
                ? 'bg-dark-200/98 border border-white/12 backdrop-blur-xl'
                : 'bg-white/98 border border-gray-200 backdrop-blur-xl'
            }`}
            style={{
              boxShadow: isDark 
                ? '0 20px 60px rgba(0, 0, 0, 0.6)' 
                : '0 20px 60px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-4 py-3 border-b flex-shrink-0 ${
              isDark ? 'border-white/10' : 'border-gray-100'
            }`}>
              <div className="flex items-center gap-2.5">
                <motion.div 
                  animate={{ y: [0, -1.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 via-primary-600 to-accent flex items-center justify-center shadow-lg">
                    <Bot size={18} className="text-white" />
                  </div>
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white/20" 
                  />
                </motion.div>
                <div>
                  <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Ask Raj
                  </h3>
                  <div className="flex items-center gap-1">
                    <Zap size={9} className="text-emerald-400" />
                    <p className={`text-[9px] font-semibold ${isDark ? 'text-emerald-400/80' : 'text-emerald-600'}`}>
                      AI-Powered Assistant
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Header Actions */}
              <div className="flex items-center gap-0.5">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                  className={`p-1.5 rounded-lg transition-all ${
                    isVoiceEnabled 
                      ? isDark
                        ? 'bg-primary-500/20 text-primary-300'
                        : 'bg-primary-100 text-primary-600'
                      : isDark ? 'text-gray-500 hover:text-gray-200 hover:bg-white/5' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                  title={isVoiceEnabled ? 'Disable voice' : 'Enable voice'}
                >
                  {isVoiceEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearMessages}
                  className={`p-1.5 rounded-lg transition-all ${isDark ? 'text-gray-500 hover:text-gray-200 hover:bg-white/5' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                  title="Clear chat"
                >
                  <Trash2 size={15} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`p-1.5 rounded-lg transition-all hidden md:block ${isDark ? 'text-gray-500 hover:text-gray-200 hover:bg-white/5' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                >
                  {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded-lg transition-all ${isDark ? 'text-gray-500 hover:text-gray-200 hover:bg-white/5' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                >
                  <X size={15} />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className={`flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth ${isDark ? 'bg-dark-200/50' : 'bg-gray-50/50'}`}
              style={{ minHeight: 0, overscrollBehavior: 'contain' }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {!hasConversation ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center px-2"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${
                      isDark 
                        ? 'bg-gradient-to-br from-primary-500/20 via-accent/10 to-primary-500/10' 
                        : 'bg-gradient-to-br from-primary-500/15 via-accent/10 to-primary-500/15'
                    }`}
                  >
                    <Brain size={28} className={isDark ? 'text-primary-400' : 'text-primary-500'} />
                  </motion.div>
                  <h4 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Hi! I&apos;m Raj&apos;s AI Assistant 👋
                  </h4>
                  <p className={`text-[11px] mb-3 max-w-[280px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    I can tell you about his projects, skills, startups, and experience. Try a quick option or ask anything!
                  </p>
                  
                  {/* Feature badges */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {[
                      { icon: Zap, label: "Fast Streaming" },
                      { icon: Brain, label: "Context-Aware" },
                      { icon: MessageSquare, label: "Voice Support" },
                    ].map((feature) => (
                      <span key={feature.label} className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-medium ${
                        isDark ? 'bg-white/5 text-gray-400 border border-white/10' : 'bg-gray-100 text-gray-500 border border-gray-200'
                      }`}>
                        <feature.icon size={8} />
                        {feature.label}
                      </span>
                    ))}
                  </div>

                  {/* Quick action buttons */}
                  <QuickActions onSelect={(q) => handleSubmit(undefined, q)} />

                  <div className="mt-4 w-full">
                    <SuggestedQuestions onSelect={(q) => handleSubmit(undefined, q)} />
                  </div>
                </motion.div>
              ) : (
                <>
                  {messages.map((message) => (
                    <MessageBubble
                      key={message.id}
                      role={message.role}
                      content={message.content}
                      timestamp={message.timestamp}
                    />
                  ))}
                  
                  {isStreaming && streamingContent && (
                    <MessageBubble
                      role="ASSISTANT"
                      content={streamingContent}
                      isStreaming
                    />
                  )}
                  
                  {isLoading && !streamingContent && <TypingIndicator />}

                  {/* Follow-up suggestions */}
                  {showFollowUp && !isLoading && !isStreaming && (
                    <FollowUpSuggestions onSelect={(q) => handleSubmit(undefined, q)} />
                  )}
                  
                  <div ref={messagesEndRef} className="h-1" />
                </>
              )}
            </div>

            {/* Quick actions row (visible when there are messages) */}
            {hasConversation && !isLoading && (
              <div className={`px-4 py-2 border-t flex-shrink-0 ${
                isDark ? 'border-white/5 bg-dark-200/40' : 'border-gray-50 bg-white/40'
              }`}>
                <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleSubmit(undefined, action.query)}
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium whitespace-nowrap border transition-all ${
                        isDark
                          ? 'bg-white/5 border-white/8 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                          : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      <action.icon size={10} />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className={`px-4 py-3 border-t flex-shrink-0 ${isDark ? 'border-white/10 bg-dark-200/80' : 'border-gray-100 bg-white/80'}`}>
              <form onSubmit={handleSubmit} className="flex items-end gap-2">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about projects, skills, startups..."
                    rows={1}
                    className={`w-full px-3.5 py-2.5 pr-16 rounded-xl resize-none focus:outline-none focus:ring-2 transition-all text-sm ${
                      isDark
                        ? 'bg-white/8 border border-white/15 text-white placeholder-gray-500 focus:ring-primary-500/50 focus:border-primary-500/50 focus:bg-white/12'
                        : 'bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-primary-500/40 focus:border-primary-500/50 focus:bg-white'
                    }`}
                    style={{ maxHeight: '100px', fontSize: 'max(16px, 0.875rem)' }}
                  />
                  
                  {/* Voice + char count */}
                  <div className="absolute right-2.5 bottom-2 flex items-center gap-1">
                    {input.length > 0 && (
                      <span className={`text-[8px] font-mono ${
                        input.length > maxChars * 0.9 ? 'text-red-400' : isDark ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {input.length}/{maxChars}
                      </span>
                    )}
                    {recognitionRef.current && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={toggleListening}
                        className={`p-1 rounded-lg transition-all ${
                          isListening 
                            ? 'bg-red-500/30 text-red-400 animate-pulse' 
                            : isDark ? 'text-gray-500 hover:text-gray-200 hover:bg-white/5' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {isListening ? <MicOff size={14} /> : <Mic size={14} />}
                      </motion.button>
                    )}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className={`p-2.5 rounded-xl transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 ${
                    isDark
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 shadow-primary-500/30'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-primary-500/30'
                  }`}
                >
                  {isLoading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </motion.button>
              </form>

              {/* Footer */}
              <div className="flex items-center justify-center mt-1.5">
                <span className={`text-[8px] font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  Powered by RAG Pipeline
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Global type declarations for Speech Recognition
interface SpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: {
    transcript: string;
    confidence: number;
  };
}

interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionInterface {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognitionInterface;
}

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionConstructor;
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}

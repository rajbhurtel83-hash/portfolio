// ============================================
// AI CHAT CONTEXT - Offline Knowledge Base
// Works on static hosting (GitHub Pages) with
// no server/API dependencies
// ============================================

"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import type { ChatMessage } from '@/types';
import {
  aboutContent,
  achievements,
  communityWork,
  currentWork,
  heroContent,
  investingContent,
  leadershipRoles,
  professionalSummary,
  projects,
  siteConfig,
  skillCategories,
  startupExperience,
  experiences,
  visionContent,
  personalInterests,
  softSkills,
} from '@/data/content';

interface AIChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: ChatMessage[];
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => ChatMessage;
  clearMessages: () => void;
  isLoading: boolean;
  conversationId: string | null;
  sessionId: string;
  sendMessage: (content: string) => Promise<string | null>;
  isStreaming: boolean;
  streamingContent: string;
}

const AIChatContext = createContext<AIChatContextType | undefined>(undefined);

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

const GREETING_MESSAGE: ChatMessage = {
  id: 'greeting',
  role: 'ASSISTANT',
  content:
    "Hi 👋 I'm Raj's AI assistant! I can tell you about his projects, skills, experience, and more. Ask me anything or use the quick options below to get started.",
  timestamp: new Date().toISOString(),
};

// ============================================
// OFFLINE KNOWLEDGE BASE
// ============================================

type KnowledgeEntry = {
  keywords: string[];
  response: string;
};

function buildKnowledgeBase(): KnowledgeEntry[] {
  const skills = skillCategories
    .map((cat) => `**${cat.title}:** ${cat.skills.map((s) => `${s.name} (${s.level}%)`).join(', ')}`)
    .join('\n');

  const projectList = projects
    .map((p) => `- **${p.title}** — ${p.shortDesc} *(${p.techStack.join(', ')})*`)
    .join('\n');

  const achievementList = achievements
    .map((a) => `- **${a.title}** (${a.year}) — ${a.description}`)
    .join('\n');

  const leadershipList = leadershipRoles
    .map((r) => `- **${r.title}**, ${r.organization} — ${r.description}`)
    .join('\n');

  const startupList = startupExperience
    .map((s) => `- **${s.name}** (${s.role}) — ${s.description}`)
    .join('\n');

  const experienceList = experiences
    .map((e) => `- **${e.title}** at ${e.organization} (${e.period}) — ${e.description}`)
    .join('\n');

  return [
    {
      keywords: ['who', 'about', 'raj', 'yourself', 'introduce', 'tell me about', 'bio', 'background', 'profile'],
      response: `**Raj Bhurtel** — ${heroContent.description}\n\n${aboutContent.paragraphs.join('\n\n')}\n\n**Quick Stats:**\n${aboutContent.stats.map((s) => `- ${s.label}: **${s.value}**`).join('\n')}`,
    },
    {
      keywords: ['skill', 'technical', 'programming', 'language', 'framework', 'technology', 'tech stack', 'tools', 'what can', 'proficient'],
      response: `Here are **Raj's technical skills**:\n\n${skills}\n\n**Soft Skills:** ${softSkills.join(', ')}`,
    },
    {
      keywords: ['project', 'work', 'portfolio', 'built', 'developed', 'created', 'nirvachan', 'ball game', 'movie ticket', 'real estate', 'embedded', 'search tree'],
      response: `Here are **Raj's key projects**:\n\n${projectList}\n\nAll projects are available on [GitHub](${siteConfig.links.github}).`,
    },
    {
      keywords: ['achievement', 'award', 'accomplish', 'milestone', 'recognition', 'hult', 'prize', 'competition', 'hackathon'],
      response: `**Achievements & Milestones:**\n\n${achievementList}\n\n**Stats:** 6+ Major Projects | 2 Startups Founded | 4+ Leadership Roles | 5+ Competitions`,
    },
    {
      keywords: ['startup', 'business', 'venture', 'entrepreneur', 'elysian', 'bastra', 'found', 'brand', 'clothing', 'fashion'],
      response: `**Raj's Entrepreneurial Journey:**\n\n${startupList}\n\nRaj secured **First Runner-Up at Hult Prize (KhEC 2024)** with the Bastra sustainable thrift platform concept.`,
    },
    {
      keywords: ['experience', 'work history', 'intern', 'job', 'career', 'cybersecurity', 'professional'],
      response: `**Experience & Education:**\n\n${experienceList}`,
    },
    {
      keywords: ['education', 'study', 'college', 'university', 'degree', 'khwopa', 'purbanchal', 'semester', 'school'],
      response: `**Education:**\n\n- **Bachelor in Computer Engineering** — Khwopa Engineering College (Purbanchal University), 5th Semester (Ongoing)\n- **+2 Science (Physics Major)** — Completed 2022\n\nRaj focuses on software systems, embedded engineering, and applied innovation.`,
    },
    {
      keywords: ['leader', 'leadership', 'role', 'organization', 'club', 'ksc', 'community', 'volunteer', 'coordinate'],
      response: `**Leadership & Community Roles:**\n\n${leadershipList}\n\n**Community Work:** ${communityWork.join(' | ')}`,
    },
    {
      keywords: ['contact', 'reach', 'email', 'phone', 'connect', 'hire', 'freelance', 'available', 'message'],
      response: `**Contact Raj:**\n\n- **Email:** ${siteConfig.links.email}\n- **Phone:** ${siteConfig.links.phone}\n- **LinkedIn:** [linkedin.com/in/raj-bhurtel](${siteConfig.links.linkedin})\n- **GitHub:** [github.com/rajbhurtel83-hash](${siteConfig.links.github})\n- **Location:** Banepa, Kavre, Nepal\n\nFeel free to reach out for collaborations, opportunities, or conversations!`,
    },
    {
      keywords: ['vision', 'goal', 'future', 'plan', 'aspir', 'dream', 'ambition', 'roadmap'],
      response: `**Raj's Vision:**\n\n*"${visionContent.statement}"*\n\n${visionContent.description}\n\n**Manifesto:**\n${visionContent.manifesto.map((m) => `- ${m}`).join('\n')}\n\n**Roadmap:**\n${visionContent.goals.map((g) => `- **${g.timeframe}:** ${g.goal}`).join('\n')}`,
    },
    {
      keywords: ['invest', 'trading', 'market', 'finance', 'stock'],
      response: `**Investing & Trading:**\n\n**Focus:** ${investingContent.focus.join(', ')}\n\n${investingContent.summary}`,
    },
    {
      keywords: ['hobby', 'interest', 'personal', 'free time', 'fun', 'passion'],
      response: `**Personal Interests:** ${personalInterests.join(', ')}\n\nRaj balances engineering with an active lifestyle and entrepreneurial pursuits.`,
    },
    {
      keywords: ['resume', 'cv', 'download'],
      response: `You can view Raj's resume at [resume.txt](/resume.txt).\n\nAlternatively, scroll through this portfolio to see all of Raj's projects, skills, and experience in detail!`,
    },
    {
      keywords: ['github', 'code', 'repository', 'repo', 'open source'],
      response: `**Raj's GitHub:** [github.com/rajbhurtel83-hash](${siteConfig.links.github})\n\nYou'll find projects in C, C++, Python, JavaScript, Next.js, and embedded systems.`,
    },
    {
      keywords: ['current', 'working on', 'now', 'doing', 'focus'],
      response: `**What Raj is currently working on:**\n\n${currentWork.map((w) => `- ${w}`).join('\n')}`,
    },
  ];
}

function findBestResponse(query: string): string {
  const kb = buildKnowledgeBase();
  const lower = query.toLowerCase();
  
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of kb) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length; // longer matches = more specific
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  // Default response
  return `I don't have specific details on that, but here's what I can help with:\n\n- **About Raj** — background, education, summary\n- **Skills** — technical & soft skills\n- **Projects** — portfolio of work\n- **Startups** — entrepreneurial ventures\n- **Achievements** — awards & milestones\n- **Experience** — work & education history\n- **Contact** — how to reach Raj\n- **Vision** — goals & roadmap\n\nTry asking about any of these topics!`;
}

// Simulate streaming by revealing text gradually
function simulateStreaming(
  text: string,
  onChunk: (partial: string) => void,
  onDone: () => void
) {
  let index = 0;
  const chunkSize = 3;
  const interval = setInterval(() => {
    index += chunkSize;
    if (index >= text.length) {
      onChunk(text);
      clearInterval(interval);
      onDone();
    } else {
      onChunk(text.slice(0, index));
    }
  }, 15);
  return () => clearInterval(interval);
}

export function AIChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const sessionIdRef = useRef(generateSessionId());
  const conversationIdRef = useRef<string | null>(null);
  const [conversationId, _setConversationId] = useState<string | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const setConversationId = useCallback((id: string | null) => {
    conversationIdRef.current = id;
    _setConversationId(id);
  }, []);

  const addMessage = useCallback((message: Omit<ChatMessage, 'id' | 'timestamp'>): ChatMessage => {
    const newMessage: ChatMessage = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const clearMessages = useCallback(() => {
    if (cleanupRef.current) cleanupRef.current();
    setMessages([GREETING_MESSAGE]);
    setConversationId(null);
    setStreamingContent('');
  }, [setConversationId]);

  const sendMessage = useCallback(async (content: string): Promise<string | null> => {
    if (!content.trim() || isLoading) return null;

    addMessage({ role: 'USER', content });
    setIsLoading(true);
    setIsStreaming(true);
    setStreamingContent('');

    // Small delay to feel natural
    await new Promise((r) => setTimeout(r, 300 + Math.random() * 400));

    const response = findBestResponse(content);

    return new Promise((resolve) => {
      cleanupRef.current = simulateStreaming(
        response,
        (partial) => setStreamingContent(partial),
        () => {
          addMessage({ role: 'ASSISTANT', content: response });
          setStreamingContent('');
          setIsLoading(false);
          setIsStreaming(false);
          cleanupRef.current = null;
          resolve(response);
        }
      );
    });
  }, [addMessage, isLoading]);

  const value: AIChatContextType = {
    isOpen,
    setIsOpen,
    messages,
    addMessage,
    clearMessages,
    isLoading,
    conversationId,
    sessionId: sessionIdRef.current,
    sendMessage,
    isStreaming,
    streamingContent,
  };

  return (
    <AIChatContext.Provider value={value}>
      {children}
    </AIChatContext.Provider>
  );
}

export function useAIChat() {
  const context = useContext(AIChatContext);
  if (context === undefined) {
    throw new Error('useAIChat must be used within an AIChatProvider');
  }
  return context;
}

export default AIChatProvider;

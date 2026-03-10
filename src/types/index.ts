// ============================================
// FOUNDER OPERATING SYSTEM - TYPE DEFINITIONS
// ============================================

// ============================================
// DATABASE TYPES (Mapped from Prisma)
// ============================================

export type Role = 'ADMIN' | 'EDITOR' | 'VIEWER';

export type ExperienceType = 'WORK' | 'EDUCATION' | 'LEADERSHIP' | 'VOLUNTEER' | 'INTERNSHIP';

export type ProjectCategory = 
  | 'SYSTEMS_PROGRAMMING'
  | 'FULL_STACK'
  | 'ENTREPRENEURSHIP'
  | 'AI_ML'
  | 'EMBEDDED'
  | 'ROBOTICS'
  | 'WEB_APP'
  | 'MOBILE_APP'
  | 'BLOCKCHAIN'
  | 'CYBERSECURITY'
  | 'OTHER';

export type ProjectStatus = 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED' | 'CONCEPT';

export type StartupStage = 
  | 'IDEA'
  | 'MVP'
  | 'EARLY_TRACTION'
  | 'GROWTH'
  | 'SCALE'
  | 'ACQUIRED'
  | 'CLOSED';

export type AchievementType = 
  | 'AWARD'
  | 'CERTIFICATION'
  | 'RECOGNITION'
  | 'PUBLICATION'
  | 'COMPETITION'
  | 'SCHOLARSHIP'
  | 'OTHER';

export type MilestoneStatus = 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'DELAYED';

export type InquiryType = 
  | 'GENERAL'
  | 'COLLABORATION'
  | 'HIRING'
  | 'INVESTMENT'
  | 'SPEAKING'
  | 'OTHER';

export type InquiryStatus = 'NEW' | 'READ' | 'RESPONDED' | 'ARCHIVED';

export type MessageRole = 'USER' | 'ASSISTANT' | 'SYSTEM';

export type PostStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export type ContentType = 'TEXT' | 'RICH_TEXT' | 'JSON' | 'MARKDOWN';

// ============================================
// API TYPES
// ============================================

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// ============================================
// AUTH TYPES
// ============================================

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  avatar?: string;
}

export interface AuthTokenPayload {
  userId: string;
  email: string;
  role: Role;
  iat?: number;
  exp?: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthSession {
  user: AuthUser;
  token: string;
  expiresAt: string;
}

// ============================================
// AI CHAT TYPES
// ============================================

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  isStreaming?: boolean;
}

export interface ChatConversation {
  id: string;
  messages: ChatMessage[];
  sessionId: string;
  createdAt: string;
}

export interface AIRequest {
  message: string;
  conversationId?: string;
  sessionId: string;
  context?: Record<string, unknown>;
}

export interface AIResponse {
  message: string;
  conversationId: string;
  tokensUsed?: number;
  sources?: KnowledgeSource[];
}

export interface KnowledgeSource {
  documentId: string;
  title: string;
  relevance: number;
  excerpt: string;
}

// ============================================
// VOICE AI TYPES
// ============================================

export interface VoiceState {
  isListening: boolean;
  isProcessing: boolean;
  isSpeaking: boolean;
  transcript: string;
  error?: string;
}

export interface VoiceConfig {
  language: string;
  voice: string;
  pitch: number;
  rate: number;
}

// ============================================
// VIEWER MODE TYPES
// ============================================

export type ViewMode = 'default' | 'investor' | 'engineer';

export interface ViewModeContext {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  isInvestorMode: boolean;
  isEngineerMode: boolean;
}

// ============================================
// CONTENT TYPES
// ============================================

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  imageUrl?: string;
  images: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  techStack: string[];
  features: string[];
  metrics?: Record<string, unknown>;
  status: ProjectStatus;
  isFeatured: boolean;
}

export interface Startup {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  businessModel?: string;
  targetMarket?: string;
  logoUrl?: string;
  coverUrl?: string;
  websiteUrl?: string;
  industry: string[];
  stage: StartupStage;
  role: string;
  isActive: boolean;
  foundedDate?: string;
  metrics?: Record<string, unknown>;
  teamSize?: number;
  fundingRaised?: string;
  isFeatured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  isOngoing: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  logoUrl?: string;
  isFeatured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  organization?: string;
  date: string;
  type: AchievementType;
  imageUrl?: string;
  certificateUrl?: string;
  isFeatured: boolean;
}

export interface Leadership {
  id: string;
  title: string;
  organization: string;
  description: string;
  responsibilities: string[];
  impact?: string;
  startDate: string;
  endDate?: string;
  isOngoing: boolean;
  logoUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon?: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  yearsExp?: number;
  icon?: string;
  isCore: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating?: number;
  linkedInUrl?: string;
  isVerified: boolean;
}

// ============================================
// INVESTOR MODE TYPES
// ============================================

export interface InvestorContent {
  missionStatement: string;
  visionStatement: string;
  philosophyPoints: string[];
  marketInsights: {
    industry: string;
    trends: string[];
    opportunities: string[];
  };
  scalabilityPlan: {
    phase: string;
    timeline: string;
    goals: string[];
  }[];
  metrics: {
    totalProjects: number;
    activeVentures: number;
    teamCollaborations: number;
    technologiesUsed: number;
  };
  roadmap: RoadmapItem[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  targetDate: string;
  status: MilestoneStatus;
  category: string;
}

// ============================================
// ENGINEER MODE TYPES
// ============================================

export interface EngineerContent {
  architectureDiagram: string;
  techPhilosophy: string;
  codePhilosophy: string;
  devWorkflow: string;
  agileExperience: string;
  systemsDesign: {
    title: string;
    description: string;
    diagram?: string;
  }[];
  preferredTools: {
    category: string;
    tools: string[];
  }[];
}

// ============================================
// COMMAND PALETTE TYPES
// ============================================

export interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  shortcut?: string;
  action: () => void;
  category: 'navigation' | 'action' | 'theme' | 'mode' | 'easter-egg';
}

// ============================================
// ANALYTICS TYPES
// ============================================

export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgSessionDuration: number;
  topPages: { path: string; views: number }[];
  topReferrers: { source: string; visits: number }[];
  deviceBreakdown: { device: string; percentage: number }[];
  countryBreakdown: { country: string; visits: number }[];
}

export interface TrackingEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

// ============================================
// GITHUB INTEGRATION TYPES
// ============================================

export interface GitHubActivity {
  type: string;
  repo: string;
  repoUrl: string;
  message?: string;
  timestamp: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalCommits: number;
  contributions: number;
}

// ============================================
// ADMIN DASHBOARD TYPES
// ============================================

export interface DashboardStats {
  totalPageViews: number;
  totalProjects: number;
  totalInquiries: number;
  totalSubscribers: number;
  aiConversations: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

// ============================================
// FORM TYPES
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  type: InquiryType;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
  source?: string;
}

// ============================================
// UI COMPONENT TYPES
// ============================================

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AnimationConfig {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}

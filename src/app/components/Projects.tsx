import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Github, Play } from 'lucide-react';
import aldiTalkImage from '@/assets/AldiTalk.png';

interface Project {
  id: number;
  name: string;
  role: string;
  techStack: string[];
  summary: string;
  highlights: string[];
  url?: string;
  primaryUrl?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  certUrl?: string;
  videoUrl?: string;
  companyUrl?: string;
  showCaseStudy?: boolean;
  isGithubCard?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'EaglAI Intelligence',
    role: 'Main Developer (Full-Stack)',
    techStack: ['React', 'Grafana', 'PostgreSQL', 'TimescaleDB', 'Nginx', 'Python', 'FastAPI', 'Celery', 'Systemd', 'Textual', 'Docker', 'FTP', 'Debian Packaging'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    companyUrl: 'https://www.senquire.com/',
    primaryUrl: 'https://www.senquire.com/',
    primaryLabel: 'View Company Site',
    secondaryLabel: 'Watch a Demo',
    summary: 'Built a packaged Advanced Analytics Intelligence system covering frontend, backend, deployment, and system tooling for offline/air-gapped use.',
    highlights: [
      'Built React UI, Python backend, and Nginx delivery layer with production packaging',
      'Implemented Textual TUI for config, automated dependency installs, and systemd services/logs',
      'Enabled networking/FTP workflows and Dockerized test runs for the PQE team',
    ],
  },
  {
    id: 2,
    name: 'AldiTalk: Singapore Dialect Translator for Elderly Use',
    role: 'Data Sourcing, Model Training & UI/UX',
    techStack: ['Flask', 'Python', 'JavaScript', 'Azure STT/TTS', 'Azure Translator', 'GPT-4o', 'Hugging Face', 'Meta MMS-TTS-NAN'],
    summary: 'Speech-to-speech translation web app for care homes, enabling real-time Hokkien/Cantonese translation with an elderly-friendly UI.',
    highlights: [
      'Collected and curated dialect data from volunteer recordings with augmentation',
      'Trained and tuned STT/TTS pipeline (Azure Custom Speech + Hokkien flow)',
      'Designed senior-friendly UI for assisted communication in care settings',
    ],
    videoUrl: 'https://www.youtube.com/embed/GFAS6MAVhic',
    url: 'https://github.com/habibmohammad35/AldiTalk',
  },
  {
    id: 3,
    name: 'CAIE Associate Capstone (Kedro Pipeline)',
    role: 'Solo Developer',
    techStack: ['Python', 'Kedro', 'LightGBM', 'XGBoost', 'Logistic Regression'],
    url: 'https://github.com/habibmohammad35/caie-nyp-mohammad-habib',
    certUrl: 'https://certificates.aisingapore.org/certificate-verification/1275F2B00-1275F2A9F-1274FE606/',
    summary: 'Built a full ML pipeline for CAIE certification using Kedro, from data cleaning to feature engineering, modeling, and fine-tuning.',
    highlights: [
      'Modular pipelines for data processing, feature engineering, modeling, and tuning',
      'Introduced weak-rule feature flags to capture high-signal patterns',
      'Reproducible Kedro pipeline with modular stages and configs',
    ],
  },
  {
    id: 4,
    name: 'AviDefender: Bird Detection for Hawker Centres',
    role: 'AI & IoT Developer (Team Project)',
    techStack: ['Raspberry Pi', 'YOLOv11 TFLite', 'Flask', 'MQTT', 'Arduino', 'MySQL', 'CAD'],
    summary: 'Real-time AI bird detector and deterrent for hawker centres, with live dashboard, alerts, and logging to protect tray stations.',
    highlights: [
      'Edge inference on Raspberry Pi with YOLOv11 TFLite + live video dashboard',
      'MQTT pipeline to Arduino deterrent and Sense HAT visualization',
      'MySQL logging, CSV export, and real-time staff alerts',
    ],
    videoUrl: 'https://www.youtube.com/embed/6p_sFcpTxOY',
    url: 'https://github.com/habibmohammad35/bird-detection-with-Pi4B',
  },
  {
    id: 5,
    name: 'View More on GitHub',
    role: 'Explore Additional My Projects',
    techStack: [],
    summary: 'Check out my GitHub profile for more projects and code samples.',
    highlights: [
      'Browse through repositories showcasing various technologies',
      'Explore code samples and experimental work',
    ],
    isGithubCard: true,
  },
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const openVideo = (url: string) => {
    setActiveVideo(url);
    setIsAutoPlaying(false);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (!isAutoPlaying || activeVideo) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeVideo]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const getVisibleProjects = () => {
    const prev = (activeIndex - 1 + projects.length) % projects.length;
    const next = (activeIndex + 1) % projects.length;
    return { prev, current: activeIndex, next };
  };

  const visible = getVisibleProjects();

  return (
    <section id="projects" className="min-h-screen bg-white px-6 lg:px-12 pt-32 pb-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2
            className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            These are the projects that are the most meaningful to me, ranging from accomplished projects to projects born from the fruits of my labour.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Previous Card (Left) */}
            <motion.div
              key={`prev-${visible.prev}`}
              className="absolute left-0 w-72 opacity-40 blur-sm pointer-events-none"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={projects[visible.prev]} isActive={false} onPlayVideo={openVideo} />
            </motion.div>

            {/* Active Card (Center) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`active-${visible.current}`}
                className="relative z-10 w-full max-w-3xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ProjectCard project={projects[visible.current]} isActive={true} onPlayVideo={openVideo} />
              </motion.div>
            </AnimatePresence>

            {/* Next Card (Right) */}
            <motion.div
              key={`next-${visible.next}`}
              className="absolute right-0 w-72 opacity-40 blur-sm pointer-events-none"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={projects[visible.next]} isActive={false} onPlayVideo={openVideo} />
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={activeVideo}
              title="Project Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 bg-white/90 text-gray-900 rounded-full w-9 h-9 flex items-center justify-center"
              aria-label="Close video"
            >
              ×
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onPlayVideo?: (url: string) => void;
}

function ProjectCard({ project, isActive, onPlayVideo }: ProjectCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border-2 transition-all ${
        isActive ? 'border-gray-900 shadow-2xl' : 'border-gray-200 shadow-md'
      }`}
    >
      <div className="p-8 lg:p-10 space-y-6">
        {/* Project Name */}
        <div>
          <h3
            className={`font-bold tracking-tight ${
              isActive ? 'text-3xl lg:text-4xl' : 'text-2xl'
            } text-gray-900`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {project.name}
          </h3>
          <p
            className="text-blue-600 mt-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {project.role}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p
          className="text-gray-600 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {project.summary}
        </p>

        {/* Highlights - Only show when active */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-3"
          >
            <h4
              className="font-semibold text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* CTAs - Only show when active */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            {project.isGithubCard ? (
              <a
                href="https://github.com/habibmohammad35"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 group text-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Visit My GitHub
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ) : (
              <>
                {project.primaryUrl ? (
                  <a
                    href={project.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {project.primaryLabel || 'View Project'}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ) : project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <button
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                )}
                {project.secondaryLabel && project.videoUrl ? (
                  <button
                    onClick={() => onPlayVideo?.(project.videoUrl!)}
                    className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {project.secondaryLabel}
                    <Play className="w-4 h-4" />
                  </button>
                ) : project.companyUrl ? (
                  <a
                    href={project.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Company Site
                    <FileText className="w-4 h-4" />
                  </a>
                ) : project.certUrl ? (
                  <a
                    href={project.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Certificate
                    <FileText className="w-4 h-4" />
                  </a>
                ) : project.videoUrl ? (
                  <button
                    onClick={() => onPlayVideo?.(project.videoUrl!)}
                    className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Watch a Demo
                    <Play className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Case Study
                    <FileText className="w-4 h-4" />
                  </button>
                )}
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
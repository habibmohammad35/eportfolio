import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Github } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  role: string;
  techStack: string[];
  summary: string;
  highlights: string[];
  isGithubCard?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'AI-Powered Analytics Platform',
    role: 'Lead Full-Stack Engineer',
    techStack: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
    summary: 'Built an end-to-end analytics platform with ML-driven insights for enterprise clients.',
    highlights: [
      'Reduced query times by 60% through optimized data pipelines',
      'Integrated custom LLM for natural language queries',
      'Deployed on Kubernetes with 99.9% uptime',
    ],
  },
  {
    id: 2,
    name: 'Real-Time Data Streaming System',
    role: 'Data Engineering Architect',
    techStack: ['Kafka', 'Spark', 'TimescaleDB', 'Grafana', 'AWS'],
    summary: 'Designed scalable streaming infrastructure processing 100M+ events daily.',
    highlights: [
      'Achieved sub-second latency for real-time processing',
      'Built comprehensive monitoring with Prometheus & Grafana',
      'Automated deployment with CI/CD pipelines',
    ],
  },
  {
    id: 3,
    name: 'Enterprise DevOps Automation Suite',
    role: 'DevOps Lead',
    techStack: ['Kubernetes', 'Docker', 'GitHub Actions', 'Nginx', 'Terraform'],
    summary: 'Created automated deployment system reducing release times from days to hours.',
    highlights: [
      'Reduced deployment errors by 85% with automated testing',
      'Implemented blue-green deployment strategies',
      'Established comprehensive logging and alerting',
    ],
  },
  {
    id: 4,
    name: 'Machine Learning Operations Platform',
    role: 'ML Engineer & Platform Architect',
    techStack: ['PyTorch', 'Kedro', 'MLflow', 'FastAPI', 'Redis'],
    summary: 'Built MLOps platform enabling rapid model deployment and experimentation.',
    highlights: [
      'Accelerated model training by 3x with distributed computing',
      'Created automated model versioning and rollback system',
      'Integrated A/B testing framework for model performance',
    ],
  },
  {
    id: 5,
    name: 'View More on GitHub',
    role: 'Explore Additional Projects',
    techStack: [],
    summary: 'Check out my GitHub profile for more projects, open-source contributions, and code samples.',
    highlights: [
      'Browse through repositories showcasing various technologies',
      'View contributions to open-source projects',
      'Explore code samples and experimental work',
    ],
    isGithubCard: true,
  },
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
            These are the projects that are the most meaningful to me, ranging from accomplished projects to projects born from the fruits of my labour
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
              <ProjectCard project={projects[visible.prev]} isActive={false} />
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
                <ProjectCard project={projects[visible.current]} isActive={true} />
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
              <ProjectCard project={projects[visible.next]} isActive={false} />
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
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

function ProjectCard({ project, isActive }: ProjectCardProps) {
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
                <button
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 group"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button
                  className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Case Study
                  <FileText className="w-4 h-4" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
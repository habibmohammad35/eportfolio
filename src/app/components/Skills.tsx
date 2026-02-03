import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface SkillNode {
  id: string;
  name: string;
  skills: string[];
  x: number;
  y: number;
  connections: string[];
}

// More spaced out constellation layout
const skillNodes: SkillNode[] = [
  {
    id: 'ai-ml',
    name: 'AI / Machine Learning',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'LLM Integration', 'Ollama', 'Model Fine-tuning', 'AI Model Tuning', 'EDA'],
    x: 10,
    y: 35,
    connections: ['data-eng'],
  },
  {
    id: 'data-eng',
    name: 'Data Engineering',
    skills: ['PostgreSQL', 'TimescaleDB', 'Kafka', 'Spark', 'Kedro', 'Pandas', 'Polars', 'Pyarrow', 'Matplotlib', 'Seaborn (SNS)'],
    x: 28,
    y: 15,
    connections: ['observability', 'fullstack'],
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Development',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    x: 50,
    y: 30,
    connections: ['devops', 'systems'],
  },
  {
    id: 'devops',
    name: 'DevOps & Production',
    skills: ['Docker', 'Kubernetes', 'Nginx', 'CI/CD', 'AWS', 'GitHub'],
    x: 75,
    y: 20,
    connections: [],
  },
  {
    id: 'observability',
    name: 'Observability',
    skills: ['Grafana', 'Prometheus', 'Metrics & Alerting', 'Logs/Tracing'],
    x: 30,
    y: 70,
    connections: [],
  },
  {
    id: 'systems',
    name: 'Systems Engineering',
    skills: ['Linux', 'Bash', 'Networking', 'Security Basics', 'Packaging', 'CAD'],
    x: 70,
    y: 75,
    connections: ['soft'],
  },
  {
    id: 'soft',
    name: 'Soft Skills',
    skills: ['Leadership', 'Communication', 'Resilient', 'Responsible', 'Inquisitive'],
    x: 85,
    y: 50,
    connections: [],
  },
];

export function Skills() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const update = () => {
      const { width, height } = element.getBoundingClientRect();
      setDims({ width, height });
    };
    update();
    const observer = new ResizeObserver(() => update());
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const scaleX = dims.width / 100;
  const scaleY = dims.height / 100;
  const hasDims = dims.width > 0 && dims.height > 0;

  const getNodeById = (id: string) => skillNodes.find(n => n.id === id);

  return (
    <section id="skills" className="h-screen bg-gray-950 text-white px-6 lg:px-12 pt-24 pb-12 relative overflow-hidden flex items-center">
      {/* Starfield background */}
      <div className="absolute inset-0 opacity-50">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [Math.random() * 0.7 + 0.3, Math.random() * 0.3, Math.random() * 0.7 + 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2
            className="text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            My Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            An interconnected skill set built through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Constellation Network */}
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto" style={{ height: '450px' }}>
          {/* Connection Lines - faint lines between dots */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${dims.width} ${dims.height}`}
            preserveAspectRatio="none"
          >
            {skillNodes.map((node) =>
              node.connections.map((connId) => {
                const targetNode = getNodeById(connId);
                if (!targetNode) return null;
                
                const isHighlighted = hoveredNode === node.id || hoveredNode === connId;
                
                return (
                  <motion.line
                    key={`${node.id}-${connId}`}
                    x1={hasDims ? node.x * scaleX : node.x}
                    y1={hasDims ? node.y * scaleY : node.y}
                    x2={hasDims ? targetNode.x * scaleX : targetNode.x}
                    y2={hasDims ? targetNode.y * scaleY : targetNode.y}
                    stroke={isHighlighted ? 'rgba(96, 165, 250, 0.9)' : 'rgba(96, 165, 250, 0.5)'}
                    strokeWidth={isHighlighted ? 1.5 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  />
                );
              })
            )}
          </svg>

          {/* Skill Nodes - just dots, no circles */}
          {skillNodes.map((node, index) => (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                zIndex: hoveredNode === node.id ? 200 : 10,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="relative cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      scale: hoveredNode === node.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing effect */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        className="rounded-full blur-xl"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.5), transparent)',
                        }}
                        animate={{
                          opacity: hoveredNode === node.id ? 1 : 0.4,
                          scale: hoveredNode === node.id ? 1.3 : 1,
                        }}
                      />
                    </div>

                    {/* Large dot only - no circle border */}
                    <div className="relative w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full shadow-lg shadow-blue-500/60" />

                    {/* Label */}
                    <motion.div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredNode === node.id ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p
                        className="text-lg font-semibold text-white text-center"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {node.name}
                      </p>
                    </motion.div>

                    {/* Skills popup on hover - centered and larger */}
                    <motion.div
                      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[100]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredNode === node.id ? 1 : 0,
                        scale: hoveredNode === node.id ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-gray-900/98 backdrop-blur-lg border border-blue-400/50 rounded-2xl p-6 shadow-2xl w-[420px]">
                        <h4
                          className="text-2xl font-bold text-white mb-6 text-center"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {node.name}
                        </h4>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {node.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full text-base"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}

        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-lg text-gray-400"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Interactive skill map. Hover to explore.
        </motion.div>
      </div>
    </section>
  );
}
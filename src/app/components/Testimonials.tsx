import { motion } from 'motion/react';
import { Linkedin, Quote } from 'lucide-react';
import professorZhao from '@/assets/drzhao.png';
import tianyouLuo from '@/assets/Daniel.jpeg';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  linkedinUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Placeholder",
    name: "Dr. Zhao ZhiQiang",
    role: "Lecturer, Nanyang Polytechnic — AI & Data Engineering",
    company: "Professor for core AI modules | NUS Alumni (PhD, Mechanical Engineering)",
    imageUrl: professorZhao,
    linkedinUrl: "https://www.linkedin.com/in/zhiqiang-zhao-a6877318b/",
  },
  {
    id: 2,
    quote: "Placeholder",
    name: "TianYou Luo",
    role: "Internship Supervisor",
    company: "Senquire Pte LTD | NUS Alumni (B.CompSci, 2021–2025)",
    imageUrl: tianyouLuo,
    linkedinUrl: "https://www.linkedin.com/in/tian-you-luo/",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen bg-white px-6 lg:px-12 pt-32 pb-24 flex items-center">
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
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Words from my lecturer and supervisor, who have witnessed my attitude towards learning & my tenacity at work.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Profile Photo - Portrait size on the left */}
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-full mx-auto md:mx-0 md:ml-8 md:my-8">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-gray-200">
                    <Quote className="w-12 h-12" />
                  </div>

                  {/* Quote Text */}
                  <div className="mb-8 relative z-10">
                    <p
                      className="text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <h4
                        className="font-semibold text-gray-900 text-lg"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm text-gray-600 mt-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {testimonial.role}
                      </p>
                      <p
                        className="text-sm text-gray-500"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {testimonial.company}
                      </p>
                    </div>

                    {/* LinkedIn Link */}
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors p-3 hover:bg-blue-50 rounded-lg"
                      aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
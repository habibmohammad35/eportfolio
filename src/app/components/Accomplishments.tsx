import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface AccomplishmentImage {
  id: number;
  url: string;
  title: string;
  gridSize: string;
}

const images: AccomplishmentImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?w=800&h=600&fit=crop',
    title: 'AWS Certified Solutions Architect',
    gridSize: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1560523159-94c9d18bcf27?w=600&h=600&fit=crop',
    title: 'Tech Conference Speaker',
    gridSize: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=600&h=600&fit=crop',
    title: 'Team Leadership Award',
    gridSize: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?w=600&h=800&fit=crop',
    title: 'Hackathon Winner 2025',
    gridSize: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1767595789539-cd012af80914?w=600&h=600&fit=crop',
    title: 'Master\'s Degree in Computer Science',
    gridSize: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?w=800&h=600&fit=crop',
    title: 'Professional Training Certification',
    gridSize: 'col-span-2 row-span-1',
  },
];

export function Accomplishments() {
  const [selectedImage, setSelectedImage] = useState<AccomplishmentImage | null>(null);

  return (
    <section id="accomplishments" className="min-h-screen bg-gray-50 px-6 lg:px-12 pt-32 pb-24 flex items-center">
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
            Certs & Accomplishments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            A visual journey through certifications, awards, and memorable moments in my professional development
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${image.gridSize} group cursor-pointer relative overflow-hidden rounded-2xl`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p
                  className="text-white font-semibold text-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Image */}
                  <div className="flex items-center justify-center">
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col justify-center space-y-4">
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {selectedImage.title}
                    </h3>
                    <p
                      className="text-gray-300 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. This certification/accomplishment represents a significant milestone in professional development and technical expertise.
                    </p>
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                        Date: January 2026
                      </p>
                      <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                        Organization: Professional Institute
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
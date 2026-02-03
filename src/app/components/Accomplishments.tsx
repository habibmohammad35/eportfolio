import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import promptAward from '@/assets/prompt_award.jpg';
import iappsTeam from '@/assets/IappsTeam.jpeg';
import nkfBefriending from '@/assets/NKFbefriending.jpeg';
import aiEthicsBadge from '@/assets/484b22c7-0b5a-4d8f-95f2-d35db107e438.png';
import caieCert from '@/assets/caie_cert.png';
import nvidiaCert from '@/assets/nvidia_cert.png';
import microsoftAICert from '@/assets/microsoft_azure_ai_cert.png';

interface AccomplishmentImage {
  id: number;
  url: string;
  title: string;
  gridSize: string;
  description?: string;
  date?: string;
  organization?: string;
}

const images: AccomplishmentImage[] = [
  {
    id: 1,
    url: iappsTeam,
    title: 'I-Appreciate@SEG 2024',
    description: 'Organised by School of Engineering Club, NYP. I served as Welfare IC and stepped up to support the team across tasks during a first-time experience for many of us. My experience as an Assistant Sergeant Major in NCC helped me plan and lead volunteers effectively.',
    date: '7 Nov 2024',
    organization: 'School of Engineering Club, NYP',
    gridSize: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    url: nkfBefriending,
    title: 'NKF Befriending Session',
    description: 'Facilitated an NKF befriending session on 22 Nov, 1–3pm. I learned a lot about the struggles of those living with diabetes and what their daily life is like.',
    date: '22 Nov',
    organization: 'NKF',
    gridSize: 'col-span-1 row-span-2',
  },
  {
    id: 3,
    url: nvidiaCert,
    title: 'NVIDIA Certificate of Competency',
    description: 'Completed the NVIDIA Fundamentals of Deep Learning program, demonstrating core DL concepts and practical model building.',
    date: '15 Jan 2025',
    organization: 'NVIDIA',
    gridSize: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    url: promptAward,
    title: 'National Youth AI Prompt Design Challenge',
    description: 'Hackathon project with Min Phyo Thura. Achieved 3rd place in the National Youth AI Prompt Design Challenge.',
    date: '29 July 2024',
    organization: 'Straits Interactive & CapaBara',
    gridSize: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    url: microsoftAICert,
    title: 'Microsoft Certified: Azure AI Fundamentals',
    description: 'Foundational knowledge of machine learning and AI concepts, plus related Microsoft Azure services.',
    date: '16 Jan 2025',
    organization: 'Microsoft',
    gridSize: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    url: aiEthicsBadge,
    title: 'AI Ethics and Governance (Associate)',
    description: 'Certification in AI Ethics and Governance (Associate) issued jointly by NYP and Singapore Computer Society.',
    date: '19 Nov 2025',
    organization: 'Singapore Computer Society & NYP',
    gridSize: 'col-span-1 row-span-1',
  },
  {
    id: 7,
    url: caieCert,
    title: 'Chartered AI Engineer (CAIE) Associate',
    description: 'Successfully achieved the CAIE Associate certification, demonstrating applied AI competency across assessment and interview stages.',
    date: '30 Sept 2025',
    organization: 'AI Singapore',
    gridSize: 'col-span-1 row-span-1',
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
            Technical & Social Milestones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            A visual journey through certifications, awards, and memorable moments in my personal development.
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
                      {selectedImage.description || 'A milestone that reflects my growth across technical, social, and external experiences.'}
                    </p>
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                        Date: {selectedImage.date || '—'}
                      </p>
                      <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                        Organization: {selectedImage.organization || '—'}
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
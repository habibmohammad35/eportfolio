import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Accomplishments } from '@/app/components/Accomplishments';
import { Testimonials } from '@/app/components/Testimonials';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Accomplishments />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
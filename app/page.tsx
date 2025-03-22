import Hero from '../components/Hero/Hero';
import ProblemSolution from '../components/ProblemSolution/ProblemSolution';
import AIDemo from '../components/AIDemo/AIDemo';
import CulturalShowcase from '../components/CulturalShowcase/CulturalShowcase';
import SocialProof from '../components/SocialProof/SocialProof';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Pricing from '../components/Pricing/Pricing';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <AIDemo />
      <CulturalShowcase />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
        <div className="bg-saffron text-black px-6 py-3 rounded-full shadow-lg font-medium text-center animate-pulse-slow">
          Join 12,532 Algerians Who Love Cooking Again! <span className="ml-2">→</span>
        </div>
      </div>
    </main>
  );
}

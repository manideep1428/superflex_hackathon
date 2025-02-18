import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Code, Rocket } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import MouseLight from './components/MouseLight';
import MouseTracker from './components/MouseTracker';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="gradient-bg fixed inset-0 z-0" />
      <AnimatedBackground />
      <MouseLight />
      <MouseTracker />
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-white">
          <div ref={parallaxRef} className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm scale-in">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Welcome to the SuperFlex</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow fade-in-up delay-1">
              
              SuperFlex
              <span className="block text-4xl md:text-6xl mt-2 text-white/90 fade-in-up delay-2">
               Innovation Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 fade-in-up delay-3">
              Transform your ideas into reality with your AI Engineer
            </p>
            <button onClick={()=>("https://superasdflex.ai")} className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold 
                             transform transition-all duration-300 hover:scale-105 hover:bg-white/30
                             border border-white/30 hover:border-white/50 fade-in-up delay-4">
              Get Started
            </button>
          </div>
          
          <div className="absolute bottom-10 animate-bounce fade-in-up delay-4">
            <ArrowDown size={32} />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl fade-in-up">
              <Code className="w-10 h-10 mb-4 text-blue-300" />
              <h2 className="text-2xl font-bold mb-4 text-white">Smart Design</h2>
              <p className="text-white/90">
                Crafted with precision and attention to every detail.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl fade-in-up delay-1">
              <Rocket className="w-10 h-10 mb-4 text-purple-300" />
              <h2 className="text-2xl font-bold mb-4 text-white">Performance</h2>
              <p className="text-white/90">
                Optimized for speed without compromising on style.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl fade-in-up delay-2">
              <Sparkles className="w-10 h-10 mb-4 text-pink-300" />
              <h2 className="text-2xl font-bold mb-4 text-white">Innovation</h2>
              <p className="text-white/90">
                Pushing boundaries with cutting-edge animations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
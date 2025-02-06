import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiBarChart2, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const springScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
    // Add particle effect
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          opacity: { value: 0.1 },
          size: { value: 3 },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.1 }
        }
      });
    };
    document.body.appendChild(script);
  }, []);

  const scaleProgress = useTransform(springScrollY, [0, 1], [1, 0.8]);
  const opacityProgress = useTransform(springScrollY, [0, 1], [1, 0.3]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0f0728] to-black">
      <CustomCursor />
      
      {/* Particle effect container */}
      <div id="particles-js" className="absolute inset-0 z-0" />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black/50 animate-pulse-slow" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <Header />

      <main ref={mainRef} className="relative z-10">
        <div className="px-6 pt-32 pb-20 mx-auto max-w-7xl">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Twinning.AI
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Revolutionize your A/B testing with AI-driven digital twins. 
              Make data-driven decisions in seconds, not weeks.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 border border-purple-400/30"
                onClick={() => router.push('/create-campaign')}
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 rounded-full text-white font-semibold backdrop-blur-sm transition-all duration-300 border border-white/10"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              {
                title: "Digital Twin Technology",
                description: "Simulate consumer behavior with AI-powered digital twins trained on real data."
              },
              {
                title: "Instant Analysis",
                description: "Get actionable insights in seconds instead of waiting weeks for traditional A/B tests."
              },
              {
                title: "Data Integration",
                description: "Seamlessly integrate CRM, paid media, and social data for comprehensive insights."
              },
              {
                title: "Risk Prevention",
                description: "Identify and prevent campaign risks before launch with predictive analytics."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ delay: 0.2 * index + 1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* New Features Section */}
        <motion.section 
          className="py-32 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transform Your Marketing Strategy
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Testing",
                  description: "Replace traditional A/B testing with advanced digital twin technology for instant results.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Data Integration",
                  description: "Seamlessly combine CRM, paid media, and social data for comprehensive insights.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Risk Prevention",
                  description: "Identify and prevent campaign risks before launch with predictive analytics.",
                  gradient: "from-pink-500 to-red-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Target Industries Section */}
        <motion.section 
          className="py-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Built for Financial Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Banking", logo: "JPMorgan Chase", type: "Traditional Banking" },
                { name: "Insurance", logo: "Geico", type: "Insurance Services" },
                { name: "Fintech", logo: "American Express", type: "Financial Technology" }
              ].map((company, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-2">{company.name}</h3>
                    <p className="text-gray-400 mb-4">{company.type}</p>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
                    <p className="text-sm text-gray-500">Trusted by {company.logo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-24 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Why Choose Twinning.AI?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your marketing strategy with AI-powered insights and real-time optimization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Instant Campaign Optimization",
                  description: "Get real-time insights and optimize your campaigns instantly, without waiting for traditional A/B test results."
                },
                {
                  title: "Predictive Analytics",
                  description: "Leverage AI to predict campaign performance and identify potential risks before launch."
                },
                {
                  title: "Audience Segmentation",
                  description: "Create precise audience segments based on behavioral data and engagement patterns."
                },
                {
                  title: "Cost Reduction",
                  description: "Reduce marketing spend by testing campaigns virtually before real-world deployment."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-purple-500/30">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-24 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl" />
              <div className="relative p-12 text-center bg-black/50 backdrop-blur-xl">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Ready to Transform Your Marketing?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join leading financial institutions using Twinning.AI to revolutionize their marketing strategy.
                </p>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

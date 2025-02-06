// pages/index.jsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import Layout from '../components/Layout';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.2 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f0728] to-black relative"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <CustomCursor />

        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-500/10 rounded-full blur-xl"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-white text-transparent bg-clip-text"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { duration: 0.8, ease: "backOut" } }}
            >
              Welcome to Twinning.AI
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.3 } }}
            >
              AI-driven A/B testing with digital twin technology.
              <br />
              <span className="text-purple-400">
                Make data-driven decisions in seconds.
              </span>
            </motion.p>

            <motion.div
              className="space-y-4 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/create-campaign"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/dashboard"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  View Dashboard
                </Link>
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                {
                  icon: "🎯",
                  title: "Precise Testing",
                  description: "Get accurate A/B test results in seconds with AI-powered digital twins"
                },
                {
                  icon: "🤖",
                  title: "AI-Driven",
                  description: "Leverage machine learning for deep customer behavior analysis"
                },
                {
                  icon: "📊",
                  title: "Real-time Insights",
                  description: "Make data-driven decisions with instant campaign feedback"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

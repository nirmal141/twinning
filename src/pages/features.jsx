import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { FadeInWhenVisible, SlideInFromRight } from '../components/ScrollAnimation';

const features = [
  {
    category: "AI-Powered Digital Twins",
    icon: "🤖",
    description: "Create virtual replicas of your customer segments for accurate A/B testing",
    details: [
      {
        title: "Advanced Persona Creation",
        description: "Our AI analyzes thousands of data points to create highly accurate customer personas",
        subFeatures: [
          "Behavioral pattern analysis",
          "Demographic profiling",
          "Purchase history integration",
          "Social media sentiment analysis",
          "Real-time adaptation to new data"
        ]
      },
      {
        title: "Machine Learning Models",
        description: "Continuously improving algorithms that learn from real customer interactions",
        subFeatures: [
          "Neural network processing",
          "Natural language understanding",
          "Predictive analytics",
          "Adaptive learning systems",
          "Pattern recognition"
        ]
      }
    ]
  },
  {
    category: "Campaign Simulation",
    icon: "🎯",
    description: "Test marketing campaigns in a virtual environment before real-world launch",
    details: [
      {
        title: "Real-time Testing",
        description: "Instant feedback on campaign performance across different segments",
        subFeatures: [
          "Immediate response simulation",
          "Multi-variant testing",
          "Segment-specific insights",
          "Conversion prediction",
          "Risk assessment"
        ]
      },
      {
        title: "Scenario Analysis",
        description: "Explore multiple campaign variations and their potential outcomes",
        subFeatures: [
          "What-if analysis",
          "Market condition simulation",
          "Competitive response modeling",
          "Budget optimization",
          "ROI forecasting"
        ]
      }
    ]
  },
  {
    category: "Analytics & Insights",
    icon: "📊",
    description: "Comprehensive analytics suite for deep campaign understanding",
    details: [
      {
        title: "Advanced Reporting",
        description: "Detailed insights into campaign performance and customer behavior",
        subFeatures: [
          "Custom dashboard creation",
          "Real-time metrics tracking",
          "Automated report generation",
          "Data visualization tools",
          "Export capabilities"
        ]
      },
      {
        title: "Predictive Analytics",
        description: "AI-driven predictions for future campaign performance",
        subFeatures: [
          "Trend analysis",
          "Customer behavior prediction",
          "Market opportunity identification",
          "Risk assessment",
          "Revenue forecasting"
        ]
      }
    ]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Data Integration",
    description: "Connect your customer data sources to our platform",
    details: "Seamlessly integrate CRM systems, analytics tools, and social media data to create a comprehensive customer profile database.",
    icon: "🔄"
  },
  {
    step: 2,
    title: "Digital Twin Generation",
    description: "AI creates accurate virtual customer personas",
    details: "Our advanced algorithms analyze your data to generate detailed digital twins that mirror real customer behaviors and preferences.",
    icon: "👥"
  },
  {
    step: 3,
    title: "Campaign Setup",
    description: "Design your marketing campaign variations",
    details: "Create multiple versions of your campaign to test different approaches, messaging, and creative elements.",
    icon: "✨"
  },
  {
    step: 4,
    title: "Simulation & Testing",
    description: "Run virtual A/B tests with digital twins",
    details: "Test your campaigns against digital twins to predict real-world performance and customer reactions.",
    icon: "🧪"
  },
  {
    step: 5,
    title: "Analysis & Optimization",
    description: "Review results and optimize campaigns",
    details: "Analyze comprehensive reports and insights to refine your campaigns for maximum effectiveness.",
    icon: "📈"
  }
];

export default function Features() {
  return (
    <Layout>
      <CustomCursor />
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Smart Testing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our AI-powered platform revolutionizes A/B testing with digital twins.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Features Section */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FadeInWhenVisible key={feature.category} delay={index * 0.2}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{feature.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{feature.category}</h2>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {feature.details.map((detail) => (
                    <div key={detail.title} className="space-y-4">
                      <h3 className="text-xl font-semibold text-purple-400">
                        {detail.title}
                      </h3>
                      <p className="text-gray-300">{detail.description}</p>
                      <ul className="space-y-2">
                        {detail.subFeatures.map((subFeature) => (
                          <li key={subFeature} className="flex items-center text-gray-400">
                            <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {subFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              How It Works
            </h2>
          </FadeInWhenVisible>
          
          <div className="grid gap-8">
            {processSteps.map((step, index) => (
              <SlideInFromRight key={step.step} delay={index * 0.1}>
                <div className="flex items-center gap-8 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/50">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-purple-400">Step {step.step}</span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.details}</p>
                  </div>
                </div>
              </SlideInFromRight>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
} 
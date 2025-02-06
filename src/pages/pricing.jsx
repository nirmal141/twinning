import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { FadeInWhenVisible } from '../components/ScrollAnimation';
import { SlideInFromRight } from '../components/ScrollAnimation';

const pricingTiers = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for small businesses starting with A/B testing",
    features: [
      "Up to 5,000 digital twins",
      "Basic sentiment analysis",
      "2 concurrent campaigns",
      "7-day data retention",
      "Email support",
      "Basic analytics dashboard"
    ],
    highlight: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "Ideal for growing companies with advanced testing needs",
    features: [
      "Up to 50,000 digital twins",
      "Advanced sentiment analysis",
      "10 concurrent campaigns",
      "30-day data retention",
      "Priority support",
      "Advanced analytics & reporting",
      "Custom persona creation",
      "API access",
      "Team collaboration tools"
    ],
    highlight: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per month",
    description: "For large organizations requiring maximum scale and support",
    features: [
      "Unlimited digital twins",
      "Enterprise-grade sentiment analysis",
      "Unlimited concurrent campaigns",
      "90-day data retention",
      "24/7 dedicated support",
      "Custom analytics & reporting",
      "Advanced API integration",
      "Custom ML model training",
      "Dedicated success manager",
      "SSO & advanced security"
    ],
    highlight: false,
    cta: "Contact Sales"
  }
];

export default function Pricing() {
  return (
    <Layout>
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header Section */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Scale your A/B testing with AI-powered digital twins.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <FadeInWhenVisible key={tier.name} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.highlight 
                    ? 'bg-gradient-to-b from-purple-600/20 to-blue-600/20 border-2 border-purple-500/50' 
                    : 'bg-white/5 border border-white/10'
                } backdrop-blur-xl`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-medium transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tier.cta}
                </motion.button>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
          </FadeInWhenVisible>
          
          <div className="grid gap-6">
            {[
              {
                q: "How accurate are the digital twins?",
                a: "Our AI models achieve 95%+ accuracy in predicting customer behavior, continuously improving through machine learning."
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan at any time. Changes take effect at the start of the next billing cycle."
              },
              {
                q: "Do you offer a free trial?",
                a: "Yes, we offer a 14-day free trial on our Starter and Professional plans with full feature access."
              },
              {
                q: "What kind of support do you provide?",
                a: "We offer email support for Starter, priority support for Professional, and 24/7 dedicated support for Enterprise customers."
              }
            ].map((faq, index) => (
              <SlideInFromRight key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </motion.div>
              </SlideInFromRight>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
} 
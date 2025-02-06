import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FadeInWhenVisible } from '../components/ScrollAnimation';

const customerPersonas = [
  {
    name: "Tech-Savvy Sarah",
    avatar: "👩‍💻",
    details: {
      demographics: "Age 25-35, young professional, likely lives in a metropolitan area, above-average income.",
      technographics: "High smartphone and social media usage, comfortable with new technologies and online services, early adopter of trends.",
      shoppingHabits: "Values convenience and efficiency, researches products online, shops on mobile devices, open to online advertising and personalized recommendations.",
      marketingPreferences: "Responds well to visually appealing content, interactive experiences, and social media campaigns. Appreciates brands that are innovative and tech-forward."
    }
  },
  {
    name: "Budget-Conscious Bob",
    avatar: "👨‍👩‍👧‍👦",
    details: {
      demographics: "Age 35-50, homeowner, likely has a family, middle-income range.",
      technographics: "Moderate technology user, primarily uses desktop for browsing and online shopping, comfortable with email and established online platforms.",
      shoppingHabits: "Highly price-sensitive, seeks out deals and discounts, researches products thoroughly before purchasing, values practicality and durability.",
      marketingPreferences: "Responds well to clear and concise messaging, promotions, and value propositions. Appreciates brands that offer transparency and good customer service."
    }
  },
  {
    name: "Adventurous Alex",
    avatar: "🏃‍♂️",
    details: {
      demographics: "Age 25-35, single or in a relationship, values experiences over material possessions.",
      technographics: "High social media usage, uses mobile devices for travel planning and booking, active on travel review sites and forums.",
      shoppingHabits: "Spends on travel, outdoor gear, and unique experiences, seeks inspiration and recommendations online, values authenticity and sustainability.",
      marketingPreferences: "Responds well to visually rich content (photos, videos), storytelling, and user-generated content. Appreciates brands that promote adventure and social responsibility."
    }
  },
  {
    name: "Retired Ralph",
    avatar: "👴",
    details: {
      demographics: "Age 65+, retired, may have grandchildren, fixed income.",
      technographics: "Lower technology adoption, primarily uses desktop for email and basic browsing, cautious about online security and privacy.",
      shoppingHabits: "Values familiarity and trust, may prefer traditional shopping methods, seeks out reliable and established brands, cautious with online transactions.",
      marketingPreferences: "Responds well to clear and simple messaging, traditional advertising channels (print, TV), and direct mail. Appreciates brands that offer personal service and support."
    }
  },
  {
    name: "Trendy Taylor",
    avatar: "🤳",
    details: {
      demographics: "Age 18-24, student or young adult, highly influenced by peers and social trends.",
      technographics: "Mobile-first user, high engagement with social media and short-form video platforms, comfortable with online communities and influencer culture.",
      shoppingHabits: "Impulse buyer, influenced by trends and social media, values visual appeal and brand image, open to new products and experiences.",
      marketingPreferences: "Responds well to visually striking content, influencer marketing, and social media advertising. Appreciates brands that are authentic, inclusive, and aligned with their values."
    }
  }
];

const loadingSteps = [
  {
    text: "Loading Customer Data",
    icon: "📊",
    description: "Analyzing CRM and analytics data..."
  },
  {
    text: "Creating Digital Personas",
    icon: "🧬",
    description: "Generating customer behavior patterns..."
  },
  {
    text: "Training AI Models",
    icon: "🤖",
    description: "Optimizing prediction algorithms..."
  },
  {
    text: "Segmenting Audiences",
    icon: "🎯",
    description: "Categorizing customer groups..."
  },
  {
    text: "Finalizing Results",
    icon: "✨",
    description: "Preparing simulation data..."
  }
];

const campaignLoadingSteps = [
  {
    text: "Launching Campaign",
    icon: "🚀",
    description: "Initializing campaign parameters..."
  },
  {
    text: "Simulating Customer Interactions",
    icon: "🎯",
    description: "Processing potential customer responses..."
  },
  {
    text: "Analyzing Engagement Patterns",
    icon: "📊",
    description: "Evaluating customer sentiment and behavior..."
  },
  {
    text: "Generating Response Predictions",
    icon: "🤖",
    description: "Creating AI-powered response forecasts..."
  },
  {
    text: "Finalizing Results",
    icon: "✨",
    description: "Preparing campaign insights..."
  }
];

const customerReactions = [
  {
    name: "Tech-Savvy Sarah",
    avatar: "👩‍💻",
    reaction: "Okay, this new card boasts travel rewards... but does it beat my current card's points system? The mobile app integration looks sleek. I'll compare the fine print later, but the initial perks seem promising.",
    visual: "📱",
    sentiment: "interested",
    engagementScore: 75
  },
  {
    name: "Budget-Conscious Bob",
    avatar: "👨‍👩‍👧‍👦",
    reaction: "Hmm, another credit card offer. They all promise the moon. I need to calculate the real cost – APR, fees, and how much I actually spend in those bonus categories. If the long-term savings are there, maybe it's worth considering.",
    visual: "🧮",
    sentiment: "skeptical",
    engagementScore: 45
  },
  {
    name: "Adventurous Alex",
    avatar: "🏃‍♂️",
    reaction: "A new travel credit card? Interesting. I wonder if the travel insurance is comprehensive. And which airlines and hotels are partners? If it aligns with my usual destinations, this could be useful.",
    visual: "🗺️",
    sentiment: "curious",
    engagementScore: 85
  },
  {
    name: "Retired Ralph",
    avatar: "👴",
    reaction: "Another credit card offer... I'm perfectly happy with the one I have. These things are complicated. I don't want to get myself into trouble with hidden fees or interest rates. I'll stick with what I know.",
    visual: "👋",
    sentiment: "dismissive",
    engagementScore: 15
  },
  {
    name: "Trendy Taylor",
    avatar: "🤳",
    reaction: "Ooh, a new credit card design! It's so cute! I wonder what kind of perks it has. Exclusive access to events? Discounts at trendy stores? I'll check it out later, but it definitely looks cool.",
    visual: "😍",
    sentiment: "excited",
    engagementScore: 90
  }
];

const CustomerReactionBubble = ({ reaction, delay }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ 
      type: "spring",
      duration: 0.8,
      delay,
      bounce: 0.4
    }}
    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
  >
    <div className="flex items-start space-x-4">
      <div className="flex flex-col items-center">
        <span className="text-4xl mb-2">{reaction.avatar}</span>
        <span className="text-4xl">{reaction.visual}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{reaction.name}</h3>
          <div className="flex items-center space-x-2">
            <motion.div 
              className={`h-2 rounded-full ${
                reaction.engagementScore > 70 ? 'bg-green-500' :
                reaction.engagementScore > 40 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${reaction.engagementScore}px` }}
              transition={{ delay: delay + 0.5, duration: 1 }}
            />
            <span className="text-sm text-gray-400">{reaction.engagementScore}%</span>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="bg-white/5 rounded-lg p-4 mt-2"
          >
            <p className="text-gray-300">{reaction.reaction}</p>
            <div className="absolute -left-2 -top-2 transform rotate-45 w-4 h-4 bg-white/5" />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

const LoadingOverlay = ({ currentLoadingSteps, loadingStep }) => (
  <div className="fixed inset-0 z-[99999] flex items-center justify-center">
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md" />
    <div className="relative z-[100000] max-w-md w-full mx-4">
      {/* Progress bar */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: `${((loadingStep + 1) / currentLoadingSteps.length) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Current step animation */}
      <motion.div
        key={loadingStep}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-5xl mb-4 inline-block"
        >
          {currentLoadingSteps[loadingStep]?.icon}
        </motion.div>

        {/* Loading text */}
        <h3 className="text-2xl font-bold text-white mb-2">
          {currentLoadingSteps[loadingStep]?.text}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            _
          </motion.span>
        </h3>
        <p className="text-gray-400 mb-6">
          {currentLoadingSteps[loadingStep]?.description}
        </p>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-purple-500 rounded-full"
              animate={{
                y: ["0%", "-50%", "0%"],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: dot * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default function CreateCampaign() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    variationA: {
      image: null,
      text: ''
    },
    variationB: {
      image: null,
      text: ''
    },
    campaign: {
      name: '',
      description: '',
      variationA: { image: null, text: '' },
      variationB: { image: null, text: '' }
    },
    personas: {
      crmData: null,
      analyticsData: null,
      ageRange: [20, 60],
      gender: '',
      location: ''
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPersonas, setShowPersonas] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLoadingSteps, setCurrentLoadingSteps] = useState([]);
  const [showReactions, setShowReactions] = useState(false);
  const [navigationSource, setNavigationSource] = useState('');

  const tabs = [
    { name: 'Input Campaign', step: 1 },
    { name: 'Create Digital Personas', step: 2 },
    { name: 'Campaign simulation', step: 3 }
  ];

  const handleImageUpload = (variation, e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [variation]: {
          ...prev[variation],
          image: file
        }
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleCreateSegments = async () => {
    setShowLoadingOverlay(true);
    setCurrentLoadingSteps(loadingSteps);
    setNavigationSource('segments');
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.2;
      });
    }, 50);

    for (let i = 0; i < loadingSteps.length; i++) {
      setLoadingStep(i);
      await new Promise(resolve => setTimeout(resolve, 3500));
    }
    
    await new Promise(resolve => setTimeout(resolve, 800));
    clearInterval(progressInterval);
    setShowLoadingOverlay(false);
    setShowReactions(false);
    setActiveTab(2);
  };

  const handleLaunchCampaign = async () => {
    setShowLoadingOverlay(true);
    setCurrentLoadingSteps(campaignLoadingSteps);
    setNavigationSource('launch');
    setProgress(0);
    setLoadingStep(0);
    
    for (let i = 0; i < campaignLoadingSteps.length; i++) {
      setLoadingStep(i);
      await new Promise(resolve => setTimeout(resolve, 3800));
    }
    
    setShowLoadingOverlay(false);
    setShowReactions(true);
    setActiveTab(2);
  };

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex !== 2) {
      setShowReactions(false);
      setNavigationSource('');
    }
  };

  const renderSimulationTab = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          {showReactions ? 'Campaign Simulation Results' : 'Customer Personas'}
        </h2>
        <p className="text-gray-400">
          {showReactions 
            ? 'Customer reactions to your campaign' 
            : 'Analysis of potential customer segments based on your criteria'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {showReactions ? (
          <>
            {/* Customer reactions */}
            {customerReactions.map((reaction, index) => (
              <CustomerReactionBubble 
                key={reaction.name}
                reaction={reaction}
                delay={index * 0.2}
              />
            ))}
            
            {/* Analytics CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want Deeper Insights?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Explore detailed analytics, customer sentiment trends, and actionable recommendations to improve your campaign performance.
                </p>
                <Link href="/analytics">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      View Detailed Analytics
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </>
        ) : (
          // Original customer personas
          customerPersonas.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{persona.avatar}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">{persona.name}</h3>
                  <div className="space-y-4">
                    {Object.entries(persona.details).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <h4 className="text-sm font-medium text-purple-400 capitalize">
                          {key}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-2 text-white">Create A/B Test Campaign</h2>
            <p className="text-gray-400 mb-6">Design your A/B test campaign for focus groups.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  placeholder="Enter campaign name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Campaign Description
                </label>
                <textarea
                  placeholder="Describe your campaign"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Variation A */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Variation A
                  </label>
                  <div className="mb-4">
                    <div className="w-full h-40 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleImageUpload('variationA', e)}
                        accept="image/*"
                        id="variationA"
                      />
                      <label htmlFor="variationA" className="cursor-pointer text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-gray-400"
                        >
                          <svg className="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Upload image for Variation A
                        </motion.div>
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter text for Variation A"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.variationA.text}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        variationA: { ...prev.variationA, text: e.target.value }
                      }))}
                    />
                  </div>
                </div>

                {/* Variation B */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Variation B
                  </label>
                  <div className="mb-4">
                    <div className="w-full h-40 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleImageUpload('variationB', e)}
                        accept="image/*"
                        id="variationB"
                      />
                      <label htmlFor="variationB" className="cursor-pointer text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-gray-400"
                        >
                          <svg className="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Upload image for Variation B
                        </motion.div>
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter text for Variation B"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={formData.variationB.text}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        variationB: { ...prev.variationB, text: e.target.value }
                      }))}
                    />
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLaunchCampaign}
              >
                Launch Campaign
              </motion.button>
            </form>
          </div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2 text-white">Segment Customers</h2>
              <p className="text-gray-400 mb-6">Import CRM data and create customer segments.</p>
            </div>

            {/* CRM Data Import */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-white/10">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">CRM Data</h3>
                  <p className="text-sm text-gray-400">Import customer data from your CRM</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-navy-800 text-white rounded-lg hover:bg-navy-700 transition-colors"
                onClick={() => {/* Handle CRM import */}}
              >
                Import Data
              </motion.button>
            </div>

            {/* Analytics Data Import */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-white/10">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Analytics</h3>
                  <p className="text-sm text-gray-400">Import paid analytics data</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-navy-800 text-white rounded-lg hover:bg-navy-700 transition-colors"
                onClick={() => {/* Handle analytics import */}}
              >
                Import Data
              </motion.button>
            </div>

            {/* Age Range Slider */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Age Range: {formData.personas.ageRange[0]} - {formData.personas.ageRange[1]} years
              </label>
              <input
                type="range"
                min="20"
                max="60"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                value={formData.personas.ageRange[1]}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  personas: {
                    ...prev.personas,
                    ageRange: [prev.personas.ageRange[0], parseInt(e.target.value)]
                  }
                }))}
              />
            </div>

            {/* Gender Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Gender
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.personas.gender}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  personas: { ...prev.personas, gender: e.target.value }
                }))}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Location Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.personas.location}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  personas: { ...prev.personas, location: e.target.value }
                }))}
              />
            </div>

            {/* Create Segments Button */}
            <motion.button
              type="button"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium mt-6"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCreateSegments}
              disabled={showLoadingOverlay}
            >
              Create Segments
            </motion.button>
          </motion.div>
        );
      case 2:
        return renderSimulationTab();
      default:
        return null;
    }
  };

  return (
    <Layout>
      <CustomCursor />
      <Header />

      {showLoadingOverlay && (
        <LoadingOverlay 
          currentLoadingSteps={currentLoadingSteps} 
          loadingStep={loadingStep}
        />
      )}

      <main className="pt-24 pb-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            Welcome to Twinning.AI
          </h1>

          {/* Tabs */}
          <FadeInWhenVisible>
            <div className="flex justify-between mb-8 relative">
              {tabs.map((tab, index) => (
                <motion.button
                  key={index}
                  className={`flex-1 py-4 px-6 text-center relative ${
                    activeTab === index 
                      ? 'text-white bg-white/10 backdrop-blur-lg rounded-lg' 
                      : 'text-gray-400'
                  }`}
                  onClick={() => handleTabChange(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.name}
                </motion.button>
              ))}
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Content */}
          <FadeInWhenVisible delay={0.2}>
            <motion.div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              {renderTabContent()}
            </motion.div>
          </FadeInWhenVisible>
        </motion.div>
      </main>
    </Layout>
  );
} 
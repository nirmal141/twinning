import React from 'react';
import { motion } from 'framer-motion';
import { Bar, Line, Radar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { FadeInWhenVisible, SlideInFromRight } from '../components/ScrollAnimation';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const customerReactions = [
  {
    name: "Tech-Savvy Sarah",
    avatar: "👩‍💻",
    engagementScore: 75,
    sentiment: "interested"
  },
  {
    name: "Budget-Conscious Bob",
    avatar: "👨‍👩‍👧‍👦",
    engagementScore: 45,
    sentiment: "skeptical"
  },
  {
    name: "Adventurous Alex",
    avatar: "🏃‍♂️",
    engagementScore: 85,
    sentiment: "curious"
  },
  {
    name: "Retired Ralph",
    avatar: "👴",
    engagementScore: 15,
    sentiment: "dismissive"
  },
  {
    name: "Trendy Taylor",
    avatar: "🤳",
    engagementScore: 90,
    sentiment: "excited"
  }
];

const sentimentColors = {
  interested: 'rgba(147, 51, 234, 0.7)',
  skeptical: 'rgba(234, 179, 8, 0.7)',
  curious: 'rgba(59, 130, 246, 0.7)',
  dismissive: 'rgba(239, 68, 68, 0.7)',
  excited: 'rgba(34, 197, 94, 0.7)'
};

export default function Analytics() {
  const engagementData = {
    labels: customerReactions.map(customer => customer.name),
    datasets: [
      {
        label: 'Engagement Score',
        data: customerReactions.map(customer => customer.engagementScore),
        backgroundColor: customerReactions.map(customer => sentimentColors[customer.sentiment]),
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
    ],
  };

  const sentimentDistribution = {
    labels: Object.keys(sentimentColors),
    datasets: [
      {
        data: Object.keys(sentimentColors).map(sentiment => 
          customerReactions.filter(customer => customer.sentiment === sentiment).length
        ),
        backgroundColor: Object.values(sentimentColors),
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
    ],
  };

  const customerTraits = {
    labels: ['Technology Adoption', 'Price Sensitivity', 'Brand Loyalty', 'Social Media Usage', 'Risk Tolerance'],
    datasets: customerReactions.map(customer => ({
      label: customer.name,
      data: [
        customer.name.includes('Tech-Savvy') ? 90 : 
        customer.name.includes('Budget') ? 60 :
        customer.name.includes('Adventurous') ? 75 :
        customer.name.includes('Retired') ? 30 : 85,
        // Price Sensitivity
        customer.name.includes('Budget') ? 95 :
        customer.name.includes('Retired') ? 80 :
        customer.name.includes('Tech-Savvy') ? 50 :
        customer.name.includes('Trendy') ? 40 : 60,
        // Brand Loyalty
        customer.name.includes('Retired') ? 90 :
        customer.name.includes('Tech-Savvy') ? 60 :
        customer.name.includes('Budget') ? 70 :
        customer.name.includes('Trendy') ? 40 : 50,
        // Social Media Usage
        customer.name.includes('Trendy') ? 95 :
        customer.name.includes('Tech-Savvy') ? 85 :
        customer.name.includes('Adventurous') ? 75 :
        customer.name.includes('Budget') ? 50 : 20,
        // Risk Tolerance
        customer.name.includes('Adventurous') ? 90 :
        customer.name.includes('Trendy') ? 80 :
        customer.name.includes('Tech-Savvy') ? 70 :
        customer.name.includes('Budget') ? 40 : 20,
      ],
      backgroundColor: sentimentColors[customer.sentiment].replace('0.7', '0.2'),
      borderColor: sentimentColors[customer.sentiment],
      borderWidth: 2,
      fill: true,
    })),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: 'Inter, system-ui, sans-serif',
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  };

  const radarOptions = {
    ...chartOptions,
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          backdropColor: 'transparent',
        },
      },
    },
  };

  return (
    <Layout>
      <CustomCursor />
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Campaign Summary Section */}
        <FadeInWhenVisible>
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-6">Campaign Analysis Summary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Key Insights</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>High engagement from tech-savvy and trend-conscious segments (75-90% engagement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Mixed response from budget-conscious customers (45% engagement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Lower traction with retired demographic (15% engagement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Strong correlation between social media usage and positive sentiment</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Recommendations</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Focus on mobile-first features for higher engagement with younger demographics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Develop targeted value propositions for budget-conscious segment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Simplify messaging for older demographics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Leverage social proof and influencer partnerships for trend-conscious users</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Sentiment Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-400">Positive Reactions</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Strong interest in mobile app integration</li>
                      <li>• Appreciation for modern design elements</li>
                      <li>• Excitement about exclusive perks</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-400">Areas for Improvement</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Clearer communication of long-term benefits</li>
                      <li>• Simplified fee structure explanation</li>
                      <li>• Enhanced security messaging for older users</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engagement Scores */}
          <SlideInFromRight delay={0.2}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Engagement Scores</h2>
              <Bar data={engagementData} options={chartOptions} />
            </div>
          </SlideInFromRight>

          {/* Sentiment Distribution */}
          <SlideInFromRight delay={0.3}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Sentiment Distribution</h2>
              <Doughnut data={sentimentDistribution} options={chartOptions} />
            </div>
          </SlideInFromRight>

          {/* Customer Traits Radar */}
          <FadeInWhenVisible delay={0.4}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Customer Traits Analysis</h2>
              <Radar data={customerTraits} options={radarOptions} />
            </div>
          </FadeInWhenVisible>
        </div>
      </main>
    </Layout>
  );
} 
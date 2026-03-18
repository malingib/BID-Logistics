import { motion } from 'framer-motion';
import { Home, Building, Truck, Package } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Household Moving',
    description: 'Complete home moving services from packing to unpacking. We treat your belongings like our own.',
  },
  {
    icon: Building,
    title: 'Office Relocation',
    description: 'Minimize downtime with our efficient office moving solutions. Fast, professional, and reliable.',
  },
  {
    icon: Truck,
    title: 'Vehicle Transport',
    description: 'Safe car and motorcycle transport across Kenya. Fully insured for your peace of mind.',
  },
  {
    icon: Package,
    title: 'Packing Services',
    description: 'Professional packing with quality materials. We ensure everything arrives in perfect condition.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E85D04]/10 text-[#E85D04] rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Complete Moving Solutions
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            From Nairobi to Mombasa, we offer comprehensive moving services tailored to your needs. Professional, reliable, and affordable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 bg-[#E85D04]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E85D04] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#E85D04] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

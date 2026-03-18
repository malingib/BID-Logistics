import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Studio / Bedsitter',
    subtitle: 'Perfect for Singles',
    price: '15K',
    features: [
      'Up to 10 cartons',
      '1 mattress (any size)',
      'Small furniture items',
      'Loading & unloading',
      'Transport within Nairobi',
      '2-person team',
    ],
    highlighted: false,
  },
  {
    name: '1-2 Bedroom',
    subtitle: 'Most Popular',
    price: '25K',
    features: [
      'Up to 25 cartons',
      '3 mattresses (any size)',
      'Sofa, dining set, TV stand',
      'Furniture disassembly',
      'Loading & unloading',
      'Transport within Nairobi',
      '3-person team',
    ],
    highlighted: true,
  },
  {
    name: '3-4 Bedroom',
    subtitle: 'For Large Families',
    price: '45K',
    features: [
      'Up to 50 cartons',
      '5 mattresses (any size)',
      'Full furniture set',
      'Appliance handling',
      'Furniture disassembly',
      'Loading & unloading',
      'Transport within Nairobi',
      '4-person team',
    ],
    highlighted: false,
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

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F8F9FA]">
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
            MOVING PACKAGES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Choose the perfect moving package for your needs. All prices include professional handling and transport within Nairobi. Mombasa moves available on request.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#1A1A2E] text-white shadow-2xl scale-105 md:scale-110 z-10'
                  : 'bg-white text-[#333333] shadow-card hover:shadow-card-hover'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#E85D04] text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-[#666666]'}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-start justify-center">
                  <span className={`text-2xl font-medium ${plan.highlighted ? 'text-gray-300' : 'text-[#666666]'}`}>
                    KES
                  </span>
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1A1A2E]'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? 'text-gray-300' : 'text-[#999999]'}`}>
                  starting from / move
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? 'bg-[#E85D04]' : 'bg-[#E85D04]/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-[#E85D04]'}`} />
                    </div>
                    <span className={plan.highlighted ? 'text-gray-200' : 'text-[#666666]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => window.location.href = '#quote'}
                className={`w-full py-6 font-semibold rounded-xl transition-all hover:scale-[1.02] group ${
                  plan.highlighted
                    ? 'bg-[#E85D04] hover:bg-[#d14a00] text-white'
                    : 'bg-transparent border-2 border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white'
                }`}
              >
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

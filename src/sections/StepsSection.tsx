import { motion } from 'framer-motion';
import { Phone, ClipboardCheck, Truck, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    description: 'Contact us via phone, WhatsApp, or our online form. Tell us about your move - size, location, and any special requirements.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Free Survey',
    description: 'We schedule a free on-site or virtual survey to assess your items and provide an accurate, transparent quote with no hidden fees.',
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'Moving Day',
    description: 'Our professional team arrives on time with all packing materials. We carefully pack, load, and transport your belongings.',
    icon: Truck,
  },
  {
    number: '04',
    title: 'Safe Delivery',
    description: 'We unload and place items in your new space. Optional unpacking services available. Your satisfaction is guaranteed.',
    icon: Home,
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="py-20 md:py-28 bg-white overflow-hidden">
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
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Four easy steps to your stress-free move. From quote to delivery, we handle everything with professionalism and care.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gray-200">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-[#E85D04] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-[#F8F9FA] rounded-2xl p-8 h-full hover:shadow-card transition-shadow duration-300">
                    {/* Number Badge */}
                    <div className="relative mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="w-20 h-20 bg-[#E85D04] rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1A1A2E] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <ArrowRight className="w-6 h-6 text-[#E85D04] rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1A1A2E] rounded-2xl p-8 md:p-12 inline-block max-w-3xl">
            <p className="text-white text-lg mb-6">
              Ready to move? Contact us today for a free, no-obligation quote. Our team is standing by to help with your relocation needs.
            </p>
            <Button
              onClick={() => window.location.href = '#quote'}
              className="bg-[#E85D04] hover:bg-[#d14a00] text-white px-8 py-6 text-base font-semibold rounded-xl transition-all hover:scale-[1.02] group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

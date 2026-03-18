import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Nairobi & Mombasa coverage',
  'Professional packing & unpacking',
  'Fully insured moves',
  'Free on-site surveys',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-trucks.png"
                  alt="Professional Movers in Kenya"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#E85D04] rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">5+</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E]">Years of</p>
                    <p className="text-[#666666]">Experience</p>
                  </div>
                </div>
                <p className="text-sm text-[#666666]">
                  Trusted moving partner in Kenya since 2009.
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E85D04]/10 rounded-full blur-2xl" />
              <div className="absolute top-1/2 -right-8 w-32 h-32 bg-[#E85D04]/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#E85D04]/10 text-[#E85D04] rounded-full text-sm font-medium mb-6">
              About BID LOGISTICS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              Kenya's Trusted Moving & Relocation Experts
            </h2>
            <p className="text-lg text-[#666666] mb-6 leading-relaxed">
              At BID LOGISTICS, we specialize in making your move stress-free. Whether you're relocating your home or office within Nairobi, Mombasa, or anywhere in Kenya, our professional team handles every detail with care.
            </p>
            <p className="text-[#666666] mb-8 leading-relaxed">
              From the initial free survey to the final unpacking, we provide personalized moving solutions tailored to your needs. Our experienced team, modern fleet, and commitment to excellence have made us the preferred choice for hundreds of satisfied clients across Kenya.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#E85D04] flex-shrink-0" />
                  <span className="text-[#333333]">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => window.location.href = '#quote'}
              className="bg-[#E85D04] hover:bg-[#d14a00] text-white px-8 py-6 text-base font-semibold rounded-xl transition-all hover:scale-[1.02] group"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

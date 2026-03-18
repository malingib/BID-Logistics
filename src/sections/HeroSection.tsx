import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Home, Building, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RequestMoveModal from '@/components/RequestMoveModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="home" className="relative py-8 overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Clouds */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-64 h-32 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-40 right-20 w-80 h-40 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-40 left-1/4 w-96 h-48 bg-sky-100 rounded-full blur-3xl"
        />

        {/* Large MOVERS Text Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-[#1A1A2E] whitespace-nowrap select-none pointer-events-none"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          MOVERS
        </motion.div>
      </div>

      {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Side - CTA and Text */}
          <div className="flex flex-col flex-1 w-full">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left mb-8"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block px-4 py-2 bg-[#E85D04]/10 text-[#E85D04] rounded-full text-sm font-medium mb-4"
              >
                Serving Nairobi & Mombasa
              </motion.span>
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
                Professional Movers in Kenya
              </h1>
              <p className="text-lg md:text-xl text-[#666666]">
                Stress-free moving for homes and offices. Get a free quote today and let BID LOGISTICS handle your move with care.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
            >
              <Button
                onClick={() => setModalOpen(true)}
                className="h-14 px-8 bg-[#E85D04] hover:bg-[#d14a00] text-white font-semibold rounded-xl transition-all hover:scale-[1.02] text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request for Moving
              </Button>
              <Button
                onClick={() => window.location.href = '#quote'}
                variant="outline"
                className="h-14 px-8 border-2 border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white font-semibold rounded-xl transition-all hover:scale-[1.02] text-lg"
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-xl flex-1"
          >
            <img
              src="/images/hero-trucks.png"
              alt="Moving Trucks Fleet"
              className="w-full h-auto object-contain"
            />

            {/* Floating Icons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-10 left-4 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
            >
              <Home className="w-6 h-6 md:w-8 md:h-8 text-[#E85D04]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-0 right-1/4 w-10 h-10 md:w-14 md:h-14 bg-[#E85D04] rounded-xl shadow-lg flex items-center justify-center"
            >
              <Truck className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-20 right-4 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
            >
              <Building className="w-6 h-6 md:w-8 md:h-8 text-[#E85D04]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4"
        >
            {[
              { value: '5K+', label: 'Moves Completed' },
              { value: '500+', label: 'Happy Clients' },
              { value: '99%', label: 'Satisfaction' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#E85D04]">{stat.value}</div>
                <div className="text-sm text-[#666666]">{stat.label}</div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Request Move Modal */}
      <RequestMoveModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}

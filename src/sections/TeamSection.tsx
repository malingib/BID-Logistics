import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dalmatius Ocharo',
    role: 'Founder| C.E.O',
    image: '/images/team/team-2.jpg',
    description: 'Leading our operations with over 5 years of experience in logistics management.',
  },
  {
    name: 'Ibrahim Shehi',
    role: 'Founder | C.M.O',
    image: '/images/team/team-4.jpg',
    description: 'Responsible for branding, market research, advertising, and marketing strategy, as well as ensuring exceptional customer experience and building lasting partnerships.',
  },
  {
    name: 'Brighton Malingi',
    role: 'Founder | C.T.O',
    image: '/images/team/team-3.jpg',
    description: 'Strategic planning and execution of global logistics operations.',
  },
];

const testimonial = {
  quote: "BID LOGISTICS made our move from Nairobi to Mombasa completely stress-free. The team was professional, careful with our furniture, and completed everything in one day. Highly recommend their services!",
  author: "James Kamau",
  company: "Relocated from Nairobi to Mombasa"
};

export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-[#F8F9FA] rounded-3xl p-8 md:p-12">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#E85D04]/20" />
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E85D04] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A2E]">{testimonial.author}</p>
                  <p className="text-sm text-[#666666]">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Team Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[#E85D04]/10 text-[#E85D04] rounded-full text-sm font-medium mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                Meet Our Professional Movers
              </h2>
              <p className="text-[#666666]">
                Our trained team handles every move with care. From packing to unpacking, we treat your belongings as if they were our own.
              </p>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      className="flex-[0_0_280px] min-w-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 p-6">
                        <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{member.name}</h3>
                        <p className="text-[#E85D04] text-sm font-medium mb-3">{member.role}</p>
                        <p className="text-[#666666] text-sm">{member.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={scrollPrev}
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#E85D04] hover:text-white hover:border-[#E85D04] transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#E85D04] hover:text-white hover:border-[#E85D04] transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex gap-2 ml-auto">
                  {teamMembers.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === selectedIndex ? 'bg-[#E85D04]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

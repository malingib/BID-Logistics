import { motion } from 'framer-motion';
import { Home, Building, Briefcase, Users } from 'lucide-react';

const clients = [
  { name: 'Homeowners', icon: Home },
  { name: 'Businesses', icon: Building },
  { name: 'Offices', icon: Briefcase },
  { name: 'Apartments', icon: Users },
];

export default function TrustedBy() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#666666] text-lg">
            Trusted by <span className="font-semibold text-[#E85D04]">50+</span> Clients Across Kenya
          </p>
        </motion.div>

        {/* Client Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 text-[#999999] hover:text-[#E85D04] transition-colors cursor-pointer group"
              >
                <Icon className="w-8 h-8 group-hover:text-[#E85D04] transition-colors" />
                <span className="text-lg font-medium hidden sm:block">{client.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

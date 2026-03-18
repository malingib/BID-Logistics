import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sendEmail } from '@/lib/emailService';
import type { EmailFormData } from '@/lib/emailService';

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    moveDate: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const emailData: EmailFormData = {
      ...formData,
      subject: 'New Quote Request - BID Logistics',
    };

    const response = await sendEmail(emailData);
    
    setIsSubmitting(false);
    
    if (response.success) {
      setSubmitStatus('success');
      setStatusMessage(response.message);
      setFormData({ name: '', phone: '', email: '', moveDate: '', service: '' });
    } else {
      setSubmitStatus('error');
      setStatusMessage(response.message);
    }
  };

  return (
    <section id="quote" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E85D04] to-[#F48C06]" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Phone className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Request a Free Quote
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Get a transparent, no-obligation quote for your move. Fill in the form below and we'll get back to you within 24 hours.
          </p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="h-14 bg-white border-0 text-[#333333] placeholder:text-[#999999] rounded-xl focus-visible:ring-2 focus-visible:ring-white"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="h-14 bg-white border-0 text-[#333333] placeholder:text-[#999999] rounded-xl focus-visible:ring-2 focus-visible:ring-white"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="h-14 bg-white border-0 text-[#333333] placeholder:text-[#999999] rounded-xl focus-visible:ring-2 focus-visible:ring-white"
            />
            <Input
              type="date"
              value={formData.moveDate}
              onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
              className="h-14 bg-white border-0 text-[#333333] rounded-xl focus-visible:ring-2 focus-visible:ring-white"
            />
            <select
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="h-14 bg-white border-0 text-[#333333] rounded-xl focus-visible:ring-2 focus-visible:ring-white sm:col-span-2"
            >
              <option value="">Select Service</option>
              <option value="household">Household Moving</option>
              <option value="office">Office Relocation</option>
              <option value="vehicle">Vehicle Transport</option>
              <option value="packing">Packing Services</option>
            </select>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="sm:col-span-2 bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <p className="text-white font-medium">{statusMessage}</p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="sm:col-span-2 bg-red-500/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3"
              >
                <Send className="w-6 h-6 text-white flex-shrink-0" />
                <p className="text-white font-medium">{statusMessage}</p>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-2 h-14 px-8 bg-[#1A1A2E] hover:bg-[#2a2a4e] disabled:bg-gray-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  Submit Request
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-white/60 mt-6"
          >
            Your information is safe with us. We never share your details.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

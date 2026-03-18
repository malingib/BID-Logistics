import { useState } from 'react';
import { X, Phone, Mail, MapPin, Truck, Home, Building, Package, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { sendEmail } from '@/lib/emailService';
import type { EmailFormData } from '@/lib/emailService';

interface RequestMoveModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RequestMoveModal({ open, onOpenChange }: RequestMoveModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    moveDate: '',
    service: '',
    pickupLocation: '',
    dropoffLocation: '',
    propertySize: '',
    additionalDetails: '',
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
      subject: 'New Move Request - BID Logistics',
    };

    const response = await sendEmail(emailData);
    
    setIsSubmitting(false);
    
    if (response.success) {
      setSubmitStatus('success');
      setStatusMessage(response.message);
      setFormData({
        name: '',
        phone: '',
        email: '',
        moveDate: '',
        service: '',
        pickupLocation: '',
        dropoffLocation: '',
        propertySize: '',
        additionalDetails: '',
      });
    } else {
      setSubmitStatus('error');
      setStatusMessage(response.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#E85D04]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-[#E85D04]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-2">
              Request a Move
            </h2>
            <p className="text-[#666666]">
              Fill in the details below and we'll get back to you with a free quote within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E85D04]" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-12 border border-gray-200 rounded-xl focus-visible:ring-[#E85D04]"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="h-12 border border-gray-200 rounded-xl focus-visible:ring-[#E85D04]"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 border border-gray-200 rounded-xl focus-visible:ring-[#E85D04] sm:col-span-2"
                />
              </div>
            </div>

            {/* Move Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E85D04]" />
                Move Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Pickup Location *"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                    required
                    className="pl-10 h-12 border border-gray-200 rounded-xl focus-visible:ring-[#E85D04]"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Dropoff Location *"
                    value={formData.dropoffLocation}
                    onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
                    required
                    className="pl-10 h-12 border border-gray-200 rounded-xl focus-visible:ring-[#E85D04]"
                  />
                </div>
                <Input
                  type="date"
                  value={formData.moveDate}
                  onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
                  className="h-12 border border-gray-200 rounded-xl focus-visible:ring-[#E85D04]"
                />
                <select
                  value={formData.propertySize}
                  onChange={(e) => setFormData({...formData, propertySize: e.target.value})}
                  className="h-12 border border-gray-200 rounded-xl focus-visible:ring-[#E85D04 bg-white"
                >
                  <option value="">Property Size</option>
                  <option value="studio">Studio / Bedsitter</option>
                  <option value="1br">1 Bedroom</option>
                  <option value="2br">2 Bedrooms</option>
                  <option value="3br">3 Bedrooms</option>
                  <option value="4br">4+ Bedrooms</option>
                  <option value="office">Office</option>
                </select>
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                <Home className="w-4 h-4 text-[#E85D04]" />
                Service Type
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'household', label: 'Household', icon: Home },
                  { value: 'office', label: 'Office', icon: Building },
                  { value: 'vehicle', label: 'Vehicle', icon: Truck },
                  { value: 'packing', label: 'Packing', icon: Package },
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({...formData, service: option.value})}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        formData.service === option.value
                          ? 'border-[#E85D04] bg-[#E85D04]/5'
                          : 'border-gray-200 hover:border-[#E85D04]/50'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${
                        formData.service === option.value ? 'text-[#E85D04]' : 'text-gray-400'
                      }`} />
                      <span className={`text-sm font-medium ${
                        formData.service === option.value ? 'text-[#E85D04]' : 'text-gray-600'
                      }`}>
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#1A1A2E] flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E85D04]" />
                Additional Details (Optional)
              </h3>
              <textarea
                placeholder="Tell us about any special items, access restrictions, or other details..."
                value={formData.additionalDetails}
                onChange={(e) => setFormData({...formData, additionalDetails: e.target.value})}
                rows={3}
                className="w-full border border-gray-200 rounded-xl p-3 focus-visible:ring-[#E85D04] resize-none"
              />
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800">Request Submitted!</p>
                  <p className="text-sm text-green-700">{statusMessage}</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-800">Submission Failed</p>
                  <p className="text-sm text-red-700">{statusMessage}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-[#E85D04] hover:bg-[#d14a00] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:scale-[1.02] text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  Submit Request
                </>
              )}
            </Button>

            <p className="text-xs text-center text-gray-500">
              By submitting, you agree to our Terms & Conditions. We'll never share your information.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

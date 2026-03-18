/**
 * Email Service using Formspree (Free Tier)
 * 
 * Setup Instructions:
 * 1. Go to https://formspree.io/
 * 2. Create a free account
 * 3. Create a new form and get your Form ID
 * 4. Replace 'YOUR_FORMSPREE_FORM_ID' below with your actual Form ID
 * 
 * Free Tier Limits:
 * - 50 submissions per month
 * - Email notifications
 * - Basic spam protection
 */

const FORMSPREE_FORM_ID = 'xnjglprg'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

export interface EmailFormData {
  name: string;
  phone: string;
  email: string;
  moveDate?: string;
  service?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  propertySize?: string;
  additionalDetails?: string;
  subject?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Send email via Formspree
 */
export async function sendEmail(data: EmailFormData): Promise<EmailResponse> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        moveDate: data.moveDate,
        service: data.service,
        pickupLocation: data.pickupLocation,
        dropoffLocation: data.dropoffLocation,
        propertySize: data.propertySize,
        additionalDetails: data.additionalDetails,
        subject: data.subject || 'New Moving Request - BID Logistics',
        _cc: 'bidlogistics9@gmail.com', // CC to company email
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Thank you! Your request has been submitted successfully. We\'ll contact you within 24 hours.',
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.errors?.[0]?.message || 'Failed to send request. Please try again.',
      };
    }
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}

/**
 * Alternative: Send email using mailto link (fallback)
 * This opens the user's default email client
 */
export function sendEmailViaMailto(data: EmailFormData): void {
  const subject = encodeURIComponent(data.subject || 'New Moving Request - BID Logistics');
  const body = encodeURIComponent(`
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
${data.moveDate ? `Move Date: ${data.moveDate}` : ''}
${data.service ? `Service: ${data.service}` : ''}
${data.pickupLocation ? `Pickup: ${data.pickupLocation}` : ''}
${data.dropoffLocation ? `Dropoff: ${data.dropoffLocation}` : ''}
${data.propertySize ? `Property Size: ${data.propertySize}` : ''}
${data.additionalDetails ? `Additional Details: ${data.additionalDetails}` : ''}
  `.trim());

  window.location.href = `mailto:info@bidlogistics.co.ke?subject=${subject}&body=${body}`;
}

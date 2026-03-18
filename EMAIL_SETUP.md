# Email Service Setup Guide - BID LOGISTICS

## Overview
The website now uses **Formspree** (free tier) to handle form submissions via email without requiring a backend server.

## Free Tier Limits
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Basic spam protection
- ✅ No credit card required

## Setup Instructions

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" or "Sign Up"
3. Create a free account with your email

### Step 2: Create a New Form
1. After logging in, click "+ New Form"
2. Name it: "BID Logistics - Moving Requests"
3. Enter the email where you want to receive submissions (e.g., `info@bidlogistics.co.ke`)
4. Click "Create Form"

### Step 3: Get Your Form ID
1. After creating the form, you'll see a form endpoint like:
   ```
   https://formspree.io/f/xnqobzqr
   ```
2. Your **Form ID** is the part after `/f/` (e.g., `xnqobzqr`)

### Step 4: Update the Code
1. Open: `src/lib/emailService.ts`
2. Find this line:
   ```typescript
   const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID';
   ```
3. Replace `YOUR_FORMSPREE_FORM_ID` with your actual Form ID:
   ```typescript
   const FORMSPREE_FORM_ID = 'xnqobzqr'; // Your actual Form ID
   ```

### Step 5: Test the Forms
1. Run the development server: `npm run dev`
2. Test all three forms:
   - **Hero Modal** - "Request for Moving" button
   - **Quote Section** - Bottom of page orange section
   - Any other contact forms

## Forms Integrated

### 1. Request Move Modal (Hero Section)
- Full Name
- Phone Number
- Email
- Pickup Location
- Dropoff Location
- Move Date
- Property Size
- Service Type (Household, Office, Vehicle, Packing)
- Additional Details

### 2. Quote Request Form (NewsletterSection)
- Name
- Phone
- Email
- Move Date
- Service Type

## Email Notification Format
When someone submits a form, you'll receive an email like:

```
Subject: New Move Request - BID Logistics

Name: John Kamau
Phone: +254 700 123 456
Email: john@example.com
Move Date: 2026-03-25
Service: household
Pickup Location: Westlands, Nairobi
Dropoff Location: Nyali, Mombasa
Property Size: 2br
Additional Details: Need packing services for fragile items
```

## Customization Options

### Change Recipient Email
In `src/lib/emailService.ts`, modify the `_cc` field:
```typescript
_cc: 'your-email@example.com',
```

### Add Custom Fields
Add new fields to the `EmailFormData` interface and include them in the form submission.

## Upgrading (Optional)
If you exceed 50 submissions/month, consider:
- **Basic Plan**: $10/month (200 submissions)
- **Pro Plan**: $25/month (1000 submissions)

Or create multiple free forms with different Form IDs.

## Troubleshooting

### Forms Not Sending?
1. Check that you replaced `YOUR_FORMSPREE_FORM_ID`
2. Verify your Form ID is correct
3. Check browser console for errors
4. Ensure internet connection is active

### Not Receiving Emails?
1. Check spam folder
2. Verify email address in Formspree dashboard
3. Confirm your Formspree account is verified
4. Check Formspree dashboard for submission logs

## Alternative: Mailto Fallback
The email service includes a `sendEmailViaMailto` function that opens the user's default email client. This can be used as a fallback if Formspree is unavailable.

## Support
For Formspree issues: [https://help.formspree.io/](https://help.formspree.io/)

---
**Last Updated**: March 18, 2026

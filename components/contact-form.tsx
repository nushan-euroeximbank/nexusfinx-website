'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
  formsparkUrl: string;
  recaptchaSiteKey: string;
  showSubject?: boolean;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formsparkUrl,
  recaptchaSiteKey,
  showSubject = true,
  formClassName = 'space-y-6',
  inputClassName = 'transition-all duration-300 focus:border-[#002E5B] focus:ring-[#002E5B]',
  buttonClassName = 'w-full bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]',
}) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!recaptchaToken) {
      event.preventDefault();
      alert('Please complete the reCAPTCHA verification.');
    }
    // Form will submit naturally if reCAPTCHA is passed
  };

  return (
    <form 
      ref={formRef}
      className={formClassName}
      action={formsparkUrl} 
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_redirect" value="https://nexusfinx.com/thanks" />
      <input type="hidden" name="_append" value="false" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className={inputClassName}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className={inputClassName}
          />
        </div>
      </div>

      {showSubject && (
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="What is this regarding?"
            required
            className={inputClassName}
          />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          required
          className={inputClassName}
        />
      </div>

      <div className="my-4">
        <ReCAPTCHA
          sitekey={recaptchaSiteKey}
          onChange={handleRecaptchaChange}
        />
      </div>

      <Button
        type="submit"
        className={buttonClassName}
        disabled={!recaptchaToken} // Optionally disable button until reCAPTCHA is passed
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm; 
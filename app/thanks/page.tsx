import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function ThanksPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-xl shadow-lg">
        <div>
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Thank You!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Your message has been sent successfully.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            We will get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild className="w-full bg-[#002E5B] hover:bg-[#002750] transition-colors">
            <Link href="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 
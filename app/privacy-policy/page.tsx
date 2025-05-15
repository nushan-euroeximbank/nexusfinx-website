import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center animate-fadeIn">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#002E5B]">
              Privacy Policy
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              At NexusFinX, we are committed to protecting your personal information and your right to privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-12 animate-fadeIn animation-delay-200">
            {/* Introduction */}
            <div>
              <p className="text-gray-700 mb-4">
                At NexusFinX, accessible from{" "}
                <Link href="https://nexusfinx.com" className="text-[#002E5B] hover:underline">
                  https://nexusfinx.com
                </Link>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                Please read this privacy policy carefully. If you do not agree with the terms of this policy, please do not access the site.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Sign up for an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our financial services</li>
                <li>Contact us for support</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Personal Data may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Financial information</li>
                <li>IP address</li>
                <li>Any other data you choose to provide</li>
              </ul>
              <p className="text-gray-700">
                We may also collect non-personal information automatically, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Browser type</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages visited and time spent</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700">
                We use your information for purposes such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Providing and managing your account</li>
                <li>Delivering services you request</li>
                <li>Sending administrative information</li>
                <li>Analyzing website usage</li>
                <li>Marketing and promotional communication (only with your consent)</li>
                <li>Enhancing user experience</li>
                <li>Ensuring security and preventing fraud</li>
              </ul>
            </div>

            {/* 3. Sharing Your Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                3. Sharing Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Service providers who help operate our platform</li>
                <li>Legal authorities if required by law</li>
                <li>Third parties in connection with business transfers</li>
              </ul>
              <p className="text-gray-700">
                All third parties are bound by confidentiality agreements and only have access to information necessary to perform their functions.
              </p>
            </div>

            {/* 4. Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Improve site functionality</li>
                <li>Personalize content</li>
                <li>Analyze traffic patterns</li>
                <li>Remember your preferences</li>
              </ul>
              <p className="text-gray-700">
                You can choose to disable cookies through your browser settings, but this may affect the website's functionality.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                5. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Secure server connections (SSL)</li>
                <li>Encrypted databases</li>
                <li>Access controls and authentication</li>
              </ul>
              <p className="text-gray-700">
                However, no system is 100% secure. We cannot guarantee the absolute security of your data.
              </p>
            </div>

            {/* 6. Your Privacy Rights */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                6. Your Privacy Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have rights under data protection laws, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>The right to access your data</li>
                <li>The right to correct or delete your data</li>
                <li>The right to object to or restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-700">
                To exercise your rights, please contact us at{" "}
                <a href="mailto:info@nexusfinx.com" className="text-[#002E5B] hover:underline">
                  info@nexusfinx.com
                </a>.
              </p>
            </div>

            {/* 7. Children’s Privacy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                7. Children’s Privacy
              </h2>
              <p className="text-gray-700">
                Our website and services are not directed to children under 13. We do not knowingly collect information from children. If we discover such information, we will delete it promptly.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our site may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. Please review their privacy policies before submitting any data.
              </p>
            </div>

            {/* 9. Changes to This Privacy Policy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update this policy from time to time. We will notify you of significant changes by updating the date at the top of this page and, if appropriate, notifying you by email.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#002E5B]">
                10. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 mb-2">
                <strong>NexusFinX</strong><br />
                Email: <a href="mailto:info@nexusfinx.com" className="text-[#002E5B] hover:underline">info@nexusfinx.com</a><br />
                Website: <Link href="https://nexusfinx.com" className="text-[#002E5B] hover:underline">https://nexusfinx.com</Link>
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center animate-fadeIn animation-delay-400">
            <Button
              asChild
              className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
            >
              <Link href="/" className="flex items-center gap-2">
                Back to Home <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
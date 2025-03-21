import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function LicensePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Banking License Information</h1>
      <p className="text-xl mb-8">Our regulatory compliance and banking licenses</p>
    </div>
  </div>
  {/* Background image without gradient overlay */}
  <div className="absolute inset-0">
    <Image
      src="/images/l.jpg"
      alt="Financial Chart Background"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
  {/* Semi-transparent overlay for better text readability */}
  <div className="absolute inset-0 bg-black/30"></div>
</section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">License</h2>

            <p>
              Nexus International is duly authorized and licensed to engage in financial activities in compliance with
              the legal frameworks established by the Anjouan Offshore Finance Authority act 003 of 2005, the
              International Banking act 205 of 2005, and the International Business Companies Act 004 of 2005, along
              with the corresponding conditions and Regulatory Code outlined in these Acts.
            </p>

            <p className="my-6">
              The Anjouan Offshore Finance Authority (AOFA) oversees the regulation of companies providing banking
              services within the Autonomous Island of Anjouan, Union of the Comoros.
            </p>

            <p className="mb-6">
              For more detailed information, please feel free to reach out to us directly or visit the AOFA website:
            </p>

            <div className="mb-8">
              <Button asChild className="bg-[#002E5B] hover:bg-[#00417e] flex items-center gap-2">
                <a href="https://anjouanoffshorefinancialauthority.org/" target="_blank" rel="noopener noreferrer">
                  Anjouan Offshore Finance Authority <ExternalLink size={16} />
                </a>
              </Button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-[#002E5B]">Anjouan Offshore Finance Authority (AOFA)</h3>
              <address className="not-italic">
                Hamchako
                <br />
                Autonomous Island of Anjouan
                <br />
                Union of Comoros
              </address>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#002E5B]">Our Commitment to Regulatory Compliance</h3>
            <p>
              At NexusFinX, we are committed to maintaining the highest standards of regulatory compliance. Our
              operations adhere to international banking standards and best practices, including those related to
              anti-money laundering (AML) and counter-terrorist financing (CTF).
            </p>

            <p>
              We work closely with regulatory authorities to ensure that our services meet all legal requirements and
              provide our clients with secure and compliant banking solutions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">Verification</h3>
            <p>
              If you would like to verify our banking license or have any questions about our regulatory status, please
              contact us at{" "}
              <a href="mailto:Info@nexusfinx.com" className="text-[#002E5B] hover:underline">
                Info@nexusfinx.com
              </a>
              . We are happy to provide documentation and information to confirm our legitimate status as a licensed
              offshore bank.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


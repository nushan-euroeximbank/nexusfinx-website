import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              About NexusFinX
            </h1>
            <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
              Your trusted partner in offshore banking and company formation
            </p>
          </div>
        </div>
        {/* Background image without gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/about_bg.webp"
            alt="Financial Chart Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">
                Nexus International Finance Services
              </h2>
              <p className="text-gray-700 mb-6">
                Nexus International is a dynamic finance company licensed in the
                Union of the Comoros, offering a wide range of exclusive
                services to approved clients, excluding residents of the Comoros
                and jurisdictions under FINMA (Switzerland) or BaFin (Germany).
                Specializing in trade finance, private and corporate digital
                finance, and innovative blockchain solutions, the company
                provides tailored products such as guarantees, letters of
                credit, and proofs of funds.
              </p>
              <p className="text-gray-700 mb-6">
                Through its all-in-one digital wallet, accessible via a
                user-friendly platform and mobile app, Nexus International
                enables 24/7 account management, seamless transfers, and
                multilingual customer support. Combining cutting-edge innovation
                with traditional financial expertise, Nexus International is
                dedicated to delivering reliable, professional, and secure
                financial services to its global clientele.
              </p>
              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="animate-fadeIn animation-delay-200">
              <Image
                src="/about.jpg"
                alt="About NexusFinX"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">
              Our Founder
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-6 text-[#002E5B]">
                Dr. Sanjay Thakrar
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6 leading-relaxed">
                  Dr. Sanjay Thakrar is the Founder of Euro Exim Bank, a St.
                  Lucia-based challenger bank in Trade Finance with a London
                  Representative Office. The bank operates in over 180
                  countries, supported by an India-based back-office providing
                  sales, compliance, legal, and IT services.
                </p>
                <p className="mb-6 leading-relaxed">
                  Holding a Bachelor's and Master's degree, Dr. Thakrar has
                  extensive expertise in trade finance, invoice discounting, and
                  the import-export lifecycle. With experience running his own
                  businesses, he combines technical and business insights,
                  focusing on growth, market share, and impactful CSR programs
                  in emerging markets.
                </p>
                <p className="mb-6 leading-relaxed">
                  A leading expert in Trade Finance instruments like Letters of
                  Credit and Bank Guarantees, Dr. Thakrar is also skilled in
                  SWIFT systems and played a key role in developing Euro Exim
                  Bank's advanced SimpleX Trade Finance Platform.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-slideInRight">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder%27s%20image%20-IAq6dldJRGR7wuyqVZx0rDfpnDSmEj.png"
                alt="Dr. Sanjay Thakrar"
                width={400}
                height={500}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Links to Other Pages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">
              Learn More About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn">
              <h3 className="text-xl font-bold mb-4 text-[#002E5B]">
                Financial Crime Prevention
              </h3>
              <p className="text-gray-700 mb-6">
                Learn about our commitment to preventing financial crime and
                ensuring compliance with international regulations.
              </p>
              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="/about/financial-crime">Learn More</Link>
              </Button>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn animation-delay-200">
              <h3 className="text-xl font-bold mb-4 text-[#002E5B]">
                License Information
              </h3>
              <p className="text-gray-700 mb-6">
                Information about our banking licenses and regulatory
                compliance.
              </p>
              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="/about/license">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

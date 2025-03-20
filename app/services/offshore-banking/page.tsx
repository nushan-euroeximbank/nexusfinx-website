import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OffshoreBankingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#001a33] to-[#002E5B] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Offshore Banking Services</h1>
            <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
              Secure and private banking solutions for international clients
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/financial-chart.jpeg"
            alt="Financial Chart Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">Why Choose Offshore Banking?</h2>
              <p className="text-gray-700 mb-6">
                Offshore banking offers numerous advantages for individuals and businesses seeking financial privacy,
                asset protection, and international banking capabilities. At NexusFinX, we provide comprehensive
                offshore banking services tailored to your specific needs.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Financial Privacy",
                    description:
                      "Enhanced confidentiality for your financial affairs while maintaining compliance with international regulations.",
                  },
                  {
                    title: "Asset Protection",
                    description:
                      "Safeguard your assets from potential legal claims, creditors, and political instability.",
                  },
                  {
                    title: "International Banking Access",
                    description: "Conduct international business transactions with ease and efficiency.",
                  },
                  {
                    title: "Multi-Currency Capabilities",
                    description:
                      "Hold and manage multiple currencies in a single account for international flexibility.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-2 animate-fadeIn"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <h3 className="font-semibold text-[#002E5B] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slideInRight">
              <Image
                src="/placeholder.svg"
                alt="Offshore Banking"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banking Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Our Banking Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer tailored offshore banking services for both individuals and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-4 text-[#002E5B]">Corporate Offshore Banking</h3>
              <p className="text-gray-700 mb-6">
                Banking solutions designed specifically for international businesses, corporations, and entrepreneurs.
                Our corporate banking services provide the tools and features you need to manage your business finances
                globally.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Multi-currency business accounts",
                  "International wire transfers",
                  "Corporate debit cards",
                  "Online banking platform",
                  "Merchant services",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="/services/offshore-banking/corporate">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-slideInRight">
              <h3 className="text-2xl font-bold mb-4 text-[#002E5B]">Individual (Personal) Offshore Banking</h3>
              <p className="text-gray-700 mb-6">
                Private banking solutions for individuals seeking financial privacy, asset protection, and international
                banking capabilities. Our personal banking services are designed to meet your unique financial needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Personal multi-currency accounts",
                  "International wire transfers",
                  "Personal debit cards",
                  "Online banking access",
                  "Wealth management services",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="/services/offshore-banking/personal">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">Ready to Open Your Offshore Account?</h2>
          <p className="text-gray-700 mb-8">
            Contact us today to start the process of opening your offshore bank account. Our team of experts will guide
            you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
            >
              <Link href="https://secure.nexusinternationalfinanceltd.com/register_personal.php?visitor_language=english">
                Open Personal Account
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent text-[#002E5B] border-2 border-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-transparent"
            >
              <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                Open Business Account
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


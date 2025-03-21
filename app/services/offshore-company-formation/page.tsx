import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function OffshoreCompanyFormationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Offshore Company Formation Anjouan</h1>
      <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
        Establish your business in Anjouan with our comprehensive company formation services
      </p>
    </div>
  </div>
  {/* Background image without gradient overlay */}
  <div className="absolute inset-0">
    <Image
      src="/images/ar.jpg"
      alt="Financial Chart Background"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
</section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">
              Offshore Company Formation in Anjouan
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Setting up an offshore company in Anjouan offers businesses and entrepreneurs a strategic advantage in
              terms of taxation, asset protection, and operational flexibility. Whether you are looking to expand
              globally, protect your wealth, or optimize your financial structure, Anjouan provides a secure and
              business-friendly environment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Key Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Key Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of establishing your offshore company in Anjouan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tax Efficiency",
                description: "Enjoy minimal or zero corporate taxation, depending on your business structure.",
              },
              {
                title: "Confidentiality",
                description:
                  "Business owners benefit from strict privacy regulations protecting shareholder and director information.",
              },
              {
                title: "Asset Protection",
                description:
                  "Offshore incorporation helps shield your assets from legal claims and economic instability.",
              },
              {
                title: "Ease of Incorporation",
                description: "Quick and hassle-free company registration process with minimal bureaucratic hurdles.",
              },
              {
                title: "Global Business Opportunities",
                description:
                  "Conduct international business operations with greater flexibility and fewer restrictions.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  <h3 className="font-bold text-xl text-[#002E5B]">{benefit.title}</h3>
                </div>
                <p className="text-gray-700 ml-9">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why Form an Offshore Company */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">Why Form an Offshore Company?</h2>
              <p className="text-gray-700 mb-6">
                Establishing an offshore company in Anjouan offers numerous benefits for entrepreneurs and businesses
                looking to expand internationally. Our offshore company formation services provide a streamlined process
                to help you take advantage of these benefits.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <CheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#002E5B]">Asset Protection</h3>
                    <p className="text-gray-600">Protect your assets from potential legal claims and liabilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <CheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#002E5B]">Tax Efficiency</h3>
                    <p className="text-gray-600">
                      Benefit from Anjouan's favorable tax environment for international businesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <CheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#002E5B]">Privacy and Confidentiality</h3>
                    <p className="text-gray-600">
                      Maintain greater privacy for your business operations and ownership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <CheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#002E5B]">International Business Expansion</h3>
                    <p className="text-gray-600">
                      Create a platform for international business activities and investments.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                  Start Your Company Formation
                </Link>
              </Button>
            </div>
            <div className="animate-slideInRight">
              <Image
                src="/as01.jpg"
                alt="Offshore Company Formation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive offshore company formation services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Company name registration and incorporation",
                description:
                  "We handle the entire process of registering your company name and completing the incorporation process in Anjouan.",
              },
              {
                title: "Registered office and agent services",
                description:
                  "We provide a registered office address and agent services to meet local requirements and maintain your company's good standing.",
              },
              {
                title: "Corporate bank account setup assistance",
                description:
                  "We assist you in setting up corporate bank accounts with reputable financial institutions to support your business operations.",
              },
              {
                title: "Compliance and legal advisory",
                description:
                  "Our experts provide guidance on compliance matters and legal requirements to ensure your offshore company operates within regulatory frameworks.",
              },
              {
                title: "Annual maintenance and reporting",
                description:
                  "We handle annual maintenance tasks and reporting requirements to keep your offshore company in good standing with local authorities.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0" />
                  <h3 className="font-bold text-lg text-[#002E5B]">{service.title}</h3>
                </div>
                <p className="text-gray-700 ml-9">{service.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-gray-700 mb-8 text-lg">
              Let us help you establish a strong offshore presence in Anjouan with a tailored solution that aligns with
              your business objectives.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
            >
              <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                Start Your Company Formation
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Our Company Formation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make establishing your offshore company simple and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Consultation",
                description:
                  "We discuss your needs and objectives to determine the best structure for your offshore company.",
              },
              {
                step: 2,
                title: "Documentation",
                description: "We prepare and submit all necessary documentation for your company registration.",
              },
              {
                step: 3,
                title: "Registration",
                description: "We register your company with the relevant authorities in Anjouan.",
              },
              {
                step: 4,
                title: "Banking Setup",
                description: "We assist you in setting up offshore banking services for your new company.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-12 h-12 bg-[#002E5B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#002E5B]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">Ready to Form Your Offshore Company?</h2>
          <p className="text-gray-700 mb-8">
            Contact us today to start the process of establishing your offshore company in Anjouan. Our team of experts
            will guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
            >
              <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                Start Company Formation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent text-[#002E5B] border-2 border-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PersonalOffshoreBankingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
        Individual (Personal) Offshore Banking
      </h1>
      <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
        Private banking solutions for individuals seeking financial privacy and asset protection
      </p>
    </div>
  </div>
  <div className="absolute inset-0">
    <Image
      src="/images/per.jpg"
      alt="Financial Chart Background"
      fill
      sizes="100vw"
      className="object-cover object-center"
      priority
    />
  </div>
</section>

      

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">Personal Banking Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our personal offshore banking services are designed to meet the unique needs of individuals seeking
                financial privacy, asset protection, and international banking capabilities. We provide the banking
                tools and features you need to manage your finances globally.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Personal Multi-Currency Accounts",
                    description:
                      "Hold and manage multiple currencies in a single account for international flexibility.",
                  },
                  {
                    title: "International Wire Transfers",
                    description: "Send and receive funds globally with competitive fees and exchange rates.",
                  },
                  {
                    title: "Personal Debit Cards",
                    description:
                      "Access your funds worldwide with personal debit cards linked to your offshore account.",
                  },
                  {
                    title: "Online Banking Access",
                    description:
                      "Manage your accounts securely from anywhere in the world with our advanced online banking system.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 animate-fadeIn"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <CheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#002E5B]">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="https://secure.nexusinternationalfinanceltd.com/register_personal.php?visitor_language=english">
                  Open Personal Account
                </Link>
              </Button>
            </div>
            <div className="animate-slideInRight">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/pre01.jpg"
                  alt="Personal Offshore Banking"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="rounded-lg shadow-lg object-cover transition-all duration-500 hover:shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#002E5B] text-center">
              Individual (Personal) Offshore Banking
            </h2>
            <p className="text-gray-700 text-lg mb-6 text-center">
              For individuals seeking financial privacy, wealth protection, and global banking access, an offshore
              personal bank account offers unparalleled benefits.
            </p>
            <p className="text-gray-700 text-lg mb-8 text-center">
              Take advantage of offshore banking with complete confidentiality, financial security, and seamless global
              transactions.
            </p>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn mt-10">
              <div className="bg-[#002E5B] text-white p-4">
                <h3 className="text-xl font-bold">Pricing & Fees</h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <span className="font-semibold text-[#002E5B]">Bank account opening only</span>
                    <span className="font-bold text-[#002E5B] text-xl">$5,000</span>
                  </div>
                </div>

                <h4 className="font-semibold text-[#002E5B] mb-4">Transaction Fees:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-5 transition-all duration-300 hover:shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-[#002E5B]">Outgoing Transfers</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-bold text-[#002E5B]">1%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-600">Minimum:</span>
                      <span className="font-bold text-[#002E5B]">$40</span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-5 transition-all duration-300 hover:shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-[#002E5B]">Incoming Transfers</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-bold text-[#002E5B]">1%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-600">Minimum:</span>
                      <span className="font-bold text-[#002E5B]">$40</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Features & Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of our personal offshore banking solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure multi-currency accounts",
                description:
                  "Manage multiple currencies in one account with enhanced security features to protect your assets.",
              },
              {
                title: "High-level financial privacy and asset protection",
                description:
                  "Benefit from stringent privacy measures that safeguard your financial information and assets.",
              },
              {
                title: "Access to international investment opportunities",
                description:
                  "Gain access to global investment options not typically available through domestic banking.",
              },
              {
                title: "Low or zero taxation on interest earnings",
                description:
                  "Potentially benefit from favorable tax treatment on interest income in certain jurisdictions.",
              },
              {
                title: "Flexible fund transfers and remittance services",
                description:
                  "Transfer funds internationally with ease and efficiency through our secure banking network.",
              },
              {
                title: "Personalized banking services and wealth advisory",
                description:
                  "Receive tailored financial guidance and personalized service from our experienced advisors.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-3 text-[#002E5B]">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center animate-fadeIn animation-delay-400">
            <p className="text-gray-700 text-lg">
              With our offshore banking solutions, you can confidently manage your financial assets, ensuring security
              and growth in a globally connected economy.
            </p>
          </div>
        </div>
      </section>
      

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">Ready to Open Your Personal Account?</h2>
          <p className="text-gray-700 mb-8">
            Contact us today to start the process of opening your personal offshore bank account. Our team of experts
            will guide you through every step of the process.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


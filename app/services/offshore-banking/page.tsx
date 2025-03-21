import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, LogIn, UserPlus } from "lucide-react"

export default function OffshoreBankingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Offshore Banking Services</h1>
      <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
        Secure and private banking solutions for international clients
      </p>
    </div>
  </div>
  <div className="absolute inset-0">
    <Image
      src="/images/ar02.jpg"
      alt="Financial Chart Background"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
</section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">Offshore Banking Services</h2>
            <p className="text-gray-700 text-lg mb-6">
              Offshore banking offers individuals and businesses financial security, flexibility, and enhanced asset
              protection. Whether you require corporate or personal banking solutions, our offshore banking services
              provide seamless access to international financial networks, competitive banking features, and
              confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B] flex items-center gap-2"
              >
                <Link href="https://secure.nexusinternationalfinanceltd.com/login.php">
                  <LogIn className="w-5 h-5" /> Login to Your Account
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent text-[#002E5B] border-2 border-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-transparent flex items-center gap-2"
              >
                <Link href="https://secure.nexusinternationalfinanceltd.com/register_personal.php?visitor_language=english">
                  <UserPlus className="w-5 h-5" /> Register New Account
                </Link>
              </Button>
            </div>
          </div>
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
                    className="bg-white p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-2 animate-fadeIn"
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
                src="/as02jpg.jpg"
                alt="Offshore Banking"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Our Banking Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the offshore banking solution that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn border-t-4 border-[#002E5B] flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-[#002E5B]">Company Formation + Bank Account</h3>
                  <div className="text-3xl font-bold text-[#002E5B]">$8,500</div>
                </div>
                <p className="text-gray-700 mb-6">
                  Includes full company registration in Anjouan and an offshore corporate bank account.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Complete company registration in Anjouan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Corporate offshore bank account setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>All necessary documentation and filings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Registered office address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Online banking access</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Button
                  asChild
                  className="w-full bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
                >
                  <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn animation-delay-200 border-t-4 border-yellow-500 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-[#002E5B]">Bank Account Opening Only</h3>
                  <div className="text-3xl font-bold text-[#002E5B]">$5,000</div>
                </div>
                <p className="text-gray-700 mb-6">
                  If you already have an offshore company and need a reliable banking partner, we facilitate a seamless
                  bank account setup.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Offshore bank account setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Multi-currency account options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Online banking access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>International wire transfer capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>Banking documentation assistance</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Button
                  asChild
                  className="w-full bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
                >
                  <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Fees Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Transaction Fees</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transparent fee structure for all your banking transactions
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn">
              <div className="bg-[#002E5B] text-white p-4">
                <h3 className="text-xl font-bold">Standard Transaction Fees</h3>
              </div>
              <div className="p-6">
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
                <p className="text-gray-600 mt-6 text-sm">
                  Note: Additional fees may apply for special services or transactions. Please contact us for a complete
                  fee schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Options */}
      <section className="py-16 md:py-24 bg-white">
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
    </div>
  )
}


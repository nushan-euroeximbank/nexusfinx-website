import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CorporateOffshoreBankingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Corporate Offshore Banking</h1>
      <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
        Banking solutions tailored for international businesses and corporations
      </p>
    </div>
  </div>
  <div className="absolute inset-0">
    <Image
      src="/images/co.jpg"
      alt="Financial Chart Background"
      fill
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
              <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">Corporate Banking Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our corporate offshore banking services are designed to meet the unique needs of international
                businesses. Whether you're a small startup or a large corporation, we provide the banking tools and
                features you need to operate globally.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Multi-Currency Business Accounts",
                    description:
                      "Hold and manage multiple currencies in a single account for international business operations.",
                  },
                  {
                    title: "International Wire Transfers",
                    description: "Send and receive funds globally with competitive fees and exchange rates.",
                  },
                  {
                    title: "Corporate Debit Cards",
                    description: "Access your funds worldwide with corporate debit cards for you and your team.",
                  },
                  {
                    title: "Online Banking Platform",
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
                <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                  Open Corporate Account
                </Link>
              </Button>
            </div>
            <div className="animate-slideInRight">
              <Image
                src="/co01.jpg"
                alt="Corporate Offshore Banking"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Introduction Section */}
       <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#002E5B] text-center">Corporate Offshore Banking</h2>
            <p className="text-gray-700 text-lg mb-8 text-center">
              For businesses operating internationally, offshore corporate banking provides essential financial services
              tailored to global enterprises.
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
              Discover the advantages of our corporate offshore banking solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-currency accounts for global transactions",
                description:
                  "Manage multiple currencies seamlessly, reducing exchange rate risks and facilitating international business operations.",
              },
              {
                title: "Secure online banking with 24/7 access",
                description:
                  "Access your accounts anytime, anywhere with our state-of-the-art secure online banking platform.",
              },
              {
                title: "Strict confidentiality and asset protection",
                description:
                  "Benefit from enhanced privacy measures and robust asset protection strategies for your business.",
              },
              {
                title: "Wealth management and investment solutions",
                description:
                  "Access specialized wealth management services designed to grow and protect your corporate assets.",
              },
              {
                title: "Business credit and debit card facilities",
                description:
                  "Utilize corporate cards for convenient business expenses and improved financial management.",
              },
              {
                title: "Expert assistance and support",
                description:
                  "Receive dedicated support from our team of banking professionals who understand international business needs.",
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

        </div>
      </section>

   
      

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">Ready to Open Your Corporate Account?</h2>
          <p className="text-gray-700 mb-8">
            Contact us today to start the process of opening your corporate offshore bank account. Our team of experts
            will guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
            >
              <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                Open Corporate Account
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


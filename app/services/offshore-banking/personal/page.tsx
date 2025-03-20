import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PersonalOffshoreBankingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#001a33] to-[#002E5B] text-white py-20 md:py-32">
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
              <Image
                src="/placeholder.svg"
                alt="Personal Offshore Banking"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Benefits for Individuals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our personal offshore banking services can benefit you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Asset Protection",
                description:
                  "Protect your personal assets from potential legal claims, creditors, and political instability in your home country.",
              },
              {
                title: "Financial Privacy",
                description:
                  "Maintain greater privacy for your personal financial affairs while ensuring compliance with international regulations.",
              },
              {
                title: "Currency Diversification",
                description:
                  "Reduce currency risk by holding multiple currencies and conducting transactions in the currency of your choice.",
              },
              {
                title: "International Lifestyle",
                description:
                  "Support an international lifestyle with banking services designed for global citizens who travel or live abroad.",
              },
              {
                title: "Wealth Management",
                description: "Access wealth management services to help grow and protect your assets for the future.",
              },
              {
                title: "Expert Support",
                description:
                  "Receive dedicated support from our team of banking professionals who understand the unique needs of international individuals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-3 text-[#002E5B]">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
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


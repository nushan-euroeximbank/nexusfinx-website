import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#001a33] to-[#002E5B] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Our Services</h1>
            <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
              Comprehensive offshore banking and company formation solutions
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

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">Our Offshore Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NexusFinX offers a comprehensive range of offshore banking and company formation services designed to meet
              your financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Offshore Company Formation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn">
              <div className="relative h-64">
                <Image src="/placeholder.svg" alt="Offshore Company Formation" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#002E5B]">Offshore Company Formation</h3>
                <p className="text-gray-700 mb-6">
                  Establish your business in Anjouan with our comprehensive company formation services. We handle all
                  aspects of the registration process, ensuring a smooth and efficient experience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>Quick and efficient company registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>Corporate documentation preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>Registered office address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>Corporate secretary services</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
                >
                  <Link href="/services/offshore-company-formation">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Offshore Banking Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 animate-fadeIn animation-delay-200">
              <div className="relative h-64">
                <Image src="/placeholder.svg" alt="Offshore Banking Services" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#002E5B]">Offshore Banking Services</h3>
                <p className="text-gray-700 mb-6">
                  Secure and private banking solutions for international clients. Our offshore banking services provide
                  you with the financial privacy and asset protection you need.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>Corporate offshore banking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>Individual (personal) offshore banking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>Multi-currency accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-yellow-500 mt-1 flex-shrink-0 w-4 h-4" />
                    <span>International wire transfers</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
                >
                  <Link href="/services/offshore-banking">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our offshore banking and company formation services. Our team of
            experts is ready to assist you.
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


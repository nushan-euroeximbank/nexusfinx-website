import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - 100% height */}
      <section className="relative text-white h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
              Unlock Offshore Banking With NexusFinX
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-200">
              Empowering Your Financial Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-[#002E5B] border-2 border-yellow-500 transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="https://secure.nexusinternationalfinanceltd.com/register_personal.php?visitor_language=english">
                  Personal Account
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent text-white border-2 border-yellow-500 transition-transform duration-300 hover:scale-105 hover:bg-transparent"
              >
                <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                  Business Account
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background image without gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/Roadmap-5.jpg"
            alt="Financial Chart Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Section One */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <Image
                src="/why.png"
                alt="Offshore Banking"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
            <div className="animate-slideInRight">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002E5B]">
                Unlock Offshore Banking with NexusFinX
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Looking to expand your business beyond borders? At NexusFinX, we
                empower entrepreneurs and individuals with seamless offshore
                company formation and banking solutions. Whether you're
                safeguarding your assets, optimizing tax benefits, or
                diversifying your financial portfolio, we make the process
                smooth, secure, and hassle-free.
              </p>
              <Button
                asChild
                className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Find out more <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Two - Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive offshore banking solutions with unmatched
              expertise and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Effortless offshore company registration in Anjuon.",
              "Secure and private banking solutions for individuals & businesses.",
              "Transparent, competitive pricing – no hidden fees.",
              "Expert support from start to finish.",
              "Compliance with global regulations.",
              "Enjoy fast and secure international transfers with competitive fees.",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Three - Contact Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002E5B]">
                Get In Touch with Us Anytime!
              </h2>
              <p className="text-gray-600">
                Have questions about our services? We're here to help.
              </p>
            </div>

            <form className="space-y-6 animate-fadeIn animation-delay-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="transition-all duration-300 focus:border-[#002E5B] focus:ring-[#002E5B]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="transition-all duration-300 focus:border-[#002E5B] focus:ring-[#002E5B]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="transition-all duration-300 focus:border-[#002E5B] focus:ring-[#002E5B]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Contact Us</h1>
      <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
        Get in touch with our team for any inquiries or assistance
      </p>
    </div>
  </div>
  <div className="absolute inset-0">
    <Image
      src="/images/contact.jpg"
      alt="Financial Chart Background"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
</section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form className="space-y-6" action="https://submit-form.com/Y8Kgd8Hfs" method="POST">
                <input type="hidden" name="_redirect" value="https://nexusfinx.com/thanks" />
                <input type="hidden" name="_append" value="false" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
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
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="transition-all duration-300 focus:border-[#002E5B] focus:ring-[#002E5B]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    className="transition-all duration-300 focus:border-[#002E5B] focus:ring-[#002E5B]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
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

            {/* Contact Information */}
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                You can reach us through the following channels or visit our office during business hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                  <Mail className="w-6 h-6 text-[#002E5B] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:Info@nexusfinx.com" className="text-[#002E5B] hover:underline">
                      Info@nexusfinx.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                  <MapPin className="w-6 h-6 text-[#002E5B] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p>Anjouan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                  <Phone className="w-6 h-6 text-[#002E5B] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <div className="space-y-1">
                      <p>Monday - Friday: 11:00 am - 8:00 pm</p>
                      <p>Saturday: 10:00 am - 6:00 pm</p>
                      <p>Sunday: 11:00 am - 6:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
                <h3 className="font-semibold text-lg mb-4 text-[#002E5B]">Open an Account</h3>
                <p className="text-gray-700 mb-6">Ready to get started with NexusFinX? Open your account today.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-[#002E5B]"
                  >
                    <a href="https://secure.nexusinternationalfinanceltd.com/register_personal.php?visitor_language=english">
                      Personal Account
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-transparent text-[#002E5B] border-2 border-[#002E5B] transition-transform duration-300 hover:scale-105 hover:bg-transparent"
                  >
                    <a href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                      Business Account
                    </a>
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


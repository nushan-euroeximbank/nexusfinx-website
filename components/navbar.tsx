"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-lw6i8fmi648vV3dPwali3bfDvmJcfv.png"
            alt="NexusFinX Logo"
            width={180}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#002E5B] to-[#00417e] p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">About NexusFinX</div>
                        <p className="text-sm leading-tight text-white/90">
                          Learn about our mission, vision, and commitment to excellence in offshore banking.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/about/financial-crime"
                      >
                        <div className="text-sm font-medium leading-none">Financial Crime</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Our approach to preventing financial crime and ensuring compliance.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/about/license"
                      >
                        <div className="text-sm font-medium leading-none">License</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Information about our banking licenses and regulatory compliance.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/services/offshore-company-formation"
                      >
                        <div className="text-sm font-medium leading-none">Offshore Company Formation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Establish your business in Anjuon with our comprehensive company formation services.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/services/offshore-banking"
                      >
                        <div className="text-sm font-medium leading-none">Offshore Banking Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Secure and private banking solutions for international clients.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="ml-6">
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/services/offshore-banking/corporate"
                      >
                        <div className="text-sm font-medium leading-none">Corporate Offshore Banking</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Banking solutions tailored for international businesses and corporations.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="ml-6">
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/services/offshore-banking/personal"
                      >
                        <div className="text-sm font-medium leading-none">Individual (Personal) Offshore Banking</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Private banking solutions for individuals seeking financial privacy and asset protection.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="p-4 border-b flex items-center justify-between">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-lw6i8fmi648vV3dPwali3bfDvmJcfv.png"
                    alt="NexusFinX Logo"
                    width={150}
                    height={35}
                    priority
                  />
                </Link>
                {/* Removed the duplicate close button here */}
              </div>

              <div className="flex-1 overflow-auto py-2">
                <nav className="flex flex-col">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center px-4 py-3 text-base font-medium hover:bg-gray-100">
                      Home
                    </Link>
                  </SheetClose>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="about" className="border-0">
                      <AccordionTrigger className="px-4 py-3 text-base font-medium hover:bg-gray-100 hover:no-underline">
                        About
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div className="flex flex-col">
                          <SheetClose asChild>
                            <Link href="/about" className="px-6 py-2 text-sm hover:bg-gray-100">
                              About NexusFinX
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/about/financial-crime" className="px-6 py-2 text-sm hover:bg-gray-100">
                              Financial Crime
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/about/license" className="px-6 py-2 text-sm hover:bg-gray-100">
                              License
                            </Link>
                          </SheetClose>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="services" className="border-0">
                      <AccordionTrigger className="px-4 py-3 text-base font-medium hover:bg-gray-100 hover:no-underline">
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div className="flex flex-col">
                          <SheetClose asChild>
                            <Link
                              href="/services/offshore-company-formation"
                              className="px-6 py-2 text-sm hover:bg-gray-100"
                            >
                              Offshore Company Formation
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/services/offshore-banking" className="px-6 py-2 text-sm hover:bg-gray-100">
                              Offshore Banking Services
                            </Link>
                          </SheetClose>

                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="banking" className="border-0">
                              <AccordionTrigger className="px-6 py-2 text-sm hover:bg-gray-100 hover:no-underline">
                                Banking Types
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col">
                                  <SheetClose asChild>
                                    <Link
                                      href="/services/offshore-banking/corporate"
                                      className="px-8 py-2 text-sm hover:bg-gray-100"
                                    >
                                      Corporate Offshore Banking
                                    </Link>
                                  </SheetClose>
                                  <SheetClose asChild>
                                    <Link
                                      href="/services/offshore-banking/personal"
                                      className="px-8 py-2 text-sm hover:bg-gray-100"
                                    >
                                      Individual (Personal) Offshore Banking
                                    </Link>
                                  </SheetClose>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="flex items-center px-4 py-3 text-base font-medium hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </nav>
              </div>

              <div className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-[#002E5B] hover:bg-[#00417e]">
                      <Link href="https://secure.nexusinternationalfinanceltd.com/register_personal.php?visitor_language=english">
                        Personal Account
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="outline" className="w-full text-[#002E5B] border-[#002E5B]">
                      <Link href="https://secure.nexusinternationalfinanceltd.com/register_business.php?visitor_language=english">
                        Business Account
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


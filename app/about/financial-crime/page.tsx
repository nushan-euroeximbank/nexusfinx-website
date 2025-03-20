import Image from "next/image"

export default function FinancialCrimePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#001a33] to-[#002E5B] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Crime Prevention</h1>
            <p className="text-xl mb-8">Our commitment to preventing financial crime and ensuring compliance</p>
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

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-[#002E5B]">Combating Financial Crime</h2>

            <p>
              Nexus International is committed to combating financial crime by implementing measures to detect and
              prevent money laundering, terrorist financing, and other illegal activities. Our policy ensures the
              company is not used for illicit purposes. Staff are trained to understand and apply these measures
              effectively, with success relying on collective vigilance in daily operations.
            </p>

            <p>
              To ensure these policies are effectively implemented, Nexus International and its entire staff must be:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>
                Educated about the legal and regulatory frameworks, as well as the severe legal and regulatory
                consequences of inadvertently aiding financial crime, in every jurisdiction where we operate.
              </li>
              <li>Vigilant regarding the practical methods criminals use to commit financial crimes.</li>
              <li>Prompt in reporting any suspicious activities to Nexus International management.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">LEGAL AND REGULATORY FRAMEWORK</h3>
            <p>
              The Union of the Comoros is a member of the Eastern and Southern Africa Anti-Money Laundering Group
              (ESAAMLG), which combats money laundering by applying Financial Action Task Force (FATF) guidelines.
              ESAAMLG collaborates with international organizations, analyzes regional trends, enhances institutional
              capacity, and coordinates technical assistance while integrating regional considerations into enforcement.
              Members conduct self-assessments to measure compliance with FATF's Forty Recommendations.
            </p>

            <p>
              Comoros is also an observer member of the Inter-Governmental Action Group against Money Laundering in West
              Africa (GIABA), which supports AML/CFT efforts under ECOWAS. GIABA functions as a FATF-Styled Regional
              Body (FSRB), aiding in AML/CFT adoption and ensuring compliance with global standards across West Africa.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">
              THE IMPORTANCE OF KNOW YOUR CUSTOMER ("KYC")
            </h3>
            <p>
              Nexus International follows a strict client approval process, providing services like guarantee issuance
              only to verified legal entities. While clients often engage through intermediaries, Nexus independently
              verifies their identity and legitimacy.
            </p>

            <p>
              Given the high money laundering risks in regions like Africa and India, we enforce strict documentation
              standards per our Compliance Agreement. Clients undergo thorough screening against international sanctions
              lists before any non-refundable processing fees are accepted.
            </p>

            <p>
              Before processing guarantees or credit facilities, we require verifiable proof of genuine commercial
              activity. This ensures compliance and prevents service misuse, reinforcing our commitment to ethical
              financial practices.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">WHAT IS MONEY LAUNDERING?</h3>
            <p>
              Money laundering is a complex process where individuals involved in illegal activities attempt to conceal
              the origins of unlawfully obtained funds, often referred to as "dirty" money. Although the methods used
              for money laundering can vary, they generally involve three main stages:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>
                <strong>Placement</strong>: This initial phase involves placing the illicit funds into the legitimate
                financial system. This could include depositing the money into bank accounts or making investments to
                integrate it into legal economic activities.
              </li>
              <li>
                <strong>Layering</strong>: During this stage, the money undergoes a series of intricate financial
                transactions aimed at separating it from its illegal origins. These transactions create a complicated
                trail, making it difficult to trace the money back to its criminal source.
              </li>
              <li>
                <strong>Integration</strong>: The final step involves reintroducing the laundered funds into circulation
                through seemingly legitimate channels. At this point, the money appears "clean" or "laundered," making
                it indistinguishable from funds acquired through legal means.
              </li>
            </ul>

            <p>
              Nexus International remains steadfast in its commitment to combatting money laundering within the finance
              and technology sectors.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">PRACTICAL GUIDANCE TO DETER FINANCIAL CRIME</h3>
            <p>
              It's a well-known truth that individuals engaged in illegal activities, such as money laundering, do not
              overtly present themselves as such. While broad generalizations may not always be helpful, certain red
              flags indicating a suspicious transaction or illicit activity include:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Lack of obvious commercial rationale.</li>
              <li>Use of 'front men' or 'front companies' not appearing in the corporate structure.</li>
              <li>Insufficient documentary support for a person or transaction.</li>
              <li>Excessive concern about secrecy, especially regarding the source of funds.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">REPORTING SUSPICIOUS ACTIVITIES</h3>
            <p>
              At Nexus International, reporting suspicions is a critical part of our anti-money laundering efforts. Our
              Money Laundering Reporting Office (MLRO), integrated into senior management, meticulously oversees our
              anti-money laundering policies. They report directly to Nexus International's Board, ensuring a top-down
              approach to combating financial crime. It is mandatory for all staff members to promptly report any
              suspicions of illicit transactions to ESAAMLG through the MLRO.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">RECORD KEEPING</h3>
            <p>
              At Nexus International, meticulous record keeping is paramount to our operations. We maintain thorough
              records of our client verification processes, ensuring transparency and compliance. All original
              documentation, whether in paper or electronic format, is retained throughout a client's approval period
              and for an additional six years thereafter.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#002E5B]">TRAINING FOR STAFF</h3>
            <p>
              At Nexus International, we take responsibility for ensuring our staff are well-equipped to combat money
              laundering and uphold compliance standards. This includes:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>Providing comprehensive training on understanding money laundering and our role in preventing it.</li>
              <li>
                Emphasizing the importance of monitoring approved clients and overseeing applicant processes to detect
                any irregularities.
              </li>
              <li>
                Equipping staff with the knowledge and skills to identify and report suspicious transactions promptly.
              </li>
            </ul>

            <p>
              We conduct periodic refresher training sessions to reinforce these concepts among our team members.
              Additionally, our Money Laundering Reporting Office (MLRO) and senior management are available to address
              any questions or concerns related to this topic.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}




import { Metadata } from "next";
import Script from 'next/script';
import { ImageTextIconListSection } from "@/app/components/ImageTextIconListSection";
import { ImageTextIconListSectionReverse } from "@/app/components/ImageTextIconListSectionReverse";
import { Shield, Smartphone, Zap, CreditCard, BarChart, Globe, Lock, Cpu, Server, Database, Code, Scale } from "lucide-react";
import { ImageLeftAccordionRight } from "@/app/components/ImageLeftAccordionRight";
import Footer from "@/app/components/Footer";
import FeatureCard from "@/app/components/FeatureCard";
import { CtaSection } from "@/app/components/CtaSection";

export const metadata: Metadata = {
  title: "Fintech Innovation in Zimbabwe & Africa | Smatech Group",
  description: "Empowering financial institutions and businesses with secure, scalable fintech solutions. Digital payments, mobile money, and compliant financial technology for Africa's growth.",
  keywords: "fintech Zimbabwe, digital finance solutions, mobile payments Africa, financial technology, banking software, payment processing, fintech APIs, financial inclusion, QR payments, compliant fintech",
  openGraph: {
    title: "Fintech Innovation in Zimbabwe & Africa | Smatech Group",
    description: "Revolutionizing financial services with secure digital payment solutions and custom fintech platforms for African markets.",
    url: "https://smatechgroup.com/industries/fintech",
    type: "website",
  },
};

export default function FinTech() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "serviceType": "Fintech Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Smatech Group",
      "url": "https://smatechgroup.com",
      "logo": "https://smatechgroup.com/smatech_logo.svg"
    },
    "description": "Innovative fintech solutions including digital payments, mobile money platforms, banking software, and financial APIs tailored for African markets.",
    "areaServed": {
      "@type": "Country",
      "name": ["ZW", "ZA", "NG", "KE"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fintech Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Payment Solutions",
            "description": "Secure and scalable payment processing systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Money Platforms",
            "description": "Custom mobile wallet and money transfer solutions"
          }
        },
        {
          "@type": "Service",
          "name": "Banking Software",
          "description": "Core banking systems and financial management tools"
        }
      ]
    }
  };

  const coreSolutions = [
    {
      icon: CreditCard,
      title: "Payment Technologies",
      description: "Secure payment gateways, mobile wallets, QR payments, and cross-border remittance platforms."
    },
    {
      icon: Database,
      title: "Digital Banking",
      description: "Core banking integration, mobile banking apps, USSD banking, and agent banking systems."
    },
    {
      icon: Scale,
      title: "Lending Solutions",
      description: "Digital lending platforms, credit scoring engines, and microfinance systems."
    },
    {
      icon: BarChart,
      title: "Wealth Management",
      description: "Portfolio management systems, trading platforms, and automated reporting tools."
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Fraud detection, KYC/AML automation, and regulatory reporting engines."
    },
    {
      icon: Cpu,
      title: "Custom Fintech",
      description: "Bespoke financial software, blockchain integrations, and insurance tech platforms."
    }
  ];

  return (
    <div className="pt-10 text-black bg-white md:pt-24">
      <Script
        id="fintech-services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center px-4 space-y-6 text-center">
        <p className="text-sm font-bold text-[#64AC6F] pt-20 md:pt-0">FINANCIAL TECHNOLOGY</p>
        <h1 className="text-[#03577A] text-3xl xl:text-4xl font-bold lg:text-4xl">
          Revolutionizing Fintech in Zimbabwe & Africa
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering financial institutions and businesses with secure, scalable, and compliant digital finance solutions.
        </p>
      </section>

      {/* Core Solutions */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreSolutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              href="/services/fintech"
            />
          ))}
        </div>
      </section>

      {/* Payment Solutions */}
      <ImageTextIconListSectionReverse
        heading="Digital Payment Infrastructure"
        description="We build robust payment systems that enable seamless transactions, mobile money interoperability, and secure digital wallets tailored for African markets."
        imageSrc="/digital_payments.jpg"
        imageAlt="Mobile payment transaction being processed"
        iconItems={[
          {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Money Solutions",
            text: "Custom mobile wallet platforms with USSD and app interfaces",
          },
          {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Payment Processing",
            text: "Secure gateway solutions for cards, QR codes, and bank transfers",
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Cross-Border Payments",
            text: "Efficient international money transfer platforms",
          }
        ]}
      />

      {/* Banking Solutions */}
      <ImageTextIconListSection
        heading="Banking & Financial Software"
        description="Modern core banking solutions and financial management platforms that help institutions digitize operations and expand financial inclusion."
        imageSrc="/banking_software.jpg"
        imageAlt="Banking software dashboard on multiple devices"
        iconItems={[
          {
            icon: <Shield className="w-8 h-8" />,
            title: "Regulatory Compliance",
            text: "Built to meet RBZ, PCI DSS, and financial regulations",
          },
          {
            icon: <Server className="w-8 h-8" />,
            title: "Core Banking",
            text: "Integration with existing systems or new implementations",
          },
          {
            icon: <Code className="w-8 h-8" />,
            title: "Open Banking APIs",
            text: "Secure connectivity with third-party financial services",
          }
        ]}
      />

      {/* FAQ Section */}
      <section className="pb-5 md:pb-14">
        <div className="flex flex-col items-center px-4 space-y-6 text-center">
          <h2 className="text-3xl font-bold text-black xl:text-4xl lg:text-4xl">
            Fintech Solutions FAQs
          </h2>
        </div>

        <ImageLeftAccordionRight
          imageSrc="/fintech_africa.jpg"
          imageAlt="Financial technology transforming African markets"
          items={[
            {
              question: "What makes your fintech solutions unique for Africa?",
              answer: "We combine global fintech standards with deep local market understanding, supporting diverse payment methods, multiple currencies, and regulatory requirements specific to African markets."
            },
            {
              question: "How do you ensure compliance with RBZ regulations?",
              answer: "Our team stays current with all RBZ guidelines and builds compliance into our solutions from the ground up, including fiscalization requirements and reporting standards."
            },
            {
              question: "Can you integrate with mobile money platforms like EcoCash?",
              answer: "Yes, we have extensive experience integrating with all major mobile money providers in Zimbabwe and across Africa."
            },
            {
              question: "Do you provide ongoing support after implementation?",
              answer: "We offer tiered SLA-based support packages to ensure your fintech systems remain operational, secure, and up-to-date."
            }
          ]}
        />
      </section>

{/* CTA Section */}
<CtaSection 
  heading="Ready to Transform Your Financial Services?"
  description="Partner with Smatech Group to develop secure, compliant fintech solutions tailored for your business needs."
  primaryButton={{
    text: "Request a Consultation",
    url: "/contact-us" 
  }}
  secondaryButton={{
    text: "Explore Fintech Solutions",
    url: "/solutions/fintech"  
  }}
/>

      <Footer />
    </div>
  );
}

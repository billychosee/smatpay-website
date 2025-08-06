'use client';

import Head from 'next/head';
import Image from 'next/image';

// Schema.org structured data for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SmatPay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SmatPay is a cutting-edge payment gateway designed to facilitate secure and seamless digital transactions for businesses and individuals in Zimbabwe."
      }
    },
    {
      "@type": "Question",
      "name": "How does SmatPay work for merchants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Merchants can integrate SmatPay into their e-commerce platforms. Our platform provides a simple API that allows businesses to accept various payment methods, including mobile money, bank transfers, and more, all through a single, secure gateway."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods does SmatPay support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support a wide range of payment methods tailored to the Zimbabwean market, including all major mobile money providers and bank transfers. We are continuously expanding our supported payment options."
      }
    },
    {
      "@type": "Question",
      "name": "Is SmatPay secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, security is our top priority. SmatPay uses advanced encryption technologies and complies with global security standards to ensure that all transactions and user data are protected from fraud and unauthorized access."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with SmatPay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To get started, simply visit our website and sign up for a merchant or individual account. Our team will guide you through the integration process to get your business up and running with SmatPay."
      }
    }
  ]
};

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | SmatPay</title>
        <meta name="description" content="Find answers to common questions about SmatPay, our services, security, and how to get started with our digital payment solutions in Zimbabwe." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smatpay - lady on laptop.jpg"
            alt="FAQ Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Find quick answers to the most common questions about our services.
          </p>
        </div>
      </div>
    </>
  );
}
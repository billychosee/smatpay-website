'use client';

import Head from 'next/head';
import Image from 'next/image';

// Schema.org structured data for SEO
const resourcesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SmatPay Resources",
  "description": "Access SmatPay's library of whitepapers, case studies, blogs, and other valuable resources to help you understand the future of digital payments in Zimbabwe.",
  "url": "https://smatpay.africa/resources",
};

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources | SmatPay</title>
        <meta name="description" content="Access SmatPay's library of whitepapers, case studies, blogs, and other valuable resources to help you understand the future of digital payments in Zimbabwe." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smatpay - lady on laptop.jpg"
            alt="Resources Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            Resources
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Your gateway to whitepapers, case studies, and industry insights.
          </p>
        </div>
      </div>
    </>
  );
}
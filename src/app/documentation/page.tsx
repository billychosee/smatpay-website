'use client';

import Head from 'next/head';
import Image from 'next/image';

// Schema.org structured data for SEO
const documentationSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SmatPay Documentation",
  "description": "Explore the full API documentation for SmatPay. Our developer-friendly guides, code examples, and references will help you integrate our payment solutions quickly and efficiently.",
  "url": "https://smatpay.africa/documentation",
};

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation | SmatPay</title>
        <meta name="description" content="Explore the full API documentation for SmatPay. Our developer-friendly guides, code examples, and references will help you integrate our payment solutions quickly and efficiently." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(documentationSchema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smatpay - lady on laptop.jpg"
            alt="Documentation Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            Documentation
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Get started with our comprehensive API documentation and guides.
          </p>
        </div>
      </div>
    </>
  );
}
'use client';

import Head from 'next/head';
import Image from 'next/image';

// Schema.org structured data for SEO
const integrationsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SmatPay Integrations",
  "description": "Explore the various platforms and services that integrate seamlessly with SmatPay's payment gateway. Connect with popular e-commerce platforms and APIs.",
  "url": "https://smatpay.africa/integrations",
};

export default function Integrations() {
  return (
    <>
      <Head>
        <title>Integrations | SmatPay</title>
        <meta name="description" content="Explore the various platforms and services that integrate seamlessly with SmatPay's payment gateway. Connect with popular e-commerce platforms and APIs." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationsSchema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smatpay - lady on laptop.jpg"
            alt="Integrations Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            Integrations
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Connect your business with the tools you already love.
          </p>
        </div>
      </div>
    </>
  );
}
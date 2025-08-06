'use client';

import Head from 'next/head';
import Image from 'next/image';

// Schema.org structured data for SEO
const knowledgeBaseSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SmatPay Knowledge Base",
  "description": "Find guides, tutorials, and articles to help you get the most out of SmatPay. Our comprehensive knowledge base covers everything from setup to advanced features.",
  "url": "https://smatpay.africa/knowledge-base",
};

export default function KnowledgeBase() {
  return (
    <>
      <Head>
        <title>Knowledge Base | SmatPay</title>
        <meta name="description" content="Find guides, tutorials, and articles to help you get the most out of SmatPay. Our comprehensive knowledge base covers everything from setup to advanced features." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeBaseSchema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smatpay - lady on laptop.jpg"
            alt="Knowledge Base Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            Knowledge Base
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Your go-to resource for guides, tutorials, and support articles.
          </p>
        </div>
      </div>
    </>
  );
}
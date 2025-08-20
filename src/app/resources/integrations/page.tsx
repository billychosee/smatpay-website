'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';

// Define the animation variants here
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

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

      <div>

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
            Integrating a payment gateway into your existing systems is crucial for a smooth and secure customer checkout experience.
          </p>
        </div>
      </div>
      
        {/* "Why Integrate with SmatPay?" Section */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          {/* The `md:items-stretch` class is the key change here. 
            It makes the child columns of the grid stretch to the height of the tallest one.
          */}
          <div className="container grid gap-16 px-4 mx-auto md:grid-cols-2 md:items-stretch">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold text-[#2f1991]">Why Integrate with SmatPay?</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Seamlessly integrate robust payment processing into your existing systems and applications. Our payment gateway solutions offer flexible integration options to align with your business needs. Whether you operate an e-commerce platform, mobile app, or point-of-sale system, we provide the tools and expertise to ensure a smooth transition. <br /> <br />By integrating our gateway, you can streamline checkout processes, enhance security, and expand your customer base. Our solutions are designed to optimize transaction efficiency, reduce chargebacks, and provide real-time insights into payment data
              </p>
            </div>
        
            {/* Right Column - Image */}
            <div className="relative mt-10 md:mt-0">
              {/* The dot pattern div */}
              <div
                className="absolute top-[-40px] left-[-40px] w-48 h-48 z-0"
                style={{
                  backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                  backgroundSize: '8px 8px'
                }}
              ></div>
              {/* We use `relative h-full` on the parent div to give the Next.js Image component
                a container to fill. We've removed the fixed width and height from the Image component itself.
              */}
              <div className="relative z-10 h-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/integration section.png"
                  alt="A man working on a laptop"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

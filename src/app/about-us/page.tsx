'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const patners = [
  { name: "SmatQr", logo: "/smat_qr_logo.svg" },
  { name: "SmatProp", logo: "/smatprop_logo.svg" },
  { name: "AWS", logo: "/aws_logo.png" },
  { name: "Njere", logo: "/njere_logo.svg" },
  { name: "Zim_Switch", logo: "/zimswitch.png" },
];

// Schema.org structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SmatPay",
  "url": "https://smatpay.africa/",
  "logo": "https://smatpay.africa/smatpay_logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+263-78-956-6427",
    "contactType": "customer service",
    "areaServed": ["ZW", "ZA"],
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/smatpay",
    "https://twitter.com/smatpay",
    "https://www.linkedin.com/company/smatpay"
  ],
  "description": "SmatPay specializes in secure and seamless payment solutions for businesses and individuals in Zimbabwe, empowering digital transactions.",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "13 Brentwood Avenue",
      "addressLocality": "Harare",
      "addressRegion": "Harare Province",
      "postalCode": "00000",
      "addressCountry": "ZW"
    }
  ],
};

// Define animation variants for a clean slide-in effect
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | SmatPay</title>
        <meta name="description" content="Discover the story behind SmatPay and our mission to shape the future of digital payments in Zimbabwe." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      {/* Hero Section with Centered Text */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smatpay - lady on laptop.jpg"
            alt="About Us Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            About Us
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Join us in shaping the future of payments in Zimbabwe.
          </p>
        </div>
      </div>

      {/* "Who We Are" Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="container grid items-center gap-16 px-4 mx-auto md:grid-cols-2">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#2f1991]">Who We Are</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Zimbabwe's e-commerce landscape is on the cusp of a transformative era, poised to reach a staggering $1.9 billion USD by 2025. However, this rapid growth is hindered by the limitations of existing payment gateways, particularly in the mobile space.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              SmatPay emerges as the catalyst for change. We are a cutting-edge payment gateway meticulously designed to address the unique challenges of the Zimbabwean market. Our platform is built on a foundation of security, efficiency, and versatility, offering a seamless transaction experience for both merchants and customers.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              As a pivotal intermediary, SmatPay facilitates the secure and swift transfer of funds, enabling businesses to thrive in the digital age. We are committed to driving Zimbabwe’s e-commerce ecosystem forward by providing a robust payment solution that empowers businesses of all sizes.
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
            <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/man-on-laptop.jpg"
                alt="A man working on a laptop"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Partners Section with Global-Map background */}
      <motion.div
        className="relative py-20 bg-gray-50"
        style={{ backgroundImage: "url('/Global-Map.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="absolute inset-0 bg-gray-50 opacity-95"></div> {/* Optional overlay for text readability */}
        <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
          <h2 className="text-3xl font-bold text-[#2f1991] mb-4">Our Partners</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 place-items-center">
            {patners.map((item) => (
              <div key={item.name} className="p-4 transition-transform duration-300 grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
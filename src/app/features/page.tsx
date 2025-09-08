'use client'; // This directive must be at the top of the file

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import necessary icons for the Key Features section
import {
  FaCreditCard,
  FaEnvelopeOpenText,
  FaGlobe,
  FaDollarSign,
  FaDivide,
} from 'react-icons/fa';

const paymentLogos = [
  { name: "Zimswitch", logo: "/zimswitch.png" },
  { name: "Visa", logo: "/visa.png" },
  { name: "Mastercard", logo: "/mastercard.png" },
  { name: "EcoCash", logo: "/ecocash.png" },
  { name: "Omari", logo: "/omari.png" },
  { name: "Innbucks", logo: "/innbucks.png" },
];

// Define animation variants for a clean slide-in effect
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Define a new animation variant for a slide-in-from-the-bottom effect
const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Data for the new "Key Features" section, copied from the home page template
const keyFeaturesItems = [
  {
    title: "Payment Options",
    description: "Supports payments through InnBucks, Ecocash, Omari, Visa, and Zimswitch.",
    icon: FaCreditCard
  },
  {
    title: "Subscriptions",
    description: "Automate recurring billing at specified intervals.",
    icon: FaEnvelopeOpenText
  },
  {
    title: "Tokenization",
    description: "Enable recurring credit card transactions securely.",
    icon: FaGlobe
  },
  {
    title: "Payment Requests",
    description: "Generate payment request links, or codes and buttons.",
    icon: FaDollarSign
  },
  {
    title: "Split Payments",
    description: "Divide payments instantly with a third party.",
    icon: FaDivide
  },
  {
    title: "Onsite Payments",
    description: "Facilitate a seamless checkout process on your site.",
    icon: FaCreditCard
  },
];


export default function FeaturesHero() {
  return (
    <>
      <Head>
        <title>Features | SmatPay</title>
        <meta name="description" content="Discover the smart features of SmatPay designed to empower your financial choices and streamline payments." />
      </Head>

          <div className="min-h-screen bg-white">
      <>
        
      {/* Hero Section with Centered Text and Background Image */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/features-bg.jpg" // Placeholder, replace with the actual image from your assets
            alt="Features Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority // Prioritize loading for LCP
          />
          {/* Dark overlay for better text readability, matching the image */}
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>

        {/* Content - Heading and Subheading */}
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            Helping You Make Smart <br /> Financial Choices
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Experience seamless, secure, and scalable payment solutions.
          </p>
        </div>
      </div>

      {/* Merchant Account Card Section */}
      <section className="relative z-20 w-full px-4 mx-auto -mt-20 md:-mt-24 lg:-mt-32 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-xl md:p-12">
          {/* Icon */}
          <div className="p-4 mb-6 bg-purple-100 rounded-full">
            {/* Using an inline SVG for the shop/store icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          {/* Title */}
          <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
            Merchant Account
          </h2>
          {/* Description */}
          <p className="max-w-2xl mb-8 text-base text-gray-600 md:text-base">
            Accept Payments Effortlessly, Boost your sales and simplify your checkout process
          </p>
          {/* Button */}
          <Link href="https://merchant.smatpay.africa/sign-up">
          <button className="px-8 py-3 font-semibold text-white transition duration-300 ease-in-out bg-purple-600 rounded-full shadow-lg cursor-pointer hover:bg-purple-700">
            Open Account
          </button>
          </Link>
        </div>
      </section>

      {/* NEW KEY FEATURES SECTION - Copied from Home Page */}
      <motion.section
        className="relative py-20 overflow-hidden bg-white"
        style={{ backgroundImage: "url('/shopping-cart.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', opacity: 0 }}
        variants={fadeInVariants} // Using fadeInVariants for consistency
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="absolute inset-0 bg-white" style={{ opacity: 0.0 }}></div>
        <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
          <h2 className="mb-12 text-3xl font-bold text-white">Key Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keyFeaturesItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-8 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 rounded-full">
                  <item.icon className="w-10 h-10 text-[#2f1991]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2f1991] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Link to all features - assuming you'll have a dedicated /features page */}
          {/* <div className="mt-12">
            <a
              href="/features" // Replace with the actual path to your full features page if different
              className="inline-block px-10 py-4 font-bold text-[#2f1991] bg-white rounded-full hover:bg-gray-200 hover:text-[#2f1991] transition-colors duration-300 transform hover:scale-105"
            >
              See All
            </a>
          </div> */}
        </div>
      </motion.section>

              {/* Payment Methods Section with Global-Map background */}
              <motion.div
                className="relative bg-white py-14"
                variants={slideInFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >

        <section className="relative py-16">
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h2 className="text-2xl font-bold text-[#2f1991] sm:text-3xl">Accept All Major Payment Methods</h2>
            <p className="max-w-3xl mx-auto mt-3 text-gray-600">
              Integrate once and accept payments from all popular local and international methods your customers prefer.
            </p>

            <div className="mt-10 overflow-hidden border border-gray-200 rounded-2xl bg-purple-50">
              <div className="flex animate-[marquee_30s_linear_infinite] gap-12 p-6 [--gap:3rem] hover:[animation-play-state:paused]">
                {[...paymentLogos, ...paymentLogos].map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className="transition shrink-0">
                    <Image src={item.logo} alt={item.name} width={120} height={60} className="object-contain w-auto h-12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
              </motion.div>
      </>
    </div>

    </>
  );
}

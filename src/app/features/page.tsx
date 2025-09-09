'use client'; // This directive must be at the top of the file

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaCreditCard,
  FaEnvelopeOpenText,
  FaGlobe,
  FaDollarSign,
  FaDivide,
} from 'react-icons/fa';

const paymentLogos = [
  { name: 'Zimswitch', logo: '/zimswitch.png' },
  { name: 'Visa', logo: '/visa.png' },
  { name: 'Mastercard', logo: '/mastercard.png' },
  { name: 'EcoCash', logo: '/ecocash.png' },
  { name: 'Omari', logo: '/omari.png' },
  { name: 'Innbucks', logo: '/innbucks.png' },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
} as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
} as const;

const keyFeaturesItems = [
  {
    title: 'Payment Options',
    description:
      'Supports payments through InnBucks, Ecocash, Omari, Visa, and Zimswitch.',
    icon: FaCreditCard,
  },
  {
    title: 'Subscriptions',
    description: 'Automate recurring billing at specified intervals.',
    icon: FaEnvelopeOpenText,
  },
  {
    title: 'Tokenization',
    description: 'Enable recurring credit card transactions securely.',
    icon: FaGlobe,
  },
  {
    title: 'Payment Requests',
    description: 'Generate payment request links, or codes and buttons.',
    icon: FaDollarSign,
  },
  {
    title: 'Split Payments',
    description: 'Divide payments instantly with a third party.',
    icon: FaDivide,
  },
  {
    title: 'Onsite Payments',
    description: 'Facilitate a seamless checkout process on your site.',
    icon: FaCreditCard,
  },
];

export default function FeaturesHero() {
  return (
    <>
      <Head>
        <title>SmatPay Features: Payments, Subscriptions & More</title>
        <meta
          name="description"
          content="Explore SmatPay's core features, including multiple payment options, recurring billing, tokenization, and developer-friendly APIs to streamline your business's payments."
        />
        <meta
          property="og:title"
          content="SmatPay Features: Payments, Subscriptions & More"
        />
        <meta
          property="og:description"
          content="Explore SmatPay's core features, including multiple payment options, recurring billing, tokenization, and developer-friendly APIs to streamline your business's payments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smatpay.africa/features" />
        <meta
          property="og:image"
          content="https://smatpay.africa/smatpay_logo.png"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
          {/* Background with zoom hover */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Image
              src="/features-bg.jpg"
              alt="Features Background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          </motion.div>

          {/* Hero content */}
          <motion.div
            className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeInUp}
              className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl"
            >
              Helping You Make Smart <br /> Financial Choices
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg font-light sm:text-xl md:text-base"
            >
              Experience seamless, secure, and scalable payment solutions.
            </motion.p>
          </motion.div>
        </div>

        {/* Merchant Account Card */}
        <motion.section
          className="relative z-20 w-full px-4 mx-auto -mt-20 md:-mt-24 lg:-mt-32 sm:px-6 lg:px-8 max-w-7xl"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-xl md:p-12">
            <div className="p-4 mb-6 bg-purple-100 rounded-full">
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
            <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
              Merchant Account
            </h2>
            <p className="max-w-2xl mb-8 text-base text-gray-600 md:text-base">
              Accept Payments Effortlessly, Boost your sales and simplify your
              checkout process
            </p>
            <Link href="https://merchant.smatpay.africa/sign-up">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 0px 12px rgba(139,92,246,0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-white bg-purple-600 rounded-full shadow-lg cursor-pointer hover:bg-purple-700"
              >
                Open Account
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          className="relative py-20 overflow-hidden bg-white"
          style={{
            backgroundImage: "url('/shopping-cart.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="absolute inset-0 bg-white" style={{ opacity: 0.0 }}></div>
          <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
            <h2 className="mb-12 text-3xl font-bold text-white">Key Features</h2>
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {keyFeaturesItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 rounded-full">
                    <item.icon className="w-10 h-10 text-[#2f1991]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2f1991] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Payment Methods */}
        <motion.div
          className="relative bg-white py-14"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <section className="relative py-16">
            <div className="container px-6 mx-auto text-center max-w-7xl">
              <h2 className="text-2xl font-bold text-[#2f1991] sm:text-3xl">
                Accept All Major Payment Methods
              </h2>
              <p className="max-w-3xl mx-auto mt-3 text-gray-600">
                Integrate once and accept payments from all popular local and
                international methods your customers prefer.
              </p>

              <motion.div
                className="mt-10 overflow-hidden border border-gray-200 rounded-2xl bg-purple-50"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, ease: 'easeOut' },
                }}
                viewport={{ once: true }}
              >
                <div className="flex animate-[marquee_30s_linear_infinite] gap-12 p-6 hover:[animation-play-state:paused]">
                  {[...paymentLogos, ...paymentLogos].map((item, idx) => (
                    <motion.div
                      key={`${item.name}-${idx}`}
                      className="shrink-0"
                      whileHover={{ y: -6, scale: 1.05 }}
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={120}
                        height={60}
                        className="object-contain w-auto h-12"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
}

'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';
import { FaCode, FaPaintBrush, FaLock, FaSyncAlt, FaKey, FaPlug, FaLayerGroup, FaComments, FaRocket, FaTools, FaSearch, FaCog } from 'react-icons/fa';
import { FaShop, FaMobile, FaLaptopCode } from 'react-icons/fa6';

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

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const integrationsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SmatPay Integrations",
  "description": "Explore the various platforms and services that integrate seamlessly with SmatPay's payment gateway. Connect with popular e-commerce platforms and APIs.",
  "url": "https://smatpay.africa/integrations",
};

const KeyIntegrationComponents = [
  {
    title: "API Integration",
    description: "Our robust API allows for direct communication between your system and our payment gateway, ensuring real-time transaction processing",
    icon: FaCode
  },
  {
    title: "Customizable Checkout",
    description: "Tailor the checkout experience to match your brand identity and customer preferences.",
    icon: FaPaintBrush
  },
  {
    title: "Security Protocols",
    description: "We prioritize data protection with advanced encryption and fraud prevention measures.",
    icon: FaLock
  },
  {
    title: "Recurring Billing",
    description: "Efficiently manage subscription-based payments and customer profiles",
    icon: FaSyncAlt
  },
  {
    title: "Tokenization",
    description: "Enhance security by storing encrypted card data instead of sensitive information",
    icon: FaKey
  },
  {
    title: "Plugin and SDK Support",
    description: "Quickly integrate with popular e-commerce platforms using our pre-built plugins and software development kits (SDKs).",
    icon: FaPlug
  },
];

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
          <div className="container grid gap-16 px-4 mx-auto md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold text-[#2f1991]">Why Integrate with SmatPay?</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Seamlessly integrate robust payment processing into your existing systems and applications. Our payment gateway solutions offer flexible integration options to align with your business needs. Whether you operate an e-commerce platform, mobile app, or point-of-sale system, we provide the tools and expertise to ensure a smooth transition. <br /> <br />By integrating our gateway, you can streamline checkout processes, enhance security, and expand your customer base. Our solutions are designed to optimize transaction efficiency, reduce chargebacks, and provide real-time insights into payment data
              </p>
            </div>
            <div className="relative mt-10 md:mt-0">
              <div
                className="absolute top-[-40px] left-[-40px] w-48 h-48 z-0"
                style={{
                  backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                  backgroundSize: '8px 8px'
                }}
              ></div>
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

        {/* Integration Options Section */}
        <motion.section
          className="py-20 bg-gray-100"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container px-4 mx-auto text-center md:px-24">
            <h2 className="mb-12 text-3xl font-bold text-gray-800">Integration Options</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1: E-commerce Platforms */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 mb-4 text-orange-500 rounded-full">
                  <FaShop className="w-16 h-16" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">E-commerce Platforms</h3>
                <p className="text-gray-600">We offer pre-built integrations for popular platforms like WooCommerce, Magento, and Shopify.</p>
              </div>

              {/* Card 2: Custom Applications */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 mb-4 text-blue-500 rounded-full">
                  <FaLaptopCode className="w-16 h-16" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Custom Applications</h3>
                <p className="text-gray-600">Our API-based approach enables integration with any custom-developed application.</p>
              </div>

              {/* Card 3: Mobile Apps */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 mb-4 text-purple-500 rounded-full">
                  <FaMobile className="w-16 h-16" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Mobile Apps</h3>
                <p className="text-gray-600">Provide secure in-app payments through our mobile SDK.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Integration Components Section */}
        <motion.section
          className="relative py-20 bg-[#2f1991] overflow-hidden"
          style={{ backgroundImage: "url('/shopping-cart.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', opacity: 1 }}
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="absolute inset-0 bg-[#2f1991]" style={{ opacity: 0.7 }}></div>
          <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
            <h2 className="mb-12 text-3xl font-bold text-white">Key Integration Components</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {KeyIntegrationComponents.map((item, index) => (
                <div key={index} className="flex flex-col items-center p-8 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 rounded-full">
                    <item.icon className="w-10 h-10 text-[#2f1991]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2f1991] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Implementation Process Section */}
        <motion.section
          className="py-20 bg-gray-100"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
            <h2 className="mb-12 text-3xl font-bold text-gray-800">Our Implementation Process</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-orange-100 rounded-full">
                  <FaCog className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">API Implementation</h3>
                <p className="text-gray-600">Our development team works closely with yours to integrate the payment gateway API.</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-red-100 rounded-full">
                  <FaSearch className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">System Assessment</h3>
                <p className="text-gray-600">We analyze your current systems and identify integration points.</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-blue-100 rounded-full">
                  <FaTools className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Testing and Optimization</h3>
                <p className="text-gray-600">Rigorous testing ensures seamless performance and security.</p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-green-100 rounded-full">
                  <FaRocket className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Go-Live</h3>
                <p className="text-gray-600">Launch the integrated payment system with minimal disruption.</p>
              </div>

              {/* Card 5 */}
              <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-orange-100 rounded-full">
                  <FaComments className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Ongoing Support</h3>
                <p className="text-gray-600">Our dedicated support team provides assistance and maintenance.</p>
              </div>

              {/* Card 6 */}
              <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-purple-100 rounded-full">
                  <FaLayerGroup className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Integration Review</h3>
                <p className="text-gray-600">We conduct a comprehensive review to ensure everything functions seamlessly after integration.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ready to enhance section */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="container grid px-4 mx-auto md:grid-cols-2">
            <div className="flex items-center justify-center mb-8 md:mb-0">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/ready-to-enhance.jpg"
                  alt="A person working at a desk"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:pl-16">
              <h2 className="mb-2 text-3xl font-bold text-gray-800">Ready to enhance your payment processing?</h2>
              <p className="mb-6 text-gray-600">Ready to enhance your payment processing?</p>
              <a 
                href="http://doc.smatpay.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                See API Documentation
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </>
  );
}
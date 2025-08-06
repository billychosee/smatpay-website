"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import Testimonials from './components/Testimonials';
import { motion } from 'framer-motion'; // Import Framer Motion

// Import icons from react-icons/fa (Font Awesome)
import {
  FaCog,
  FaDollarSign,
  FaLock,
  FaExclamationCircle,
  FaCreditCard,
  FaBriefcase,
  FaEnvelopeOpenText,
  FaGlobe,
  FaDivide,
  FaHandshake,
  FaGlobeAmericas,
  FaUserCheck,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import Footer from '@/app/components/Footer'

// Logos for the supported payment methods section
const paymentLogos = [
  { name: "Zimswitch", logo: "/zimswitch.png" },
  { name: "Visa", logo: "/visa.png" },
  { name: "Mastercard", logo: "/mastercard.png" },
  { name: "EcoCash", logo: "/ecocash.png" },
  { name: "Omari", logo: "/omari.png" },
  { name: "Innbucks", logo: "/innbucks.png" },
];

const popularPlatforms = [
  { name: "Magento", logo: "/magento.png" },
  { name: "Presta_shop", logo: "/presta_shop.png" },
  { name: "Shopify", logo: "/shopify.png" },
  { name: "Whmcs", logo: "/whmcs.png" },
  { name: "Woo_commerce", logo: "/woo_commerce.png" },
];

// Data for the "Why Choose Us ?" section with React Icons
const whyChooseUsItems = [
  {
    title: "Seamless Integrations",
    description: "Provides seamless integration with e-commerce platforms, mobile apps, and other systems through comprehensive APIs and plugins.",
    icon: FaCog
  },
  {
    title: "Affordable",
    description: "Enjoy favorable customized rates, transact from just $1, save more with our competitive pricing, and watch your profits grow with every transaction.",
    icon: FaDollarSign
  },
  {
    title: "Security",
    description: "Utilizes International and advanced PCI standard encryption protocols to protect sensitive data during transactions.",
    icon: FaLock
  },
  {
    title: "Fraud Detection",
    description: "Implements robust fraud detection and prevention mechanisms to safeguard against fraudulent activities.",
    icon: FaExclamationCircle
  },
  {
    title: "Multiple Payment Methods",
    description: "Supports a wide range of payment options such as credit/debit cards, digital wallets, and local payment methods (e.g., InnBucks, OneMoney, EcoCash, Omari, Visa, ZimSwitch)",
    icon: FaCreditCard
  },
  {
    title: "No \"system down\" frustrations",
    description: "SMATPAY is built for scalability and uptime, ensuring that customers can always complete their purchases.",
    icon: FaBriefcase
  },
];

// Data for the new "Key Features" section
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

// Data for the new "Benefits of Smatpay" section
const benefitsOfSmatpayItems = [
  {
    title: "Increased Convenience and Choice",
    description: "A wider range of secure payment options",
    icon: FaHandshake
  },
  {
    title: "Expanded Market Reach",
    description: "By accepting a variety of payment methods, businesses can attract a wider customer base, including those who may not have access to traditional credit cards.",
    icon: FaGlobeAmericas
  },
  {
    title: "Customers",
    description: "Access to desired products and services on convenient debit order plans. Build credit history over time (future development)",
    icon: FaUserCheck
  },
  {
    title: "Faster Mobile and Web Checkout Process",
    description: "Seamless integration with online stores allows for quick and easy checkouts, reducing cart abandonment rates",
    icon: FaMobileAlt
  },
];

const testimonialData = [
  {
    logoSrc: "/smat_tutor_logo.png",
    logoAlt: "Smatutor Logo",
    name: "Tatenda Moyo",
    title: "CEO",
    quote: "Fast, secure, and hassle-free payments with Smatpay. It has made learning accessible and convenient",
  },
  {
    logoSrc: "/njere_logo.png",
    logoAlt: "NJERE Logo",
    name: "Ruth Madzikanda",
    title: "CEO",
    quote: "Our school's transition to Smatpay has been a game-changer. Fee collection is now a breeze, and we have more time to focus on what truly matters: our students.",
  },
  {
    logoSrc: "/smatpay_logo.png",
    logoAlt: "Smat Logo",
    name: "Anesu Mbano",
    title: "Headstore Manager",
    quote: "We were looking for a payment gateway that could keep up with the demands of our growing access control business. Smatpay exceeded our expectations.",
  },
];

// Reusable variants for a simple slide-in-from-bottom effect
const slideInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>SmatPay | Secure & Seamless Payment Gateway for Zimbabwe & Africa</title>
        <meta
          name="description"
          content="SmatPay is the leading payment gateway in Zimbabwe, offering seamless integration for e-commerce and businesses to accept mobile money, Zimswitch, Visa, and Mastercard payments securely."
        />
      </Head>

      <main className="text-black bg-white">
        {/* Hero Section */}
        <div className="relative flex items-center justify-center min-h-screen px-5 py-24 overflow-hidden bg-[#2f1991] md:px-24">
          <div className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-20" style={{ backgroundImage: "url('/bg1.png')" }} />
          <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-between w-full md:flex-row-reverse md:gap-8">
              {/* Image with new animation */}
              <motion.div
                className="relative mb-12 md:w-1/2 md:mb-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src="/smatpay-hero-art.png"
                  alt="SmatPay interface on mobile and desktop showing easy payments"
                  width={700}
                  height={550}
                  priority
                  className="w-full max-w-lg mx-auto rounded-lg"
                />
              </motion.div>

              {/* Text content with new animation classes */}
              <motion.div
                className="text-center md:w-1/2 md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                  Empowering Businesses with Next-Gen Payment Solutions
                </h1>
                <p className="mb-8 text-xl text-gray-200 lg:text-2xl">
                  Redefining Payment Excellence
                </p>
                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-start md:gap-6">
                  <Link
                    href="/register"
                    className="inline-block px-10 py-4 font-bold text-white transition-all ease-in-out duration-700 delay-300 bg-[#8141D5] rounded-full hover:bg-white hover:text-[#8141D5] transform hover:scale-105 cursor-pointer"
                  >
                    Register
                  </Link>
                  <Link
                    href="#discover"
                    className="inline-block px-10 py-4 font-bold text-white border-2 border-white rounded-full transition-all ease-in-out duration-700 delay-400 hover:bg-white hover:text-[#2f1991] transform hover:scale-105 cursor-pointer"
                  >
                    Discover More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section with Global-Map background */}
        <motion.div
          className="relative py-20 bg-gray-50"
          style={{ backgroundImage: "url('/Global-Map.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="absolute inset-0 bg-gray-50 opacity-95"></div>
          <div className="container relative z-10 px-5 mx-auto text-center md:px-24">
            <h2 className="text-3xl font-bold text-[#2f1991] mb-4">Accept All Major Payment Methods</h2>
            <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
              Integrate once and accept payments from all popular local and international methods your customers prefer.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 place-items-center">
              {paymentLogos.map((item) => (
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
<motion.div
  className="container flex flex-col items-center gap-12 px-5 py-24 mx-auto md:flex-row md:px-24"
  variants={slideInFromBottom}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
>
  <div className="space-y-4 md:w-1/2 z-10">
    <h2 className="text-3xl font-bold lg:text-3xl text-[#2f1991]">The Ultimate Payment Gateway for Zimbabwe's Growth</h2>
    <p className="text-base text-gray-700">
      Zimbabwe's e-commerce market is on the verge of a significant expansion, projected to reach $1.9 billion USD by 2025. This reflects an impressive annual growth rate of 19.5%. However, one of the critical challenges hindering this growth is the transaction cost and the technological limitations of existing payment gateways, especially in the mobile space. SmatPay addresses this gap by offering a highly versatile and fully integrated payment gateway that caters to the unique needs of the Zimbabwean market.
    </p>
  </div>
  <div className="relative w-full md:w-1/2 h-[32rem] flex items-center justify-center z-20">
    <div className="relative w-full h-full">
      <Image
        src="/lady-on-phone.jpg"
        alt="Lady on phone"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  </div>
</motion.div>

        {/* Introduction Section 2 */}
        <motion.div
          className="bg-[#8141D5] h-screen flex items-center justify-center"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="container flex flex-col items-center gap-12 px-5 mx-auto md:flex-row-reverse md:px-24">
            <div className="space-y-4 md:w-1/2 my-24">
              <h2 className="text-3xl font-bold text-white lg:text-3xl">Secure, Simple, and Sophisticated</h2>
              <p className="text-base text-gray-200">
          SmatPay is a sophisticated payment gateway that serves as a pivotal intermediary between merchants and customers during online transactions. As a payment gateway, SmatPay facilitates a secure and efficient transfer of funds from customers to merchants, enabling seamless transactions across various digital platforms, from websites to mobile apps.
              </p>
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-start md:gap-6">
          <Link
            href="/register"
            className="inline-block px-10 py-4  text-[#8141D5] transition-all ease-in-out duration-700 delay-300 bg-white rounded-full hover:bg-gray-200 hover:text-[#830bc9] transform hover:scale-105 cursor-pointer text-sm"
          >
            Create an Account Now
          </Link>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-[32rem] rounded-xl"> {/* Increased height */}
              <Image
          src="/lady-with-shopping-bag.jpg"
          alt="Lady with purple background"
          layout="fill"
          className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Integrate with Popular Platforms Section */}
        <motion.div
          className="py-20 bg-gray-50"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="container px-5 mx-auto text-center md:px-24">
            <h2 className="text-3xl font-bold text-[#2f1991] mb-4">Integrate with Popular Platforms</h2>
            <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
              Easily integrate Smatpay into your online store. Our intuitive interface and detailed documentation guide you through the process, ensuring a smooth setup
            </p>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 place-items-center">
              {popularPlatforms.map((item) => (
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

        {/* WHY CHOOSE US SECTION - UPDATED WITH REACT ICONS AND PADDING */}
        <motion.section
          className="flex flex-col items-center py-20 space-y-12 text-center"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="pt-20 text-sm font-bold text-black md:pt-0">WHY SMATPAY</p>
          <h1 className="text-[#2f1991] text-3xl xl:text-[53px] font-bold lg:text-4xl">
            Why Choose Us ?
          </h1>
          <div className="grid grid-cols-1 gap-10 px-5 md:px-24 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full">
                  <item.icon className="w-8 h-8 text-[#2f1991]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="mb-1 text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* NEW KEY FEATURES SECTION - Background Image Opacity Fixed */}
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
            <div className="mt-12">
              <Link
                href="/features"
                className="inline-block px-10 py-4 font-bold text-[#2f1991] bg-white rounded-full hover:bg-gray-200 hover:text-[#2f1991] transition-colors duration-300 transform hover:scale-105"
              >
                See All
              </Link>
            </div>
          </div>
        </motion.section>

        {/* BENEFITS OF SMATPAY SECTION */}
        <motion.section
          className="px-5 py-20 md:px-24"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#2f1991] mb-12">Benefits of Smatpay</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-8 place-items-center">
            <div className="md:col-span-1">
              {benefitsOfSmatpayItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4 mb-8 text-left">
            <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full">
              <item.icon className="w-8 h-8 text-[#2f1991]" />
            </div>
            <div className="flex flex-col">
              <h3 className="mb-1 text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-base text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
              ))}
            </div>
            {/* Right Column - Image with dot pattern to the right, image is larger */}
            <div className="relative mt-10 md:mt-0 w-full flex items-center justify-center">
              <div className="relative w-[28rem] h-[28rem] flex items-center justify-center"> {/* Increased size */}
          <div
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-48 h-48 z-0"
            style={{
              backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }}
          ></div>
          <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl w-full h-full flex items-center justify-center">
            <Image
              src="/smatpay-mobile-payment-options.png"
              alt="SmatPay mobile payment options"
              width={320}
              height={320}
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.div
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Testimonials
            title="Testimonials"
            subtitle="What they say"
            testimonials={testimonialData}
          />
        </motion.div>

        <motion.section
          className="pb-10"
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="relative py-20 mx-5 text-center text-white bg-center bg-cover shadow-lg md:py-32 rounded-xl md:mx-24"
            style={{
              backgroundImage: "url('/holding_payment_card.jpg')",
            }}>
            <div className="absolute inset-0 bg-[#8141D5] opacity-60 rounded-xl"></div>
            <div className="relative z-10 max-w-4xl px-4 mx-auto">
              <p className="mb-4 text-lg font-semibold md:text-xl">
                Don't just take our word for it.
              </p>
              <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">
                Experience the SmatPay difference for yourself!
              </h2>
              <button
                className="bg-white hover:bg-[#8141D5] text-[#8141D5] font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:text-white"
              >
                Register Now
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
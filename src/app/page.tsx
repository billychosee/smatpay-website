"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Testimonials from "./components/Testimonials";
import Footer from "@/app/components/Footer";

// Icons (Font Awesome)
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
} from "react-icons/fa";

// -----------------------------
// Data (kept as requested)
// -----------------------------
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

const whyChooseUsItems = [
  {
    title: "Seamless Integrations",
    description:
      "Provides seamless integration with e-commerce platforms, mobile apps, and other systems through comprehensive APIs and plugins.",
    icon: FaCog,
  },
  {
    title: "Affordable",
    description:
      "Enjoy favorable customized rates, transact from just $1, save more with our competitive pricing, and watch your profits grow with every transaction.",
    icon: FaDollarSign,
  },
  {
    title: "Security",
    description:
      "Utilizes International and advanced PCI standard encryption protocols to protect sensitive data during transactions.",
    icon: FaLock,
  },
  {
    title: "Fraud Detection",
    description:
      "Implements robust fraud detection and prevention mechanisms to safeguard against fraudulent activities.",
    icon: FaExclamationCircle,
  },
  {
    title: "Multiple Payment Methods",
    description:
      "Supports a wide range of payment options such as credit/debit cards, digital wallets, and local payment methods (e.g., InnBucks, OneMoney, EcoCash, Omari, Visa, ZimSwitch)",
    icon: FaCreditCard,
  },
  {
    title: "No \"system down\" frustrations",
    description:
      "SMATPAY is built for scalability and uptime, ensuring that customers can always complete their purchases.",
    icon: FaBriefcase,
  },
];

const keyFeaturesItems = [
  {
    title: "Payment Options",
    description:
      "Supports payments through InnBucks, Ecocash, Omari, Visa, and Zimswitch.",
    icon: FaCreditCard,
  },
  {
    title: "Subscriptions",
    description: "Automate recurring billing at specified intervals.",
    icon: FaEnvelopeOpenText,
  },
  {
    title: "Tokenization",
    description: "Enable recurring credit card transactions securely.",
    icon: FaGlobe,
  },
  {
    title: "Payment Requests",
    description: "Generate payment request links, or codes and buttons.",
    icon: FaDollarSign,
  },
  {
    title: "Split Payments",
    description: "Divide payments instantly with a third party.",
    icon: FaDivide,
  },
  {
    title: "Onsite Payments",
    description: "Facilitate a seamless checkout process on your site.",
    icon: FaCreditCard,
  },
];

const benefitsOfSmatpayItems = [
  {
    title: "Increased Convenience and Choice",
    description: "A wider range of secure payment options",
    icon: FaHandshake,
  },
  {
    title: "Expanded Market Reach",
    description:
      "By accepting a variety of payment methods, businesses can attract a wider customer base, including those who may not have access to traditional credit cards.",
    icon: FaGlobeAmericas,
  },
  {
    title: "Customers",
    description:
      "Access to desired products and services on convenient debit order plans. Build credit history over time (future development)",
    icon: FaUserCheck,
  },
  {
    title: "Faster Mobile and Web Checkout Process",
    description:
      "Seamless integration with online stores allows for quick and easy checkouts, reducing cart abandonment rates",
    icon: FaMobileAlt,
  },
];

const testimonialData = [
  {
    logoSrc: "/smat_tutor_logo.png",
    logoAlt: "Smatutor Logo",
    name: "Tatenda Moyo",
    title: "CEO",
    quote:
      "Fast, secure, and hassle-free payments with Smatpay. It has made learning accessible and convenient",
  },
  {
    logoSrc: "/njere_logo.png",
    logoAlt: "NJERE Logo",
    name: "Ruth Madzikanda",
    title: "CEO",
    quote:
      "Our school's transition to Smatpay has been a game-changer. Fee collection is now a breeze, and we have more time to focus on what truly matters: our students.",
  },
  {
    logoSrc: "/smatpay_logo.png",
    logoAlt: "Smat Logo",
    name: "Anesu Mbano",
    title: "Headstore Manager",
    quote:
      "We were looking for a payment gateway that could keep up with the demands of our growing access control business. Smatpay exceeded our expectations.",
  },
];

// Motion helpers
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Head>
        <title>SmatPay | Secure & Seamless Payment Gateway for Zimbabwe & Africa</title>
        <meta
          name="description"
          content="SmatPay is the leading payment gateway in Zimbabwe, offering seamless integration for e-commerce and businesses to accept mobile money, Zimswitch, Visa, and Mastercard payments securely."
        />
      </Head>

      {/* Page Wrapper */}
      <main className="relative text-black bg-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(1200px_600px_at_50%_-200px,rgba(129,65,213,0.35),transparent_70%),radial-gradient(1200px_600px_at_50%_120%,rgba(47,25,145,0.25),transparent_70%)]" />

        {/* NAVBAR */}
        {/* <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-lg">
            <div className="flex items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/smatpay_logo.png" alt="SmatPay" width={36} height={36} className="rounded" />
                <span className="text-lg font-extrabold tracking-tight text-[#2f1991]">SmatPay</span>
              </Link>
              <div className="items-center hidden gap-6 md:flex">
                <Link href="#why" className="text-sm font-medium text-gray-700 hover:text-[#2f1991]">Why SmatPay</Link>
                <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-[#2f1991]">Features</Link>
                <Link href="#integrations" className="text-sm font-medium text-gray-700 hover:text-[#2f1991]">Integrations</Link>
                <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-[#2f1991]">Testimonials</Link>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="hidden rounded-full border border-[#2f1991] px-5 py-2 text-sm font-semibold text-[#2f1991] transition hover:bg-[#2f1991] hover:text-white md:inline-block"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-gradient-to-tr from-[#8141D5] to-[#5b35e5] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav> */}

        {/* HERO */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32">
          {/* grid overlay */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="container px-6 mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div variants={stagger} initial="hidden" animate="show" className="text-center lg:text-left">
                <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-[#1a133d] sm:text-5xl lg:text-6xl">
                  Empowering Businesses with Next‑Gen Payment Solutions
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-5 text-lg text-gray-600 sm:text-xl">
                  Redefining Payment Excellence
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-start">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center rounded-full bg-[#2f1991] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#2f1991]/20 transition hover:scale-[1.02] hover:brightness-110"
                  >
                    Register
                  </Link>
                  <Link
                    href="#discover"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-[#2f1991] transition hover:border-[#2f1991] hover:bg-[#2f1991] hover:text-white"
                  >
                    Discover More
                  </Link>
                </motion.div>

              </motion.div>

              <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                <div className="relative w-full max-w-xl p-4 mx-auto border shadow-2xl rounded-3xl border-white/40 bg-white/60 backdrop-blur">
                  <Image
                    src="/smatpay-hero-art.png"
                    alt="SmatPay interface on mobile and desktop showing easy payments"
                    width={1000}
                    height={700}
                    className="object-contain w-full h-auto rounded-2xl"
                    priority
                  />
                  {/* floating accent */}
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-gradient-to-tr from-[#8141D5] to-[#2f1991] opacity-70 blur-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ACCEPTED METHODS (Marquee) */}
        <section className="relative py-16">
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h2 className="text-2xl font-bold text-[#2f1991] sm:text-3xl">Accept All Major Payment Methods</h2>
            <p className="max-w-3xl mx-auto mt-3 text-gray-600">
              Integrate once and accept payments from all popular local and international methods your customers prefer.
            </p>

            <div className="mt-10 overflow-hidden border border-gray-200 rounded-2xl bg-gray-50">
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

        {/* MARKET EXPLAINER */}
        <section id="discover" className="relative py-20">
          <div className="container grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-[#2f1991] sm:text-3xl">The Ultimate Payment Gateway for Zimbabwe's Growth</h3>
              <p className="mt-4 text-gray-700">
                Zimbabwe's e-commerce market is on the verge of a significant expansion, projected to reach $1.9 billion USD by 2025. This reflects an impressive annual growth rate of 19.5%. However, one of the critical challenges hindering this growth is the transaction cost and the technological limitations of existing payment gateways, especially in the mobile space. SmatPay addresses this gap by offering a highly versatile and fully integrated payment gateway that caters to the unique needs of the Zimbabwean market.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
              <div className="relative mx-auto h-[28rem] w-full max-w-xl">
                <Image src="/lady-on-phone.jpg" alt="Lady on phone" fill className="object-cover rounded-3xl" />
                <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-to-tr from-[#2f1991] to-[#8141D5] opacity-60 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECURE / SIMPLE */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[url('/Global-Map.png')] bg-cover bg-center opacity-10" />
          <div className="container items-center gap-12 px-6 mx-auto max-w-7xl lg:grid lg:grid-cols-2">
            <div className="relative mx-auto h-[28rem] w-full max-w-xl">
              <Image src="/lady-with-shopping-bag.jpg" alt="Lady with purple background" fill className="object-cover rounded-3xl" />
            </div>
            <div className="mt-10 lg:mt-0">
              <h3 className="text-2xl font-bold text-[#2f1991] sm:text-3xl">Secure, Simple, and Sophisticated</h3>
              <p className="mt-4 text-gray-700">
                SmatPay is a sophisticated payment gateway that serves as a pivotal intermediary between merchants and customers during online transactions. As a payment gateway, SmatPay facilitates a secure and efficient transfer of funds from customers to merchants, enabling seamless transactions across various digital platforms, from websites to mobile apps.
              </p>
              <div className="mt-6">
                <Link href="/register" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#8141D5] ring-1 ring-[#8141D5] transition hover:bg-[#8141D5] hover:text-white">
                  Create an Account Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section id="integrations" className="relative py-20">
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h3 className="text-2xl font-bold text-[#2f1991] sm:text-3xl">Integrate with Popular Platforms</h3>
            <p className="max-w-3xl mx-auto mt-3 text-gray-600">
              Easily integrate Smatpay into your online store. Our intuitive interface and detailed documentation guide you through the process, ensuring a smooth setup
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10 place-items-center sm:grid-cols-3 lg:grid-cols-5">
              {popularPlatforms.map((item) => (
                <div key={item.name} className="w-full p-5 transition bg-white border border-gray-200 shadow-sm rounded-2xl">
                  <Image src={item.logo} alt={item.name} width={140} height={80} className="object-contain w-auto h-12 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SMATPAY */}
        <section id="why" className="relative py-20">
          <div className="container px-6 mx-auto max-w-7xl">
            <p className="text-xs font-bold tracking-widest text-center text-gray-500">WHY SMATPAY</p>
            <h3 className="mt-2 text-center text-3xl font-extrabold text-[#2f1991] xl:text-[44px]">Why Choose Us ?</h3>

            <div className="grid gap-6 mt-12 lg:grid-cols-2">
              {whyChooseUsItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start gap-4 p-6 transition bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
                >
                  <div className="flex items-center justify-center bg-gray-100 rounded-full h-14 w-14 shrink-0">
                    <item.icon className="h-7 w-7 text-[#2f1991]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section id="features" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[url('/shopping-cart.jpg')] bg-cover bg-center opacity-10" />
          <div className="container px-6 mx-auto text-center max-w-7xl">
            <h3 className="text-3xl font-extrabold text-[#2f1991]">Key Features</h3>
            <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {keyFeaturesItems.map((item, i) => (
                <div key={i} className="relative p-8 overflow-hidden transition bg-white border border-gray-200 shadow-sm group rounded-2xl hover:-translate-y-1 hover:shadow-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                    <item.icon className="h-8 w-8 text-[#2f1991]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#2f1991]">{item.title}</h4>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2f1991]/10 blur-2xl transition group-hover:opacity-80" />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/features" className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-[#2f1991] ring-1 ring-[#2f1991] transition hover:bg-[#2f1991] hover:text-white">
                See All
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative py-20">
          <div className="container grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">
            <div>
              {benefitsOfSmatpayItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-7">
                  <div className="flex items-center justify-center bg-gray-100 rounded-full h-14 w-14 shrink-0">
                    <item.icon className="h-7 w-7 text-[#2f1991]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mx-auto h-[28rem] w-full max-w-md">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 h-40 w-40 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:10px_10px]" />
              <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl rounded-3xl">
                <Image
                  src="/smatpay-mobile-payment-options.png"
                  alt="SmatPay mobile payment options"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-10">
          <div className="container px-6 mx-auto max-w-7xl">
            <Testimonials title="Testimonials" subtitle="What they say" testimonials={testimonialData} />
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="pb-16">
          <div
            className="relative mx-6 overflow-hidden text-white bg-center bg-cover shadow-lg max-w-7xl rounded-3xl sm:mx-auto"
            style={{ backgroundImage: "url('/holding_payment_card.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8141D5]/80 to-[#2f1991]/70" />
            <div className="relative z-10 max-w-3xl px-6 py-20 mx-auto text-center">
              <p className="text-base font-semibold">Don't just take our word for it.</p>
              <h3 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                Experience the SmatPay difference for yourself!
              </h3>
              <Link
                href="/register"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-[#8141D5] shadow-lg ring-1 ring-white/40 transition hover:bg-[#f3f3f3]"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>

      {/* Styles for marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}

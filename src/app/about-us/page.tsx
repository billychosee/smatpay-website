'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Partners
const partners = [
  { name: "SmatQr", logo: "/smat_qr_logo.svg" },
  { name: "SmatProp", logo: "/smatprop_logo.svg" },
  { name: "AWS", logo: "/aws_logo.png" },
  { name: "Njere", logo: "/njere_logo.svg" },
  { name: "Zim_Switch", logo: "/zimswitch.png" },
];

// Schema.org structured data
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

// Framer Motion Variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | SmatPay</title>
        <meta
          name="description"
          content="Discover the story behind SmatPay and our mission to shape the future of digital payments in Zimbabwe."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      {/* Hero Section (original) */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white">
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
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            About Us
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            Join us in shaping the future of payments in Zimbabwe.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container grid items-center gap-16 px-6 mx-auto lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#2f1991]">Who We Are</h2>
            <p className="mb-4 text-lg text-gray-600">
              SmatPay is redefining digital payments in Zimbabwe. We provide a secure,
              seamless, and innovative platform that empowers both businesses and individuals.
            </p>
            <p className="mb-4 text-lg text-gray-600">
              Our mission is to remove barriers in e-commerce and enable financial inclusion
              for all through cutting-edge solutions tailored to the local market.
            </p>
            <p className="text-lg text-gray-600">
              With SmatPay, businesses thrive, and customers transact with ease.
            </p>
          </div>

          {/* Circle Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute bg-blue-100 rounded-full w-72 h-72 -top-10 -left-10"></div>
            <div className="absolute bg-blue-200 rounded-full w-96 h-96 -bottom-10 -right-10"></div>
            <div className="relative z-10">
              <Image
                src="/man-on-laptop.jpg"
                alt="Working on laptop"
                width={500}
                height={500}
                className="rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2f1991] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Corporate Solutions", desc: "Tailored payment systems for businesses.", icon: "🏢" },
              { title: "Mobile Payments", desc: "Fast, secure, and mobile-first transactions.", icon: "📱" },
              { title: "Cloud Development", desc: "Reliable, scalable, and future-ready.", icon: "☁️" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 transition bg-white shadow-md rounded-2xl hover:shadow-xl"
              >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2f1991] mb-12">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: "01", title: "High Security", desc: "Bank-grade encryption for every transaction." },
              { num: "02", title: "24/7 Support", desc: "Always available to assist your business." },
              { num: "03", title: "User Friendly", desc: "Simple interfaces with powerful features." },
              { num: "04", title: "Scalable", desc: "Solutions that grow with your business." },
              { num: "05", title: "Affordable", desc: "Competitive pricing tailored to your needs." },
              { num: "06", title: "Trusted", desc: "Built for trust and reliability." },
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 transition shadow-sm bg-gray-50 rounded-xl hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#2f1991]">
                  {reason.num} — {reason.title}
                </h3>
                <p className="text-gray-600">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container flex flex-col items-center justify-center px-6 mx-auto md:flex-row md:gap-20">
          <div className="relative flex items-center justify-center mb-10 md:mb-0">
            <div className="absolute bg-blue-200 rounded-full w-72 h-72"></div>
            <div className="absolute bg-blue-100 rounded-full w-96 h-96"></div>
            <div className="relative z-10 flex items-center justify-center bg-white rounded-full shadow-lg w-60 h-60">
              <h3 className="text-3xl font-bold text-[#2f1991] text-center">
                10+ <br /> Years <br /> Experience
              </h3>
            </div>
          </div>
          <div className="grid gap-6 text-center md:text-left">
            <div><span className="text-3xl font-bold text-[#2f1991]">2K+</span> Apps Processed</div>
            <div><span className="text-3xl font-bold text-[#2f1991]">40+</span> Consultants</div>
            <div><span className="text-3xl font-bold text-[#2f1991]">160+</span> Businesses Served</div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2f1991] mb-12">Our Edge</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Intelligent", desc: "Smart automation and secure transactions." },
              { title: "Flexible", desc: "Customizable and scalable to your needs." },
              { title: "About You", desc: "Solutions designed around your business." },
            ].map((f, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 transition shadow bg-gray-50 rounded-xl hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold text-[#2f1991]">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partners */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2f1991] mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 place-items-center">
            {partners.map((item) => (
              <div
                key={item.name}
                className="p-4 transition-transform duration-300 grayscale hover:grayscale-0 hover:scale-110"
              >
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
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#2f1991] via-[#4338ca] to-[#1e3a8a] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container max-w-3xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Loved by Customers</h2>
          <p className="mb-6 text-lg italic">
            "SmatPay has completely transformed the way we do business. Secure, fast, and user-friendly —
            we couldn't imagine going back to the old systems."
          </p>
          <h4 className="font-semibold">— Andy M., CEO</h4>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 text-center bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-[#2f1991] mb-4">
            Ready to Shape the Future of Payments?
          </h2>
          <p className="mb-6 text-gray-600">
            Partner with us today and experience secure, seamless, and innovative payment solutions.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 text-lg font-semibold text-white rounded-lg bg-[#2f1991] hover:bg-[#4338ca] transition"
          >
            Get Started →
          </a>
        </div>
      </motion.section>
    </>
  );
}

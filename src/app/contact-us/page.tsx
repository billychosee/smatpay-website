'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Schema.org structured data for SEO
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://smatpay.africa/contact",
  "name": "Contact SmatPay",
  "description": "Get in touch with the SmatPay team. Contact us for customer support, sales inquiries, or partnership opportunities.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+263-78-956-6427",
    "contactType": "customer service",
    "areaServed": ["ZW", "ZA"],
    "availableLanguage": "en"
  },
};

// ✅ Framer Motion Variants (TypeScript safe)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | SmatPay</title>
        <meta
          name="description"
          content="Get in touch with the SmatPay team. Contact us for customer support, sales inquiries, or partnership opportunities."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
      </Head>

      <div>
        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/smatpay - lady on laptop.jpg"
              alt="Contact Us Hero"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-2xl px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
              Contact Us
            </h1>
            <p className="text-lg font-light sm:text-xl md:text-base">
              We're here to help. Reach out to our team for any inquiries.
            </p>
          </motion.div>
        </div>

        {/* Contact Section with Animation */}
        <motion.section
          className="relative z-20 w-full max-w-6xl px-5 py-20 mx-auto mb-24 -mt-20 bg-gray-100 shadow-lg md:px-12 lg:-mt-32 rounded-xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container grid grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-[#2f1991] mb-8">
                Contact Us
              </h2>
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 bg-gray-300 rounded-full">
                  <FaMapMarkerAlt className="text-xl text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Head Office</h3>
                  <p className="text-sm text-gray-600">
                    13 Brentwood Avenue, Mount Pleasant, Harare, Zimbabwe
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 bg-gray-300 rounded-full">
                  <FaEnvelope className="text-xl text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Email Us</h3>
                  <p className="text-sm text-gray-600">info@smatpay.africa</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="p-3 mr-4 bg-gray-300 rounded-full">
                  <FaPhoneAlt className="text-xl text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Call Us</h3>
                  <p className="text-sm text-gray-600">
                    Phone: +263 789 566 427
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#2f1991] mb-4">
                  Follow our social media
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/people/Smatpay/61563697798654/?rdid=50bxiSV1lOzF5f2r&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17FR9odziS%2F"
                    className="bg-[#2f1991] hover:bg-[#830bc9] text-white rounded-full p-2"
                  >
                    <FaFacebookF className="text-xl" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/smat_pay?igsh=NTc4MTIwNjQ2YQ=="
                    className="bg-[#2f1991] hover:bg-[#830bc9] text-white rounded-full p-2"
                  >
                    <FaInstagram className="text-xl" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#2f1991] hover:bg-[#830bc9] text-white rounded-full p-2"
                  >
                    <FaXTwitter className="text-xl" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/smatpay-africa/"
                    className="bg-[#2f1991] hover:bg-[#830bc9] text-white rounded-full p-2"
                  >
                    <FaLinkedin className="text-xl" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-[#2f1991] mb-8">
                Send us a message
              </h2>
              <form className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-0 text-sm text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-0 text-sm text-gray-700"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-0 text-sm text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-0 text-sm text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="subject"
                    className="block mb-0 text-sm text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-0 text-sm text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="bg-[#830bc9] hover:bg-[#6d09a8] text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

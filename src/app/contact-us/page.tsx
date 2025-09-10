'use client';

import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Schema.org structured data for SEO
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://smatpay.africa/contact",
  "name": "Contact SmatPay",
  "description":
    "Get in touch with the SmatPay team. Contact us for customer support, sales inquiries, or partnership opportunities.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+263-78-956-6427",
    "contactType": "customer service",
    "areaServed": ["ZW", "ZA"],
    "availableLanguage": "en",
  },
};

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

// ✅ Framer Motion Variants
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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // ✅ Updated fetch with new API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Your message was sent successfully!");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert(`⚠️ Error: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Network error. Please try again.");
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/contact-us-hero.jpg"
            alt="Contact Us Hero"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </motion.div>

        <motion.div
          className="relative z-10 max-w-2xl px-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-4xl">
            Contact Us
          </h1>
          <p className="text-lg font-light sm:text-xl md:text-base">
            We're here to help. Reach out to our team for any inquiries.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
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

            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }}>
              <div className="p-3 mr-4 bg-gray-300 rounded-full">
                <FaMapMarkerAlt className="text-xl text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Head Office</h3>
                <p className="text-sm text-gray-600">
                  13 Brentwood Avenue, Mount Pleasant, Harare, Zimbabwe
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }}>
              <div className="p-3 mr-4 bg-gray-300 rounded-full">
                <FaEnvelope className="text-xl text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Email Us</h3>
                <p className="text-sm text-gray-600">info@smatpay.africa</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center mb-6" whileHover={{ scale: 1.02 }}>
              <div className="p-3 mr-4 bg-gray-300 rounded-full">
                <FaPhoneAlt className="text-xl text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Call Us</h3>
                <p className="text-sm text-gray-600">
                  Phone: +263 789 566 427
                </p>
              </div>
            </motion.div>

            <div>
              <h3 className="font-semibold text-[#2f1991] mb-4">
                Follow our social media
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    href: "https://www.facebook.com/people/Smatpay/61563697798654/",
                    icon: <FaFacebookF className="text-xl" />,
                  },
                  {
                    href: "https://www.instagram.com/smat_pay",
                    icon: <FaInstagram className="text-xl" />,
                  },
                  { href: "#", icon: <FaXTwitter className="text-xl" /> },
                  {
                    href: "https://www.linkedin.com/company/smatpay-africa/",
                    icon: <FaLinkedin className="text-xl" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="bg-[#2f1991] hover:bg-[#830bc9] text-white rounded-full p-2 flex items-center justify-center"
                    >
                      {item.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[#2f1991] mb-8">
              Send us a message
            </h2>
            <form className="grid grid-cols-1 gap-2 md:grid-cols-2" onSubmit={handleSubmit}>
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "company", label: "Company", type: "text" },
                { id: "phone", label: "Phone", type: "tel" },
                { id: "email", label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block mb-0 text-sm text-gray-700">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id as keyof FormData]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>
              ))}

              <div className="col-span-2">
                <label htmlFor="subject" className="block mb-0 text-sm text-gray-700">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="message" className="block mb-0 text-sm text-gray-700">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>

              <div className="col-span-2">
                <motion.button
                  type="submit"
                  className="bg-[#830bc9] hover:bg-[#6d09a8] text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 12px rgba(131,11,201,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

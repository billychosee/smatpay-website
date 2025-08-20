'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from "framer-motion";
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlinePayments, MdOutlineSecurity, MdDescription, MdAccountCircle } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbMoneybag } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";

// Schema.org structured data for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SmatPay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SmatPay is a cutting-edge payment gateway designed to facilitate secure and seamless digital transactions for businesses and individuals in Zimbabwe."
      }
    },
    {
      "@type": "Question",
      "name": "How does SmatPay work for merchants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Merchants can integrate SmatPay into their e-commerce platforms. Our platform provides a simple API that allows businesses to accept various payment methods, including mobile money, bank transfers, and more, all through a single, secure gateway."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods does SmatPay support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support a wide range of payment methods tailored to the Zimbabwean market, including all major mobile money providers and bank transfers. We are continuously expanding our supported payment options."
      }
    },
    {
      "@type": "Question",
      "name": "Is SmatPay secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, security is our top priority. SmatPay uses advanced encryption technologies and complies with global security standards to ensure that all transactions and user data are protected from fraud and unauthorized access."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with SmatPay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To get started, simply visit our website and sign up for a merchant or individual account. Our team will guide you through the integration process to get your business up and running with SmatPay."
      }
    }
  ]
};

// FAQ data structured by category
const faqCategories = [
  {
    name: "Payment",
    icon: <MdOutlinePayments />,
    faqs: [
      {
        question: "What payment methods does SmatPay support?",
        answer: "We support a wide range of payment methods tailored to the Zimbabwean market, including all major mobile money providers and bank transfers. We are continuously expanding our supported payment options."
      },
      {
        question: "How do I make a payment using SmatPay?",
        answer: "As a customer, you simply select SmatPay at checkout. You will be redirected to our secure portal to complete your transaction using your preferred payment method."
      },
      {
        question: "How are payments processed?",
        answer: "Payments are processed instantly and securely through our gateway. Once a transaction is complete, both the merchant and customer receive real-time notifications."
      },
      {
        question: "Can I get a refund?",
        answer: "Refund policies are determined by the merchant. If you require a refund, please contact the business you purchased from directly. They will initiate the process through their SmatPay dashboard."
      },
    ],
  },
  {
    name: "Product",
    icon: <LuPackage />,
    faqs: [
      {
        question: "What is SmatPay?",
        answer: "SmatPay is a cutting-edge payment gateway designed to facilitate secure and seamless digital transactions for businesses and individuals in Zimbabwe."
      },
      {
        question: "How does SmatPay work for merchants?",
        answer: "Merchants can integrate SmatPay into their e-commerce platforms. Our platform provides a simple API that allows businesses to accept various payment methods, including mobile money, bank transfers, and more, all through a single, secure gateway."
      },
      {
        question: "What features does the SmatPay dashboard have?",
        answer: "Our merchant dashboard provides a comprehensive view of all your transactions, allowing you to track sales, manage refunds, view analytics, and export reports to help with your financial reconciliation."
      },
      {
        question: "Is SmatPay suitable for small businesses?",
        answer: "Yes, SmatPay is designed for businesses of all sizes, from small startups to large enterprises. Our flexible pricing models and easy-to-use platform make it accessible to everyone."
      },
    ],
  },
  {
    name: "Fees & Charges",
    icon: <TbMoneybag />,
    faqs: [
      {
        question: "What are the fees for using SmatPay?",
        answer: "Our fee structure is competitive and transparent. Fees vary depending on the transaction type and volume. Please refer to our pricing page for detailed information or contact our sales team for a custom quote."
      },
      {
        question: "Are there any hidden charges?",
        answer: "No, we believe in full transparency. All fees are clearly outlined in your merchant agreement, and there are no hidden charges. You only pay for the services you use."
      },
      {
        question: "How often am I billed?",
        answer: "Fees are deducted on a per-transaction basis. You will receive a detailed statement at the end of each month outlining all charges for your records."
      },
      {
        question: "Can I negotiate a lower rate?",
        answer: "For high-volume merchants, we offer custom enterprise pricing. Please contact our sales team to discuss a tailored solution that meets your business needs."
      },
    ],
  },
  {
    name: "Security",
    icon: <MdOutlineSecurity />,
    faqs: [
      {
        question: "Is SmatPay secure?",
        answer: "Yes, security is our top priority. SmatPay uses advanced encryption technologies and complies with global security standards to ensure that all transactions and user data are protected from fraud and unauthorized access."
      },
      {
        question: "How does SmatPay protect my data?",
        answer: "We employ industry-leading security protocols, including PCI DSS compliance, tokenization, and multi-factor authentication, to protect sensitive financial and personal data from unauthorized access."
      },
      {
        question: "What is tokenization?",
        answer: "Tokenization is a process that replaces sensitive data, such as a credit card number, with a unique non-sensitive placeholder called a token. This prevents the actual data from being stored on our servers, significantly reducing the risk of a data breach."
      },
      {
        question: "What security measures do you have in place for fraud prevention?",
        answer: "Our platform uses real-time fraud detection algorithms, machine learning models, and customizable fraud rules to identify and prevent fraudulent transactions before they can occur."
      },
    ],
  },
  {
    name: "Account",
    icon: <MdAccountCircle />,
    faqs: [
      {
        question: "How can I get started with SmatPay?",
        answer: "To get started, simply visit our website and sign up for a merchant or individual account. Our team will guide you through the integration process to get your business up and running with SmatPay."
      },
      {
        question: "How do I reset my password?",
        answer: "You can easily reset your password by clicking the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email address to create a new password."
      },
      {
        question: "Can I manage multiple businesses with one account?",
        answer: "Yes, our platform is designed to allow you to manage multiple businesses or sub-accounts from a single master account, simplifying administration and reporting."
      },
      {
        question: "How long does it take to get my account approved?",
        answer: "Account approval typically takes 24-48 business hours, provided all required documentation is submitted and verified. Our team will notify you as soon as your account is ready."
      },
    ],
  },
  {
    name: "Documents",
    icon: <HiOutlineDocumentText />,
    faqs: [
      {
        question: "What documents are required to open an account?",
        answer: "For a merchant account, you will typically need a copy of your business registration, a valid ID, and proof of address. Individual account requirements are less stringent. Specifics are provided during the sign-up process."
      },
      {
        question: "Where can I find API documentation?",
        answer: "Our comprehensive API documentation is available in the 'Documentation' section of our website. It includes guides, code examples, and reference material to help you with the integration."
      },
      {
        question: "How do I update my business information?",
        answer: "You can update most of your business information directly from your SmatPay dashboard. For certain sensitive changes, such as banking details, you may need to submit a formal request to our support team for verification."
      },
      {
        question: "Do you have a terms of service document?",
        answer: "Yes, our full Terms of Service and Privacy Policy are available on our website. We encourage all users to review them to understand their rights and obligations."
      },
    ],
  },
];

// Framer Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-700 hover:text-[#2f1991] transition-colors duration-300 focus:outline-none"
        onClick={onClick}
      >
        <span>{question}</span>
        <FaChevronDown
          className={`w-4 h-4 transform transition-transform duration-300 text-gray-500 ${isOpen ? 'rotate-180 text-[#2f1991]' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Payment");

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeFaqs = faqCategories.find(cat => cat.name === activeCategory)?.faqs || [];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | SmatPay</title>
        <meta name="description" content="Find answers to common questions about SmatPay, our services, security, and how to get started with our digital payment solutions in Zimbabwe." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smatpay - lady on laptop.jpg"
            alt="FAQ Hero"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-sm font-light sm:text-base md:text-lg">
            Find quick answers to the most common questions about our services.
          </p>
        </motion.div>
      </div>

      {/* FAQ Section with Overlapping Card */}
      <motion.section
        className="relative z-20 w-full max-w-6xl px-4 py-12 mx-auto mb-20 -mt-20 md:px-8 lg:-mt-24 rounded-xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container px-6 py-8 mx-auto bg-white shadow-xl rounded-xl sm:px-8 sm:py-10">
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-[#2f1991] mb-2 text-center sm:text-3xl">
              What can we help you with?
            </h2>
            <p className="mb-8 text-sm text-center text-gray-500 sm:text-base">
              Choose a category to find the answers you need.
            </p>
          </motion.div>

          {/* Category Navigation with Icons */}
          <motion.div
            className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-3 lg:grid-cols-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqCategories.map((category) => (
              <motion.div key={category.name} variants={fadeInUp}>
                <button
                  onClick={() => {
                    setActiveCategory(category.name);
                    setOpenIndex(null); // Reset open accordion item on category change
                  }}
                  className={`flex flex-col items-center justify-center w-full p-4 transition-all duration-300 rounded-lg text-center ${
                    activeCategory === category.name
                      ? "bg-[#2f1991] text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  <span className="mb-1 text-2xl sm:text-3xl">{category.icon}</span>
                  <span className="text-xs font-medium sm:text-sm">{category.name}</span>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Accordion for selected category */}
          <div className="space-y-2">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              {activeFaqs.length > 0 ? (
                activeFaqs.map((faq, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <AccordionItem
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onClick={() => handleToggle(index)}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.p variants={fadeInUp} className="text-center text-gray-500">
                  No FAQs found for this category.
                </motion.p>
              )}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Can't find what you're looking for? <Link href="/contact-us" className="text-[#830bc9] font-semibold hover:underline">Contact our support team.</Link>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
import Image from 'next/image'
import Footer from '@/app/components/Footer';
import { 
  FaCreditCard,
  FaMoneyBillWave,
  FaShieldAlt,
  FaGlobe,
  FaReceipt,
  FaRocket,
  FaLink,
  FaPlug,
  FaShareAlt,
  FaLock,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import HorizontalFooterAccordion from '@/app/components/HorizontalFooterAccordion';
import CustomButton from '@/app/components/CustomButton';

export const metadata = {
  title: 'SmatPay Payment Gateway | Secure Digital Payments for Zimbabwe',
  description: 'Zimbabwe\'s leading payment solution supporting EcoCash, Visa, Mastercard & ZimSwitch with fiscalisation compliance and competitive fees.',
  openGraph: {
    title: 'SmatPay | Reliable Payment Processing for Zimbabwean Businesses',
    description: 'Accept local and international payments with our secure gateway featuring multi-currency support and ZIMRA compliance.',
    url: 'https://smatechgroup.com/products/smatpay',
    siteName: 'SmaTech Group'
  }
};

export default function SmatPay() {
  
  // JSON-LD Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Payment Gateway",
    "name": "SmatPay",
    "description": "SmatPay is Zimbabwe's leading payment gateway, enabling businesses to accept local and international payments via EcoCash, InnBucks, Visa, Mastercard, and ZimSwitch. Features include ZIMRA fiscalisation, flexible fee structures, and quick payouts.",
    "provider": {
      "@type": "Organization",
      "name": "SmaTech Group"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Zimbabwe"
    },
    "url": "https://smatechgroup.com/products/smatpay",
    "logo": "https://smatechgroup.com/services_icon.svg",
    "image": "https://smatechgroup.com/smat_pay_methods.png",
    "potentialAction": {
      "@type": "RegisterAction",
      "name": "Register for SmatPay",
      "target": "https://smatechgroup.com/products/smatpay"
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Add JSON-LD Schema to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <div className="relative flex flex-col justify-center px-6 py-32 text-left md:px-24">
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/smat_pay_bg.png')" }}
        />
        <div className="relative z-10 max-w-3xl space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-10 h-10">
              <Image
                src="/services_icon.svg"
                alt="SmatPay product icon"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-[#8140D5] text-sm lg:text-2xl font-bold">Our Products</h1>
          </div>
          <h2 className="text-3xl font-bold text-white lg:text-5xl">SmatPay</h2>
          <p className="text-base text-white">
            Transforming the future of payments in Zimbabwe with secure, flexible, and <br />efficient payment solutions for businesses of all sizes.
          </p>
        </div>
      </div>
      
      {/* SmatPay Website Image Section */}
      <section className="hidden w-full px-5 my-20 md:flex md:px-20">
        <div 
          className="relative z-0 w-full h-[770px] overflow-hidden bg-center bg-no-repeat bg-cover rounded-3xl"
          style={{ backgroundImage: "url('/smat_pay_platforms.svg')" }}
        />
      </section>

      {/* About Us Section */}
      <div className="flex flex-col items-center gap-8 px-6 py-6 md:flex-row md:py-24 bg-gradient-to-t from-purple-100 to-white md:px-24">
        <div className="pb-4 space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <div className="pb-4 space-y-4 border-b border-black"></div>
          <p className="text-sm text-gray-600 lg:text-xs xl:text-sm gap-y-5">
            SmatPay is a secure and flexible payment gateway designed for the Zimbabwean market. We help businesses of all sizes accept and manage digital payments with ease. As e-commerce in Zimbabwe continues to grow, Smatpay addresses key challenges like limited payment methods, high transactional costs, direct fiscalisation and inefficient consolidation. Our platform supports local and international payment methods, ensuring fast, reliable, and compliant transactions empowering businesses to grow in the digital economy.
          </p>
        </div>

        <div className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none">
          <Image
            src="/smat_pay_methods.png"
            alt="SmatPay supported payment methods including Visa, Mastercard, and EcoCash"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Register Section */}
      <div className="flex flex-col px-6 py-16 text-center bg-purple-100 gap-y-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 ">REGISTER WITH SMATPAY</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Take the next step in transforming the way you manage payments. Whether you're an individual, a small business or a large enterprise, Smatpay offers the tools you need to simplify transactions, reduce costs, and improve your customer experience.
        </p>
        <CustomButton variant="primary" className="bg-[#8DC440] text-black font-bold cursor-pointer">
          REGISTER
        </CustomButton>
      </div>

      {/* Key Features */}
      <section className="px-5 py-6 md:px-24">
        <div className="flex items-center justify-center pt-6 text-center">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h1 className="text-black text-3xl xl:text-[53px] font-bold">Key Features</h1>
          </div>
        </div>

        <HorizontalFooterAccordion
          items={[
            {
              icon: <FaCreditCard className="text-[#8140D5] w-6 h-6" />,
              title: "Multiple Payment Methods",
              description: "Supports payments through InnBucks, Master Card, EcoCash, Visa and ZimSwitch."
            },
            {
              icon: <FaMoneyBillWave className="text-[#8140D5] w-6 h-6" />,
              title: "Flexible Fee Structure",
              description: "Choose to absorb, split, or pass transaction fees to customers."
            },
            {
              icon: <FaReceipt className="text-[#8140D5] w-6 h-6" />,
              title: "Fiscalisation",
              description: "Automates fiscal receipting and supports tax compliance with ZIMRA."
            },
            {
              icon: <FaGlobe className="text-[#8140D5] w-6 h-6" />,
              title: "International Payment Processing",
              description: "Accept international Visa and Mastercard payments."
            },
            {
              icon: <FaShieldAlt className="text-[#8140D5] w-6 h-6" />,
              title: "Tokenization",
              description: "Securely enable recurring card payments."
            },
            {
              icon: <FaRocket className="text-[#8140D5] w-6 h-6" />,
              title: "Quick Payouts",
              description: "Processed within 24 to 48 hours—ensuring fast access to your funds."
            },
            {
              icon: <FaLink className="text-[#8140D5] w-6 h-6" />,
              title: "Payment Requests",
              description: "Create payment links, QR codes, and custom checkout pages."
            },
            {
              icon: <FaPlug className="text-[#8140D5] w-6 h-6" />,
              title: "Seamless Integrations",
              description: "Connect easily with apps, websites, and platforms using APIs and plugins."
            },
            {
              icon: <FaShareAlt className="text-[#8140D5] w-6 h-6" />,
              title: "Split Payments",
              description: "Instantly split revenue with third parties."
            },
            {
              icon: <FaLock className="text-[#8140D5] w-6 h-6" />,
              title: "Security",
              description: "PCI-standard encryption protects all payment data."
            },
            {
              icon: <FaCalendarAlt className="text-[#8140D5] w-6 h-6" />,
              title: "Subscriptions",
              description: "Automate billing on a recurring schedule."
            },
            {
              icon: <FaUsers className="text-[#8140D5] w-6 h-6" />,
              title: "Batch Payouts",
              description: "Makes it easy to make a single payment to multiple accounts."
            }
          ]}
        />
      </section>

      <Footer />
    </div>
  )
}
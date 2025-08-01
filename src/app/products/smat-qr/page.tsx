import Image from 'next/image'
import FeatureCard from '@/app/components/FeatureCard'
import FooterAccordion2 from '@/app/components/FooterAccordion2'
import { 
    FaBell, FaMobileAlt, FaCreditCard, FaMotorcycle, FaEdit, FaWhatsapp, FaQrcode, FaLanguage,
  FaDollarSign,
  FaClock,
  FaChartLine,
  FaHeart
} from 'react-icons/fa'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'SmatQR | Contactless Digital Menu & Ordering System',
  description: 'Transform your restaurant operations with QR code menus, contactless ordering, and integrated payments for safer, more efficient customer service.',
  openGraph: {
    title: 'SmatQR | QR Code Menu Solution for Restaurants & Cafes',
    description: 'Go paperless with digital menus, instant waiter calls, and seamless payment processing - all accessible through a simple QR code scan.',
    url: 'https://smatechgroup.com/products/smatqr',
    siteName: 'SmaTech Group'
  }
};

export default function SmatQr() {
  const targetMarketImages = [
    { src: '/restaurant.jpg', alt: 'Restaurant using SmatQR digital menu', caption: 'Restaurants' },
    { src: '/coffee.jpg', alt: 'Coffee Shop with SmatQR code on table', caption: 'Coffee Shops' },
    { src: '/restaurant_1.png', alt: 'Cafe offering contactless ordering with SmatQR', caption: 'Cafes' },
  ]

  const ImageCard = ({
    src,
    alt,
    caption
  }: {
    src: string
    alt: string
    caption: string
  }) => (
    <div className="flex flex-col items-center p-4 bg-white shadow rounded-2xl">
      <div className="relative w-full mb-4 overflow-hidden rounded h-60">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-center text-gray-800">{caption}</h3>
    </div>
  );

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SmatQR",
    "description": "SmatQR is a contactless digital menu and ordering system for restaurants, cafes, and other food service businesses. It enables customers to view menus, place orders, and pay directly from their smartphones by scanning a QR code, enhancing service efficiency and customer safety.",
    "brand": {
      "@type": "Brand",
      "name": "SmaTech Group"
    },
    "url": "https://smatechgroup.com/products/smatqr",
    "logo": "https://smatechgroup.com/services_icon.svg",
    "image": "https://smatechgroup.com/smat_qr_phone.jpg",
    "slogan": "Transform your restaurant with contactless QR code menus, seamless ordering, and integrated payments.",
    "audience": {
      "@type": "Audience",
      "audienceType": "Restaurants, Coffee Shops, Cafes"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "SmaTech Group"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      {/* Add JSON-LD Schema to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <div className="relative px-6 py-32 text-left md:px-24">
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/smat_qr_bg.png')" }}
        />
        <div className="relative z-10 max-w-3xl space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-10 h-10 ">
              <Image
                src="/services_icon.svg"
                alt="SmatQR product icon"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold">Our Products</h1>
          </div>
          <h2 className="text-3xl font-bold text-white lg:text-5xl">SmatQR</h2>
          <p className="text-base text-white">
            Transform your restaurant with contactless QR code menus, seamless ordering, <br /> and integrated payments for a safer, more efficient dining experience.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row">
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">SmatQR</h2>
          <p className="text-lg text-gray-600">
            SmatQR offers innovative QR code menu services that revolutionize the way restaurants, 
            retailers, and other businesses serve customers. Our QR code menus provide customers 
            with a fast and convenient way to access restaurant menus and place orders.
          </p>
        </div>
        
        <div className="relative md:w-1/2 h-96 rounded-xl">
          <Image
            src="/smat_qr_phone.jpg"
            alt="SmatQR phone app interface showing a digital menu"
            fill
            className="object-contain rounded-3xl"
          />
        </div>
      </div>
      
      {/* Image banner - hidden on mobile, visible on md and up */}
      <section className="justify-center hidden w-full px-5 pt-48 pb-20 md:flex md:px-24">
        <div 
          className="relative inset-0 z-0 justify-center hidden w-full px-5 md:flex md:px-24 h-[500px] overflow-hidden rounded-3xl"
          style={{ backgroundImage: "url('/smat_qr_menu.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </section>

      {/* Product Features */}
      <section className="px-5 md:px-24">
        <div className="flex items-center justify-center pt-6 text-center text-black md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h1 className="text-[#4A90A4] text-3xl xl:text-[53px] font-bold">Product Features</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-2 md:grid-cols-3">
          <FeatureCard
            icon={FaQrcode}
            title="QR Code Access"
            description="Customers instantly access your digital menu by simply scanning the QR code, eliminating physical menus."
            href="#"
          />
          <FeatureCard
            icon={FaBell}
            title="Waiter Call System"
            description="Customers can call waiters with one tap, reducing wait times and improving service efficiency."
            href="#"
          />
          <FeatureCard
            icon={FaMobileAlt}
            title="Contactless Ordering"
            description="Safe and hygienic ordering process that minimizes physical contact between staff and customers."
            href="#"
          />
          <FeatureCard
            icon={FaCreditCard}
            title="Secure Online Payments"
            description="Integrated payment gateway supports multiple payment methods for seamless transactions."
            href="#"
          />
          <FeatureCard
            icon={FaMotorcycle}
            title="Delivery Integration"
            description="Direct connection with delivery services for efficient takeaway management."
            href="#"
          />
          <FeatureCard
            icon={FaEdit}
            title="Instant Menu Updates"
            description="Update menu items, prices, and availability in real-time without reprinting."
            href="#"
          />
          <FeatureCard
            icon={FaWhatsapp}
            title="WhatsApp Ordering"
            description="Orders placed through QR code scanning are sent directly to your WhatsApp."
            href="#"
          />
          <FeatureCard
            icon={FaLanguage}
            title="Multi-language Support"
            description="Offer your menu in multiple languages to cater to international customers."
            href="#"
          />
        </div>
      </section>

      {/* Benefits */}
      <div className="py-24">
        <h2 className="text-xl lg:text-4xl xl:text-[53px] font-bold text-black mb-6 text-center">
          Benefits of SmatQr
        </h2>
        <FooterAccordion2
          icon={<FaDollarSign className="text-[#03577A] w-6 h-6" />}
          title="DYNAMIC & COST-EFFECTIVE"
          description="Reduces costs associated with printing and distributing traditional menus with a click of a button."
        />
        <FooterAccordion2
          icon={<FaHeart className="text-[#03577A] w-6 h-6" />}
          title="INCREASED CUSTOMER LOYALTY"
          description="By utilizing our smatQR service, customer wait times are significantly reduced, resulting in improved customer satisfaction and loyalty"
        />
        <FooterAccordion2
          icon={<FaClock className="text-[#03577A] w-6 h-6" />}
          title="INCREASED EFFICIENCY"
          description="With smatQR customers can place orders faster by simply scanning the QR code , resulting in a more efficient and time saving ordering process."
        />
        <FooterAccordion2
          icon={<FaChartLine className="text-[#03577A] w-6 h-6" />}
          title="ENHANCED DATA MANAGEMENT"
          description="QR code menus offer the abiity to store valuable customer
information, such as order history, payment details and preferences. This data can be analyzed to gain
insights into customer behavior and preferences, which can aid restaurantsin improving customer
experienceand enhancing their offerings."
        />
      </div>

      {/* Target Market */}
      <div className="py-12">
        <h2 className="text-xl lg:text-4xl xl:text-[53px] font-bold text-black mb-6 text-center">
          Our Target Market
        </h2>
        <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-24">
          {targetMarketImages.map((img, idx) => (
            <ImageCard
              key={idx}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
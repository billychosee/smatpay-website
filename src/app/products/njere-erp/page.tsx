import Image from 'next/image'
import Footer from '@/app/components/Footer';
import { 
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaBed,
  FaUserGraduate,
  FaUserShield,
  FaHeadset,
  FaClipboardList,
  FaMoneyBillWave,
  FaTasks,
  FaVideo,
  FaSchool,
  FaClipboardCheck,
  FaComments,
  FaBookOpen,
  FaMoneyCheckAlt
} from "react-icons/fa";
import { FeatureGrid } from '@/app/components/FeatureGrid';

export const metadata = {
  title: 'Njere School ERP System | Comprehensive Education Management Software',
  description: 'Streamline school operations with Njere ERP - the complete solution for student management, e-learning, finance, and administration in educational institutions.',
  openGraph: {
    title: 'Njere School ERP | All-in-One Education Management Platform',
    description: 'End-to-end school management system with e-learning, payments, and administration tools for modern educational institutions.',
    url: 'https://smatechgroup.com/products/njere-erp',
    siteName: 'SmaTech Group'
  }
};

export default function NjereERP() {

  // JSON-LD Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Njere School ERP System",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web-based",
    "description": "Njere ERP is a comprehensive school management software that streamlines all aspects of an educational institution, from administration and student management to e-learning, finance with payment gateways, and multi-campus operations.",
    "brand": {
      "@type": "Brand",
      "name": "SmaTech Group"
    },
    "url": "https://smatechgroup.com/products/njere-erp",
    "logo": "https://smatechgroup.com/services_icon.svg",
    "image": "https://smatechgroup.com/njere_erp.jpg",
    "featureList": [
      "E-learning Management",
      "Faculty and Staff Management",
      "Timetable & Classroom Scheduling",
      "Hostel & Canteen Management",
      "Student Information System",
      "User Access Control & Security",
      "Gradebook and Marksheet Generator",
      "Multicurrency Payment Gateway Integration",
      "Assignment & Examination Management",
      "Virtual Classroom Management",
      "Multi-campus Management",
      "Attendance Tracking",
      "Communication Management",
      "Library Management",
      "Account & Salary Management"
    ],
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
    <div className="min-h-screen bg-gray-50">
      {/* Add JSON-LD Schema to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <div className="relative flex flex-col justify-center px-6 py-32 text-left md:px-24">
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/njere_bg.png')" }}
        />
        <div className="relative z-10 max-w-3xl space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-10 h-10">
              <Image
                src="/services_icon.svg"
                alt="Njere ERP product icon"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#03577A] text-sm lg:text-2xl font-bold">Our Products</p>
          </div>
          <h1 className="text-3xl font-bold text-white lg:text-5xl">Njere ERP</h1>
          <p className="text-base text-white">
            Njere is a comprehensive and innovative school management ERP that helps <br /> you manage all aspects of your educational institution, from administration <br /> to academics, from finance to facilities, and <br />from communication to collaboration.
          </p>
        </div>
      </div>

      {/* Njere Website Image Section */}
      <section className="justify-center hidden w-full px-5 pt-48 pb-20 md:flex md:px-24">
        <div 
          className="relative z-0 w-full px-5 md:px-24 h-[500px] overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/njere_website.svg')" }}
        />
      </section>

      {/* Content Section */}
      <div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row md:py-24">
        <div className="pb-4 space-y-4 md:w-1/2 ">
          <h2 className="text-3xl font-bold text-gray-800">About Njere ERP</h2>
          <div className="pb-4 space-y-4 border-b border-black"></div>
          <p className="text-sm text-gray-600 lg:text-xs xl:text-sm gap-y-5">
            Njere ERP is a comprehensive software system developed by SmaTech Group, designed specifically for educational institutions to streamline and digitize their administrative, academic, and financial operations. It integrates various modules such as student management, e-learning, timetable scheduling, examination management, fee management with payment gateway integration, library management, and more into a centralized platform. This solution leverages the power of digitization to optimize workflows, enhance collaboration, and provide data-driven insights for better decision-making in schools.
          </p>
        </div>
        <div className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none">
          <Image
            src="/njere_erp.jpg"
            alt="Dashboard of the Njere School Management ERP System"
            width={400}
            height={400}
            className="object-contain border-4 rounded-2xl"
          />
        </div>
      </div>

      {/* Key Features */}
      <section className="px-5 md:px-24">
        <div className="flex items-center justify-center pt-6 text-center text-black md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h2 className="text-black text-3xl xl:text-[53px] font-bold">Key Features</h2>
          </div>
        </div>
        <FeatureGrid
          items={[
            { icon: <FaBook className="w-6 h-6" />, title: "E-learning Management" },
            { icon: <FaChalkboardTeacher className="w-6 h-6" />, title: "Faculty and Staff Management" },
            { icon: <FaClock className="w-6 h-6" />, title: "Timetable & Classroom Scheduling" },
            { icon: <FaBed className="w-6 h-6" />, title: "Hostel & Canteen Management" },
            { icon: <FaUserGraduate className="w-6 h-6" />, title: "Student Information System" },
            { icon: <FaUserShield className="w-6 h-6" />, title: "User Access Control & Security" },
            { icon: <FaHeadset className="w-6 h-6" />, title: "Enquiry & Contact Management" },
            { icon: <FaClipboardList className="w-6 h-6" />, title: "Gradebook and Marksheet Generator" },
            { icon: <FaMoneyBillWave className="w-6 h-6" />, title: "Multicurrency Payment Gateway" },
            { icon: <FaTasks className="w-6 h-6" />, title: "Assignment & Examination Management" },
            { icon: <FaVideo className="w-6 h-6" />, title: "Virtual Classroom Management" },
            { icon: <FaSchool className="w-6 h-6" />, title: "Multi-campus/Schools Management" },
            { icon: <FaClipboardCheck className="w-6 h-6" />, title: "Attendance Tracking Management" },
            { icon: <FaComments className="w-6 h-6" />, title: "Communication Management" },
            { icon: <FaBookOpen className="w-6 h-6" />, title: "Library Management" },
            { icon: <FaMoneyCheckAlt className="w-6 h-6" />, title: "Account & Salary Management" },
          ]}
        />
      </section>

      {/* Feature Section */}
      <div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row md:py-14">
        <div className="pb-4 space-y-4 md:w-1/2 ">
          <h2 className="text-xl font-bold text-gray-800">Integrated Web Conferencing</h2>
          <div className="pb-4 space-y-4 border-b border-black"></div>
          <p className="text-sm text-gray-600 lg:text-xs xl:text-sm gap-y-5">
            Njere integrates with web conferencing systems for online learning and collaboration. It provides real-time audio, video, and chat capabilities, along with shared whiteboards, screen sharing, and interactive features such as polls and breakout rooms. It offers an engaging environment for participants to communicate and collaborate, making it a powerful tool for distance learning and remote teamwork.
          </p>
        </div>
        <div className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none">
          <Image
            src="/njere_key_feature.png"
            alt="Illustration of Njere ERP's virtual classroom feature"
            width={400}
            height={400}
            className="object-contain rounded-2xl"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
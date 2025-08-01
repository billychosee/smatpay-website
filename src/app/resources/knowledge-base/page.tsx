import { Metadata } from "next";
import Script from 'next/script';
import { ImageTextIconListSection } from "@/app/components/ImageTextIconListSection";
import { ImageTextIconListSectionReverse } from "@/app/components/ImageTextIconListSectionReverse";
import {
  Shield, Smartphone, Zap, CreditCard, BarChart, Globe, Lock, Cpu, Server, Database, Code, Scale
} from "lucide-react";
import { ImageLeftAccordionRight } from "@/app/components/ImageLeftAccordionRight";
import Footer from "@/app/components/Footer";
import FeatureCard from "@/app/components/FeatureCard";
import { CtaSection } from "@/app/components/CtaSection";

export const metadata: Metadata = {
  title: "Hospitality & Tourism Tech Solutions | Smatech Group",
  description: "Innovative technology solutions for hotels, tour operators, and hospitality businesses in Zimbabwe & Africa. Streamline operations, enhance guest experiences, and boost revenue.",
  keywords: "hospitality tech Zimbabwe, tourism software Africa, hotel management systems, digital guest experience, restaurant tech, booking engines, loyalty programs, smart hotel solutions",
  openGraph: {
    title: "Hospitality & Tourism Tech Solutions | Smatech Group",
    description: "Empowering the hospitality and tourism industry with custom software, mobile solutions, and data analytics for sustainable growth.",
    url: "https://smatechgroup.com/industries/hospitality-tourism",
    type: "website",
  },
};

export default function HospitalityTourism() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hospitality and Tourism Technology Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Smatech Group",
      "url": "https://smatechgroup.com",
      "logo": "https://smatechgroup.com/smatech_logo.svg"
    },
    "description": "Custom technology solutions for the hospitality and tourism industry, including PMS, digital guest experiences, booking engines, and analytics.",
    "areaServed": {
      "@type": "Country",
      "name": ["ZW", "ZA", "NG", "KE"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hospitality & Tourism Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property & Hotel Management Systems (PMS)",
            "description": "Centralized platforms to simplify day-to-day hotel operations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contactless & Digital Guest Experience",
            "description": "Seamless, tech-enabled guest journeys including mobile check-in and in-room smart devices."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Booking Engines & Channel Management",
            "description": "Solutions for multi-platform channel syncing and custom booking engines."
          }
        }
      ]
    }
  };

  const coreOfferings = [
    {
      icon: Code, // Using Code for custom development
      title: "Bespoke Software Development",
      description: "Custom solutions tailored to your operations, filling gaps left by off-the-shelf systems."
    },
    {
      icon: Zap, // Using Zap for efficiency/streamlining
      title: "Streamline Workflows",
      description: "Reduce manual tasks, cut operational costs, and boost efficiency across your business."
    },
    {
      icon: Smartphone, // Using Smartphone for guest experience
      title: "Enhance Guest Satisfaction",
      description: "Craft seamless guest experiences with contactless check-in, smart engagement, and personalized services."
    },
    {
      icon: BarChart, // Using BarChart for revenue boost
      title: "Boost Revenue",
      description: "Implement smarter booking strategies, dynamic pricing, and effective upsell opportunities."
    },
    {
      icon: Scale, // Using Scale for scalability
      title: "Scale with Your Business",
      description: "Cloud-based, modular architecture ensures our solutions grow flexibly with your evolving needs."
    },
    {
      icon: Cpu, // Using Cpu for expertise/processing
      title: "Expert Partnership",
      description: "Our team of developers, UX designers, and industry experts work alongside you."
    }
  ];

  const faqItems = [
    {
      question: "What makes your hospitality tech solutions unique for Africa?",
      answer: "We combine global best practices with a deep understanding of local market needs, addressing unique challenges like diverse payment methods, connectivity, and regulatory environments across Africa."
    },
    {
      question: "Can you integrate with existing hotel systems or PMS?",
      answer: "Yes, our solutions are designed for seamless integration with a wide range of existing Property Management Systems (PMS), channel managers, and other third-party hospitality software."
    },
    {
      question: "How do your solutions enhance guest experience?",
      answer: "We focus on creating seamless guest journeys through mobile check-in/check-out, in-room smart devices, digital concierges, and personalized communication, leading to higher satisfaction and loyalty."
    },
    {
      question: "Do you offer post-implementation support and training?",
      answer: "Absolutely. We provide comprehensive training for your staff and offer tiered SLA-based support packages to ensure your systems run smoothly and efficiently long after deployment."
    }
  ];

  return (
    <div className="pt-10 text-black bg-white md:pt-24">
      <Script
        id="hospitality-tourism-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      
      <section className="flex flex-col items-center space-y-6 text-center">
        <p className="text-sm font-bold text-[#00b956] pt-20 md:pt-0">HOSPITALITY AND TOURISM TECHNOLOGY</p>
        <h1 className="text-[#03577A] text-3xl xl:text-[53px] font-bold lg:text-4xl">
          We Build SmaTech for <br /> Hospitality Businesses
        </h1>
        <p className="max-w-2xl mx-auto">
         The hospitality industry demands agility. At <strong>Smatech,</strong> we partner with you to design, develop, and implement technology solutions that solve your unique challenges, from automating operations to crafting seamless guest experiences.
        </p>
      </section>

      {/* --- */}

      {/* Why Partner with Smatech - Core Offerings */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreOfferings.map((offering, index) => (
            <FeatureCard
              key={index}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
               
            />
          ))}
        </div>
      </section>

      {/* --- */}

      {/* Property & Hotel Management Systems (PMS) */}
      <ImageTextIconListSectionReverse
        heading="Property & Hotel Management Systems (PMS)"
        description="Designing centralized platforms to simplify day-to-day hotel operations. We offer scalable PMS setups that support comprehensive management."
        imageSrc="/pms_dashboard.jpg" // Placeholder image, replace with relevant image
        imageAlt="Hotel Property Management System Dashboard"
        iconItems={[
          {
            icon: <Server className="w-8 h-8" />, // Using Server for centralized systems
            title: "Centralized Management",
            text: "Reservations, calendar, front desk, and housekeeping coordination."
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: "Real-time Dashboards",
            text: "Availability, occupancy, and guest lifecycle management."
          },
          {
            icon: <Globe className="w-8 h-8" />, // Using Globe for OTA integration/reach
            title: "OTA Integrations",
            text: "Seamless connectivity with Booking.com, Airbnb, Expedia, and more."
          }
        ]}
      />

      {/* --- */}

      {/* Contactless & Digital Guest Experience */}
      <ImageTextIconListSection
        heading="Contactless & Digital Guest Experience"
        description="Creating seamless, tech-enabled guest journeys for modern hospitality brands."
        imageSrc="/digital_guest_experience.jpg" // Placeholder image, replace with relevant image
        imageAlt="Guest using mobile check-in at a hotel"
        iconItems={[
          {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Check-in/Check-out",
            text: "Streamlined processes for a convenient guest arrival and departure."
          },
          {
            icon: <Lock className="w-8 h-8" />, // Using Lock for secure access
            title: "Smart Room Access",
            text: "QR or NFC-enabled room access for enhanced security and convenience."
          },
          {
            icon: <Cpu className="w-8 h-8" />, // Using Cpu for smart/AI assistant
            title: "Digital Concierge & Menus",
            text: "Instant service requests and ordering via SmatQR."
          }
        ]}
      />

      {/* --- */}

      {/* Restaurant & Bar Tech */}
      <ImageTextIconListSectionReverse
        heading="Restaurant & Bar Tech"
        description="Enabling smarter Food & Beverage operations and better guest dining experiences."
        imageSrc="/restaurant_pos.jpg" // Placeholder image, replace with relevant image
        imageAlt="Restaurant Point of Sale system"
        iconItems={[
          {
            icon: <Code className="w-8 h-8" />, // Using Code for digital systems (KOTs)
            title: "Digital Kitchen Order Management (KOTs)",
            text: "Efficient order processing from table to kitchen."
          },
          {
            icon: <Database className="w-8 h-8" />, // Using Database for reservations data
            title: "Online Table Reservations",
            text: "Manage bookings and optimize seating capacity."
          },
          {
            icon: <CreditCard className="w-8 h-8" />,
            title: "POS Integration & Digital Menus",
            text: "Seamless room billing and QR code ordering powered by SmatQR."
          }
        ]}
      />

      {/* --- */}

      {/* Facility, Housekeeping & Maintenance */}
      <ImageTextIconListSection
        heading="Facility, Housekeeping & Maintenance"
        description="Keeping properties clean, compliant, and cost-efficient with smart systems."
        imageSrc="/hotel_maintenance.jpg" // Placeholder image, replace with relevant image
        imageAlt="Housekeeping staff checking a room"
        iconItems={[
          {
            icon: <Zap className="w-8 h-8" />, // Using Zap for task efficiency
            title: "Task Management",
            text: "Assignment and status tracking for housekeeping and maintenance teams."
          },
          {
            icon: <BarChart className="w-8 h-8" />, // Using BarChart for predictive/analytics
            title: "Predictive Maintenance",
            text: "Workflows for scheduled and predictive asset upkeep."
          },
          {
            icon: <Database className="w-8 h-8" />, // Using Database for logs/inventory
            title: "Supervisor Dashboards & Logs",
            text: "Monitor shift performance and inventory assets."
          }
        ]}
      />

      {/* --- */}

      {/* Booking Engines & Channel Management */}
      <ImageTextIconListSectionReverse
        heading="Booking Engines & Channel Management"
        description="Helping your brand stay bookable—locally and globally—with robust solutions."
        imageSrc="/online_booking.jpg" // Placeholder image, replace with relevant image
        imageAlt="Laptop showing an online booking website"
        iconItems={[
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Multi-platform Syncing",
            text: "Connect with OTAs, direct bookings, and local agents."
          },
          {
            icon: <Code className="w-8 h-8" />, // Using Code for custom engines
            title: "Custom Booking Engines",
            text: "Tailored booking interfaces for your brand website."
          },
          {
            icon: <CreditCard className="w-8 h-8" />, // Using CreditCard for promos/pricing
            title: "Promo & Upsell Logic",
            text: "Create promo codes and implement smart upsell strategies."
          }
        ]}
      />

      {/* --- */}

      {/* Guest Engagement & Marketing */}
      <ImageTextIconListSection
        heading="Guest Engagement & Marketing"
        description="Helping you build memorable guest relationships that last through smart engagement tools."
        imageSrc="/guest_crm.jpg" // Placeholder image, replace with relevant image
        imageAlt="CRM dashboard for guest engagement"
        iconItems={[
          {
            icon: <Cpu className="w-8 h-8" />, // Using Cpu for smart CRM/personalization
            title: "Guest CRM Systems",
            text: "Personalize experiences and manage guest profiles."
          },
          {
            icon: <Zap className="w-8 h-8" />, // Using Zap for automation
            title: "Automated Marketing",
            text: "SMS, email, and WhatsApp automation for loyalty programs and feedback."
          },
          {
            icon: <BarChart className="w-8 h-8" />, // Using BarChart for program analytics
            title: "Loyalty Programs & Vouchers",
            text: "Deploy digital loyalty initiatives and event-based triggers."
          }
        ]}
      />

      {/* --- */}

      {/* Staff Training & E-Learning */}
      <ImageTextIconListSectionReverse
        heading="Staff Training & E-Learning"
        description="Upskilling your hospitality workforce through smart online learning tools."
        imageSrc="/e_learning_hospitality.jpg" // Placeholder image, replace with relevant image
        imageAlt="Staff undergoing e-learning for hospitality"
        iconItems={[
          {
            icon: <Database className="w-8 h-8" />, // Using Database for content repository
            title: "Online Learning Platforms",
            text: "Deliver SOPs, safety training, and cross-cultural awareness."
          },
          {
            icon: <BarChart className="w-8 h-8" />, // Using BarChart for assessment tracking
            title: "Assessment Tracking",
            text: "Monitor progress and issue certifications."
          },
          {
            icon: <Code className="w-8 h-8" />, // Using Code for custom content development
            title: "Custom Content Development",
            text: "Tailored e-learning modules for your specific operational needs."
          }
        ]}
      />

      {/* --- */}

      {/* Data Dashboards & Business Intelligence */}
      <ImageTextIconListSection
        heading="Data Dashboards & Business Intelligence"
        description="Turning raw data into smart decisions, helping hospitality businesses monitor key metrics."
        imageSrc="/data_analytics_hospitality.jpg" 
        imageAlt="Data analytics dashboard for hospitality"
        iconItems={[
          {
            icon: <BarChart className="w-8 h-8" />,
            title: "Occupancy & Revenue Trends",
            text: "Track RevPAR, ADR, and other vital performance indicators."
          },
          {
            icon: <Cpu className="w-8 h-8" />,
            title: "Guest Satisfaction & Service",
            text: "Monitor feedback and service turnaround times."
          },
          {
            icon: <Scale className="w-8 h-8" />, 
            title: "Cost Performance & Productivity",
            text: "Analyze restaurant costs and workforce analytics."
          }
        ]}
      />

      {/* --- */}

      {/* Access Control & Security */}
      <ImageTextIconListSectionReverse
        heading="Access Control & Security"
        description="Safeguarding guests, staff, and property with integrated smart security features."
        imageSrc="/access_control_hotel.jpg"
        imageAlt="Hotel access control system"
        iconItems={[
          {
            icon: <Lock className="w-8 h-8" />,
            title: "Secure Access Systems",
            text: "Biometric, RFID, and access control logs for rooms and common areas."
          },
          {
            icon: <Shield className="w-8 h-8" />, // Using Shield for overall security
            title: "Guest Identity Verification",
            text: "Robust processes for guest identity and visitor tracking."
          },
          {
            icon: <Server className="w-8 h-8" />, // Using Server for system integrations (like CCTV)
            title: "System Integrations",
            text: "Seamless integration with existing surveillance and security systems."
          }
        ]}
      />

      {/* --- */}

      {/* Payments & Revenue Management */}
      <ImageTextIconListSection
        heading="Payments & Revenue Management"
        description="Supporting modern financial operations built for the tourism economy through SmatPay."
        imageSrc="/payment_gateway_hospitality.jpg"
        imageAlt="Online payment gateway for hospitality"
        iconItems={[
          {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Secure Online Payments",
            text: "Facilitate online and in-person bookings securely."
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Split Payments & Fees",
            text: "Customizable transaction fees and split payment options."
          },
          {
            icon: <Scale className="w-8 h-8" />,
            title: "Fiscalisation-Ready",
            text: "Solutions for compliance with ZIMRA regulations."
          }
        ]}
      />

      {/* --- */}

      {/* Tour & Transport Management */}
      <ImageTextIconListSectionReverse
        heading="Tour & Transport Management"
        description="Powering smooth logistics for your travel and tourism operations."
        imageSrc="/tour_transport_management.jpg"
        imageAlt="Tour and transport management system"
        iconItems={[
          {
            icon: <Globe className="w-8 h-8" />, // Using Globe for travel/routes
            title: "Fleet Tracking",
            text: "Real-time monitoring for shuttles, buses, and taxis."
          },
          {
            icon: <Cpu className="w-8 h-8" />, // Using Cpu for smart scheduling
            title: "Itinerary & Driver Management",
            text: "Scheduling, planning, and fuel logs for tour operations."
          },
          {
            icon: <Smartphone className="w-8 h-8" />, // Using Smartphone for mobile booking
            title: "Online Tour Booking",
            text: "Enable online package booking and payments."
          }
        ]}
      />

      {/* --- */}

      {/* CTA Section - Let's Build What Your Business Needs */}
      <CtaSection
        heading="Let's Build What Your Business Needs"
        description="Whether you're upgrading legacy systems or building from scratch, Smatech partners with you to create technology that's as dynamic as your guests' needs."
        primaryButton={{
          text: "Request a Consultation",
          url: "/contact-us"
        }}
        secondaryButton={{
          text: "Schedule a Tech Strategy Session",
          url: "/contact-us"
        }}
      />

      {/* --- */}

      {/* FAQ Section */}
      <section className="py-5 md:py-14">
        <div className="flex flex-col items-center px-4 space-y-6 text-center">
          <h2 className="text-3xl font-bold text-black xl:text-4xl lg:text-4xl">
            Hospitality & Tourism Tech FAQs
          </h2>
        </div>

        <ImageLeftAccordionRight
          imageSrc="/hospitality_africa.jpg"
          imageAlt="Hospitality technology transforming African markets"
          items={faqItems}
        />
      </section>

      <Footer />
    </div>
  );
}
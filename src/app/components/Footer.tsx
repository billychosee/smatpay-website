import React from 'react';
import Link from 'next/link'; // Assuming Next.js for Link, adjust if using React Router or plain <a>
import Image from 'next/image'; // Import Next.js Image component
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Using react-icons for social media
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2f1991] text-white py-12 px-5 md:px-24">
      <div className="container mx-auto">
        {/* Top Section: Logo and Social Media */}
        <div className="flex flex-col items-center justify-between pb-8 mb-8 border-b border-gray-400 md:flex-row">
          <div className="mb-6 md:mb-0">
          <Link href="/">
          <Image src={"./smatpay_white_logo.svg"} alt={"SmatPay White Logo"} width={150} height={50} className="w-32 h-auto" />
          </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="bg-[#830bc9] hover:bg-[#6d09a8] text-white rounded-full p-3 transition duration-300 ease-in-out">
              <FaFacebookF className="text-xl" />
            </Link>
            <Link href="#" className="bg-[#830bc9] hover:bg-[#6d09a8] text-white rounded-full p-3 transition duration-300 ease-in-out">
              <FaInstagram className="text-xl" />
            </Link>
            <Link href="#" className="bg-[#830bc9] hover:bg-[#6d09a8] text-white rounded-full p-3 transition duration-300 ease-in-out">
              <FaXTwitter className="text-xl" />
            </Link>
            <Link href="#" className="bg-[#830bc9] hover:bg-[#6d09a8] text-white rounded-full p-3 transition duration-300 ease-in-out">
              <FaYoutube className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Head Office */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Head Office</h3>
            <p className="text-sm text-gray-300">13 Brentwood, Avenue</p>
            <p className="text-sm text-gray-300">Harare, Zimbabwe</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">Documentation</Link></li>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">FAQs</Link></li>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">Knowledge Base</Link></li>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">Register</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">Help Center</Link></li>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">My Account</Link></li>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">Ticket Support</Link></li>
              <li className="mb-2"><Link href="#" className="text-sm text-gray-300 transition duration-300 ease-in-out hover:text-white">Contact us</Link></li>
            </ul>
          </div>

          {/* About Smatpay */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Smatpay</h3>
            <p className="text-sm text-gray-300">Secure and Convenient Payments. Your trusted partner for online transactions.</p>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="flex flex-col items-center justify-between pt-8 text-sm text-white border-t border-gray-400 md:flex-row">
          <p className="mb-4 md:mb-0">Copyright © {currentYear}, All rights reserved. Powered by Smatech Group</p>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
            <Link href="#" className="transition duration-300 ease-in-out hover:text-white">Term and Conditions</Link>
            <Link href="#" className="transition duration-300 ease-in-out hover:text-white">Privacy Policy</Link>
            <Link href="#" className="transition duration-300 ease-in-out hover:text-white">Acceptable Use Policy</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <Link
        href="https://wa.me/+263789566428" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 p-4 text-white transition duration-300 ease-in-out bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </Link>
    </footer>
  );
}

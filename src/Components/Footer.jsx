import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-white border-t-2 border-gray-500'>
      <div className='max-w-7xl mx-auto px-16 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Computer Durbar Section */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Computer Durbar
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Best computer store in Nepal for all kinds of laptops, desktops,
              accessories, and expert support.
            </p>
          </div>

          {/* Explore Section */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>Explore</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>
                  Shop
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>Contact</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <Mail className='w-4 h-4 text-gray-500' />
                <span className='text-gray-600 text-sm'>
                  info@computerdurbar.com
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='w-4 h-4 text-gray-500' />
                <span className='text-gray-600 text-sm'>+977 981-8085380</span>
              </div>
              <div className='flex items-center space-x-3'>
                <MapPin className='w-4 h-4 text-gray-500' />
                <span className='text-gray-600 text-sm'>
                  Putalisadak, Kathmandu
                </span>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>Follow Us</h3>
            <div className='space-y-3'>
              <a
                href='#'
                className='flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors'>
                <Facebook className='w-4 h-4' />
                <span className='text-sm'>Facebook</span>
              </a>
              <a
                href='#'
                className='flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-colors'>
                <Instagram className='w-4 h-4' />
                <span className='text-sm'>Instagram</span>
              </a>
              <a
                href='#'
                className='flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors'>
                <Twitter className='w-4 h-4' />
                <span className='text-sm'>X</span>
              </a>
              <a
                href='#'
                className='flex items-center space-x-3 text-gray-600 hover:text-blue-700 transition-colors'>
                <Linkedin className='w-4 h-4' />
                <span className='text-sm'>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-12 pt-8 border-t border-gray-200'>
          <p className='text-center text-gray-500 text-sm'>
            ©2025 ComputerDurbar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

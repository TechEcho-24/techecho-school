import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import GlobeParticles from "../magicui/globe";
import { Newsletter } from "./NewsLetter";

const Footer: React.FC = () => {
  return (
    <div>
      <Newsletter />
      <footer className='bg-[url("/assets/home/footer-bg.png")] bg-no-repeat bg-cover text-white mt-52'>
        {/* Top CTA section */}
        <div className='py-20 bottom-40 overflow-hidden w-11/12 md:w-2/3 mx-auto bg-gradient-to-bl from-black to-purple-800 px-8 rounded-3xl relative flex flex-col md:flex-row items-center justify-between'>
          <div className=' basis-1/2'>
            <h2 className='text-3xl md:text-4xl font-semibold mb-2'>
              Experience superior <br />{" "}
              <span className='text-white/80'>skip tracing</span>
            </h2>
            <p className='text-sm text-white/80 mb-4'>
              150+ data points per search.
            </p>
            <button className='bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-200 transition'>
              Get started
            </button>
          </div>

          {/* Placeholder for Globe */}
          <div className='w-1/2 absolute -right-96 top-52 transform -translate-x-1/2 -translate-y-1/2'>
            <GlobeParticles />
          </div>
        </div>

        {/* Footer Main */}
        <div className='p-6 md:p-12 md:pb-32 md:mt-60 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm'>
          {/* Contact */}
          <div className='space-y-2'>
            <h3 className='font-semibold'>Skipmatrix</h3>
            <p>
              20619 Torrence Chapel Rd
              <br />
              Suite 116 #1040
              <br />
              Cornelius, NC 28031
              <br />
              United States
            </p>
            <p>
              Phone:{" "}
              <a href='tel:18002011019' className='underline'>
                1-800-201-1019
              </a>
            </p>
            <p>
              Email:{" "}
              <a href='mailto:support@skipmatrix.com' className='underline'>
                support@skipmatrix.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold mb-2'>Quick Links</h3>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='hover:underline'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Resources
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  About us
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='font-semibold mb-2'>Social</h3>
            <ul className='space-y-1'>
              <li className='flex items-center gap-2'>
                <FaFacebook /> Facebook
              </li>
              <li className='flex items-center gap-2'>
                <FaInstagram /> Instagram
              </li>
              <li className='flex items-center gap-2'>
                <FaLinkedin /> LinkedIn
              </li>
              <li className='flex items-center gap-2'>
                <FaTwitter /> Twitter
              </li>
              <li className='flex items-center gap-2'>
                <FaYoutube /> YouTube
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='font-semibold mb-2'>Legal</h3>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='hover:underline'>
                  Terms of service
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='text-center py-4 text-xs text-gray-400 border-t border-white/10'>
          © 2024 Skipmatrix. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

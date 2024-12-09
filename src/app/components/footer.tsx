import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const SiteFooter = () => {
  return (
    <>
      <footer className="footer-container px-6 md:px-12 py-12 bg-[#2A254B] mt-12">
        <div className="footer-sections flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="footer-menu text-white w-full sm:w-auto">
            <h1 className="section-title text-lg md:text-xl font-bold">Menu</h1>
            <ul className="menu-links space-y-2">
              <li><Link href="/">New Arrivals</Link></li>
              <li><Link href="/">Best sellers</Link></li>
              <li><Link href="/">Recently viewed</Link></li>
              <li><Link href="/">Popular this week</Link></li>
              <li><Link href="/">All Products</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="footer-categories text-white w-full sm:w-auto">
            <h1 className="section-title text-lg md:text-xl font-bold">Categories</h1>
            <ul className="category-links space-y-2">
              <li><Link href="/">Crockery</Link></li>
              <li><Link href="/">Furniture</Link></li>
              <li><Link href="/">Homeware</Link></li>
              <li><Link href="/">Plant pots</Link></li>
              <li><Link href="/">Chairs</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-company text-white w-full sm:w-auto">
            <h1 className="section-title text-lg md:text-xl font-bold">Our Company</h1>
            <ul className="company-links space-y-2">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/">Vacancies</Link></li>
              <li><Link href="/">Contact us</Link></li>
              <li><Link href="/">Privacy</Link></li>
              <li><Link href="/">Return policy</Link></li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div className="footer-mailing-list text-white w-full sm:w-auto">
            <h1 className="section-title text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className="mailing-form mt-4">
              <input
                type="text"
                placeholder="your@email.com"
                className="email-input w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md"
              />
              <button className="signup-button mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className="footer-divider bg-[#4E4D93] my-8" />

        {/* Footer Bottom Section */}
        <div className="footer-bottom flex flex-wrap justify-between items-center text-white gap-4">
          <div className="footer-copy">
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className="social-icons flex gap-4">
            <Link href="/"><FaLinkedin size={20} /></Link>
            <Link href="/"><FaFacebookSquare size={20} /></Link>
            <Link href="/"><FaInstagram size={20} /></Link>
            <Link href="/"><IoLogoSkype size={20} /></Link>
            <Link href="/"><FaTwitter size={20} /></Link>
            <Link href="/"><FaPinterest size={20} /></Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SiteFooter;

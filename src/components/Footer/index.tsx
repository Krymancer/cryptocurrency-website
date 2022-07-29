import {Component} from 'solid-js';

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'solid-icons/io';

import LogoUrl from '@assets/images/logo.svg';

import VisaUrl from '@assets/images/visa.png';
import MasterCardUrl from '@assets/images/mastercard.png';
import BitcoinUrl from '@assets/images/vbitcoinisa.png';

const Footer : Component = () => {
  return <footer class="lg:pt-24 pt-0" data-aos="fade-up" data-aos-offset="400">
    <div class="container mx-auto lg:mb-24">
      <div class="flex flex-col gap-12 lg:flex-row">
        {/* Logo */}
        <div class="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
          <a href="#">
            <img src={LogoUrl} alt="Logo" />
          </a>
        </div>
        {/* Link group */}
        <div class="flex flex-1 flex-col gap-16 lg:flex-row">
          {/* Link group */}
          <div class="text-center w-full lg:text-left">
            <div class="text-xl font-medium mb-6">Quick Links</div>
            <ul class="space-y-4 text-gray">
              <li>
                <a class="hover:text-blue transition" href="#">
                Home
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                Products
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                About
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                Features
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Link group */}
          <div class="text-center w-full lg:text-left">
            <div class="text-xl font-medium mb-6">Resources Links</div>
            <ul class="space-y-4 text-gray">
              <li>
                <a class="hover:text-blue transition" href="#">
                Download Whitepapper
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                Smart Token
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                Blockchain Explore
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                Crypto API
                </a>
              </li>
              <li>
                <a class="hover:text-blue transition" href="#">
                Interest
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Payment */}
        <div class="flex flex-col flex-1">
          <div class="lg:ml-[80px]">
            <h3 class="h3 font-medium text-center mb-10 lg:text-left">
            We accept following payment systems
            </h3>
            <div class="flex justify-center items-center gap-6">
              <img src={VisaUrl} alt="Logo" />
              <img src={MasterCardUrl} alt="Logo" />
              <img src={BitcoinUrl} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright & Social */}
    <div class="py-12">
      <div class="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* Copyright text */}
        <div>&copy; 2022 CRAPPO. All rights reserved.</div>
        {/* Social icons */}
        <div class="flex text-2xl gap-x-8">
          <a class="hover:text-blue transition" href="#">
            <IoLogoYoutube />
          </a>
          <a class="hover:text-blue transition" href="#">
            <IoLogoInstagram />
          </a>
          <a class="hover:text-blue transition" href="#">
            <IoLogoTwitter />
          </a>
          <a class="hover:text-blue transition" href="#">
            <IoLogoLinkedin />
          </a>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;

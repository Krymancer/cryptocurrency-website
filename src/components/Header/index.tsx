import {Component} from 'solid-js';
import {CgMenuRight} from 'solid-icons/cg';

import Navbar from '@components/Navbar';
import AccountButtons from '@components/AccountButtons';

interface HeaderProps {
  setNavbarMobile: (open: boolean) => void;
}

const Header : Component<HeaderProps> = (props) => {
  return <header class="py-[30px] lg:pt-[60px]" data-aos="fade-down" data-aos-delay="900" data-aos-duration="2000">
    <div class="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <a href="#">
        <img src="src/assets/images/logo.svg" alt="Logo" />
      </a>
      {/* Nav & Buttons */}
      <div class="hidden lg:flex gap-x-[55px]">
        <Navbar />
        <AccountButtons />
      </div>
      {/* Open Nav button */}
      <div class="lg:hidden cursor-pointer">
        <CgMenuRight class="text-2xl" onClick={() => props.setNavbarMobile(true)}/>
      </div>
    </div>
  </header>;
};

export default Header;

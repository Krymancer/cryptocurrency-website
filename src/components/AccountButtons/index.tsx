import {Component} from 'solid-js';

const AccountButtons : Component = () => {
  return <div class="flex items-center font-medium">
    {/* Link Button */}
    <a href="#" class="hover:text-blue transition-all duration-300">Login</a>
    {/* Separator */}
    <span class="mx-6 text-white/20 font-thin">|</span>
    {/* Register Button */}
    <button class="btn h-[52px] text-base px-8">Register</button>
  </div>;
};

export default AccountButtons;

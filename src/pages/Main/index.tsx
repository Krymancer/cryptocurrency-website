import {Component, createSignal} from 'solid-js';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '@components/Hero';
import Header from '@components/Header';
import NavbarMobile from '@components/NavbarMobile';
import Stats from '@components/Stats';
import Why from '@components/Why';

const Main : Component = () => {
  AOS.init({duration: 2500, delay: 400});

  const [navMobile, setNavMobile] = createSignal(false);

  return <div class="overflow-hidden">
    <Header setNavbarMobile={setNavMobile}/>
    <Hero />
    <div class={`${navMobile() ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
      <NavbarMobile setNavbarMobile={setNavMobile}/>
    </div>
    <Stats />
    <Why />
    <div class="h-[2000px]" />
  </div>;
};

export default Main;

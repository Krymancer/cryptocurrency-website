import {Component, createSignal} from 'solid-js';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '@components/Hero';
import Header from '@components/Header';
import NavbarMobile from '@components/NavbarMobile';
import Stats from '@components/Stats';
import Why from '@components/Why';
import Calculate from '@components/Calculate';
import Trade from '@components/Trade';
import Features from '@components/Features';
import Newsletter from '@components/Newsletter';
import Footer from '@components/Footer';

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
    <Calculate />
    <Trade />
    <Features />
    <Newsletter />
    <Footer />
  </div>;
};

export default Main;

import {Component} from 'solid-js';

import feature2Url from '@assets/images/feature-2-img.png';

const FeaturesSection2 : Component = () => {
  return <section class="py-[30px] lg:py-[120px]">
    <div class="container mx-auto">
      <div class="flex flex-col justify-end items-center lg:flex-row">
        {/* Image */}
        <div
          class="flex-1 lg:absolute lg:left-0 order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <img src={feature2Url} alt="" />
        </div>
        {/* Text */}
        <div
          class="flex-1 max-w-[456px]"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <h3 class="h3 mb-6">Detailed Statistics</h3>
          <p class="text-gray mb-8">
          View all mining related information in realtime, at any point at
          any location and decide which polls you want to mine in.
          </p>
          <button class="btn px-8 mb-6 lg:mb-0">Learn more</button>
        </div>
      </div>
    </div>
  </section>;
};

export default FeaturesSection2;

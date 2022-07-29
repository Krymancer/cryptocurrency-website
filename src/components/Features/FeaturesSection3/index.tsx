import {Component} from 'solid-js';

import feature3Url from '@assets/images/feature-3-img.png';

const FeaturesSection3 : Component = () => {
  return <section class="py-[30px] lg:py-[120px]">
    <div class="flex flex-col lg:flex-row">
      {/* Text */}
      <div
        class="max-w-[454px] mb-6 lg:mt-10"
        data-aos="fade-right"
        data-aos-offset="400"
      >
        <h3 class="h3 mb-6">
        Grow your profit and track your investments
        </h3>
        <p class="text-gray mb-8 max-w-[408px]">
        Use advanced analytical tools. Clear TradingView charts let you
        track current and historical profit investments.
        </p>
        <button class="btn px-8">Learn more</button>
      </div>
      {/* Image */}
      <div
        class="flex-1 flex justify-end"
        data-aos="fade-left"
        data-aos-offset="450"
      >
        <img src={feature3Url} alt="" />
      </div>
    </div>
  </section>;
};

export default FeaturesSection3;

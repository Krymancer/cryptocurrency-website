import {Component} from 'solid-js';

import feature1Url from '@assets/images/feature-1-img.png';

const FeatureSection1 : Component = () => {
  return <section class="pb-[30px] lg:pb-[120px] pt-0">
    <div class="flex flex-col lg:flex-row">
      {/* Text */}
      <div
        class="max-w-[454px] mb-6 lg:mt-10"
        data-aos="fade-right"
        data-aos-offset="400"
      >
        <h3 class="h3 mb-6">Invest Smart</h3>
        <p class="text-gray mb-8">
        Get full statistic information about the behavior of buyers and
        sellers will help you to make the decision.
        </p>
        <button class="btn px-8">Learn more</button>
      </div>
      {/* Image */}
      <div
        class="flex-1 flex justify-end"
        data-aos="fade-left"
        data-aos-offset="400"
      >
        <img src={feature1Url} alt="" />
      </div>
    </div>
  </section>;
};

export default FeatureSection1;

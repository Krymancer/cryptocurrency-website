import {Component} from 'solid-js';

const Why : Component = () => {
  return <section class="section">
    <div class="container mx-auto">
      <div class="flex flex-col items-center gap-x-8 lg:flex-row">
        {/* Image */}
        <div class="order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-offset='400'>
          <img src="src/assets/images/why-img.png" alt="Why" />
        </div>
        {/* Text */}
        <div class="order-1 lg:order-2 max-w-[480px]"
          data-aos="fade-left"
          data-aos-offset='400' >
          <h2 class="section-title ">Why you should chose CRAPPO</h2>
          <p class="section-subtitle">Experience the next generation cryptocurrency platform. No financial borders, extra fees and fake reviews.</p>
          <button class="btn px-6">Learn more</button>
        </div>
      </div>
    </div>
  </section>;
};

export default Why;

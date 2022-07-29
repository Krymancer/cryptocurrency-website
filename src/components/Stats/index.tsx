import {Component} from 'solid-js';
import {HiSolidChartBar, HiSolidUser, HiSolidGlobe} from 'solid-icons/hi';

const Stats : Component = () => {
  return <section class="pt-24" data-aos="fade-up" data-aos-delay="1200">
    <div class="container mx-auto">
      <div class="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
        {/* Item */}
        <div class="flex items-center gap-x-6">
          {/* Item Icons */}
          <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
            <HiSolidChartBar />
          </div>
          {/* Item Text */}
          <div>
            <div class="text-2xl font-bold lg:text-[40px] lg:mb-2">$30B</div>
            <div class="text-gray">Digital Currency Exchanged</div>
          </div>
        </div>
        {/* Item */}
        <div class="flex items-center gap-x-6">
          {/* Item Icons */}
          <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
            <HiSolidUser />
          </div>
          {/* Item Text */}
          <div>
            <div class="text-2xl font-bold lg:text-[40px] lg:mb-2">$10M+</div>
            <div class="text-gray">Trusted Wallets Investor</div>
          </div>
        </div>
        {/* Item */}
        <div class="flex items-center gap-x-6">
          {/* Item Icons */}
          <div class="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
            <HiSolidGlobe />
          </div>
          {/* Item Text */}
          <div>
            <div class="text-2xl font-bold lg:text-[40px] lg:mb-2">195</div>
            <div class="text-gray">Countries Supported</div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Stats;

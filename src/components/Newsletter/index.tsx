import {Component} from 'solid-js';
import NewsLetterForm from './NewsLetterForm';

const NewsLetter : Component = () => {
  return <section class="py-[40px] lg:py-[88px] bg-newsletter bg-cover">
    <div class="container mx-auto">
      <div
        class="flex flex-col lg:flex-row items-center justify-between bg-blue p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]"
        data-aos="fade-up"
        data-aos-offset="400"
      >
        {/* Text */}
        <div class="flex-1 w-full">
          <h3 class="h3 mb-4">Start mining now</h3>
          <p class="max-w-[348px] mb-8">
          Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <NewsLetterForm />
      </div>
    </div>
  </section>;
};

export default NewsLetter;

import {Component} from 'solid-js';

const NewsLetterForm : Component = () => {
  return <form class="flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10">
    <input
      class="input text-base text-white placeholder:text-white placeholder:text-base"
      type="text"
      placeholder="Enter your email"
    />
    <button class="btn bg-white text-darkblue px-8 hover:bg-white/70">
    Subscribe
    </button>
  </form>;
};

export default NewsLetterForm;

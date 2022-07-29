import {Component} from 'solid-js';

const CalculateForm : Component = () => {
  return <div
    class='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary'
    data-aos='fade-up'
    data-aos-offset='500'
  >
    {/* Form */}
    <form class='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
      <input
        class='input placeholder:text-darkblue'
        type='text'
        placeholder='Enter your hash rate'
      />
      <select class='select'>
        <option value=''>TH/s</option>
        <option value=''>H/s</option>
        <option value=''>KH/s</option>
        <option value=''>MH/s</option>
        <option value=''>GH/s</option>
      </select>
      {/* Button */}
      <button class='btn text-white px-8 flex self-start'>
          Calculate
      </button>
    </form>
    {/* Text */}
    <div class='mt-24'>
      <div class='text-blue font-medium mb-4'>
          ESTIMATED 24 HOUR REVENUE:
      </div>
      <div class='text-[32px] font-bold mb-3'>
          0.055 130 59 ETH <span class='text-blue'>($1275)</span>
      </div>
      <div class='text-gray-500 tracking-[1%]'>
          Revenue will change based on mining difficulty and Ethereum price.
      </div>
    </div>
  </div>;
};

export default CalculateForm;

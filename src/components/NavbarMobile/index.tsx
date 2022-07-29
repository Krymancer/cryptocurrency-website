import {CgClose} from 'solid-icons/cg';
import {Component, For} from 'solid-js';

import {navData} from '@api/index';

interface NavbarMobileProps {
  setNavbarMobile: (open: boolean) => void;
}

const NavbarMobile : Component<NavbarMobileProps> = (props) => {
  return <nav class="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center">
    {/* Close Button */}
    <div class="absolute top-2 left-2 cursor-pointer">
      <CgClose class="text-3xl" onClick={() => props.setNavbarMobile(false)}/>
    </div>
    {/* Menu List */}
    <ul class="text-xl flex flex-col gap-y-8">
      <For each={navData} fallback={null} >
        {(item) => (
          <li>
            <a href="#">{item.name}</a>
          </li>
        )}
      </For>
    </ul>
  </nav>;
};

export default NavbarMobile;

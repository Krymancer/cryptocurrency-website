import {Component, For} from 'solid-js';

import {navData} from '@api/index';

const Navbar : Component = () => {
  return <nav class="flex items-center">
    <ul class="flex items-center gap-x-8 ">
      <For each={navData} fallback={null} >
        {(item) => (
          <li class="border-b-2 border-transparent hover:border-blue transition-all duration-300">
            <a href="#">{item.name}</a>
          </li>
        )}
      </For>
    </ul>
  </nav>;
};

export default Navbar;

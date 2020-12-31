<template>
<div class="mx-auto max-w-screen-xl">
  <div style="grid-template-columns: 1fr 2fr 3fr;" class="grid gap-4 m-4">
    <img
      src="http://valleygrowlers.com/wp-content/uploads/2013/11/clean_line_circle_logo-300x300.jpg"
    />
    <div
      class="text-2xl"
    >
      Come join us every day starting at noon… Valley Growlers would love to have you as a guest. Come have a pint or take a growler or crowler to go....
    </div>
    <Search />
  </div>
  <div style="grid-template-columns: 3fr 1fr;" class="grid gap-4 m-4">
    <div>
      <img
        src="http://valleygrowlers.com/wp-content/uploads/2013/11/ValleyGrowlers12.png"
        style="object-fit: cover; width: 100%; max-height: 200px;"
      />
      <div
        class="m-3 text-xl"
      >
        We also like 
        <span
          class="font-bold"
        >
          {{filteredTaps}}
        </span>
      </div>
      <Taps />
    </div>
    <div>
      <div
        class="font-bold text-2xl mb-3"
      >
        What's In Your Growler
      </div>
      <Cart />
      <div
        class="mt-3"
      >
        We have growlers and cans available if you don't have them already.
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component } from "Vue";
import Taps from 'growlers/Taps';
import Search from 'growlers/Search';
import Cart from 'growlers/Cart';
import store from 'growlers/store';

export default {
  components: {
    Search,
    Taps,
    Cart,
  },
  computed: {
    filteredTaps: {
      get() {
        return store.filteredTaps.slice(0, 3).map(({ beverageName }: { beverageName: string }) => beverageName).join(', ');
      },
      set() {
      }
    }
  }
}
</script>
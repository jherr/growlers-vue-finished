<template>
  <div :class="border">
    <div
      v-for="tap in filteredTaps"
      :key="tap.beverageName"
      style="grid-template-columns: 1fr 5fr"
      class="grid grid-gap-3 mb-4 p-3 rounded-lg border border-gray-300"
    >
      <img
        :src="tap.logo"
        class="w-24 h-24 rounded-3xl mx-auto"
      />
      <div>
        <p class="text-2xl">
          <span class="font-bold">{{tap.producerName}}</span> {{tap.beverageName}}
        </p>
        <p class="text-lg">
          {{tap.beverageStyle}} - 
          {{tap.abv}}% {{tap.ibu}} IBU
        </p>
        <div class="text-right">
          <button
            type="button"
            class="px-6 py-2 rounded-md font-semibold bg-blue-500 text-white focus:outline-black"
            @click="addToCart(tap)"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store, { addToCart } from "../store";
import { MFE_BORDER } from '../constants';

export default {
  computed: {
    border: () => MFE_BORDER,
    filteredTaps: {
      get() { 
        return store.filteredTaps;
      }
    }
  },
  methods: {
    addToCart(tap) {
      addToCart(tap)
    }
  }
}
</script>
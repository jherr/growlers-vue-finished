<template>
  <div :class="border">
    <div
      v-for="tap in cart"
      :key="tap.beverageName"
      class="flex mb-3"
    >
      <img
        :src="tap.logo"
        class="flex-shrink w-24 h-24 rounded-3xl mx-auto"
      />
      <div class="flex-grow ml-3 text-xl">
        <p class="font-bold">{{tap.producerName}}</p>
        <p>{{tap.beverageName}}</p>
      </div>
    </div>
    <div class="text-right">
      <button
        type="button"
        class="px-6 py-2 rounded-md font-semibold bg-green-500 text-white focus:outline-black"
        @click="checkout"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import store, { addToCart } from "../store";
import { MFE_BORDER } from '../constants';

export default {
  computed: {
    border: () => MFE_BORDER,
    cart: {
      get() { 
        return store.cart;
      }
    }
  },
  methods: {
    addToCart(tap) {
      addToCart(tap)
    },
    checkout() {
      store.cart = [];
    }
  }
}
</script>
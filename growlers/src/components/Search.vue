<template>
  <div :class="border">
    <h1 class="mb-2 font-bold text-2xl">Name</h1>
    <input
      v-model="searchText"
      class="focus:outline-none focus:ring focus:border-blue-300 px-4 py-3 leading-5 border rounded-md w-full"
    >
    <h1 class="mb-2 font-bold text-2xl">Alcohol</h1>
    <input
      type="range"
      v-model="alcoholLimit"
      min="0"
      max="15"
      class="w-full"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store, { setAlcoholLimit, setSearchText } from "../store";
import { MFE_BORDER } from '../constants';

export default defineComponent({
  computed: {
    border: () => MFE_BORDER,
    searchText: {
      get() { 
        return store.searchText;
      },
      set(value) {
        setSearchText(value);
      }
    },
    alcoholLimit: {
      get() { 
        return store.alcoholLimit;
      },
      set(value) {
        setAlcoholLimit(value);
      }
    }
  }
})
</script>
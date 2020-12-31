<template>
<div style="grid-template-columns: 1fr 3fr 1fr;" class="grid gap-4 m-4">
  <div class="text-3xl font-bold text-center">Search</div>
  <div class="text-3xl font-bold text-center">Taps</div>
  <div class="text-3xl font-bold text-center">Cart</div>
  <Search />
  <Taps />
  <Cart />
</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Taps from './components/Taps';
  import Search from './components/Search';
  import Cart from './components/Cart';

  export default defineComponent({
    components: {
      Search,
      Taps,
      Cart,
    }
  })
</script>
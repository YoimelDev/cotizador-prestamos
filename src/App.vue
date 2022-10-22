<script setup>
import { reactive, ref } from "@vue/reactivity";
import Header from "./components/Header.vue";

const quantity = ref(0);

function handleChange(e) {
  quantity.value = e.target.value;
}
</script>

<template>
  <div class="my-20 p-10 max-w-lg mx-auto bg-white shadow">
    <Header />

    <div class="my-5">
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        @input="handleChange"
      />

      <p>$ {{ quantity }}</p>
    </div>
  </div>
</template>


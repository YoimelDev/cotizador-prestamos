<script setup>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import { calculateTotalPaid } from "./helpers";

const quantity = ref(10000);
const months = ref(24);
const MIN = 0;
const MAX = 20000;
const STEP = 100;

const formatMoney = computed(() => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(quantity.value);
});

const handleChandeDecrement = () => {
  const value = quantity.value - STEP;
  if (value < MIN) {
    alert("Cantidad no valid");
    return;
  }

  quantity.value = value;
};

const handleChandeIncrement = () => {
  const value = quantity.value + STEP;
  if (value > MAX) {
    alert("Cantidad no valid");
    return;
  }

  quantity.value = value;
};
</script>

<template>
  <div class="my-20 p-10 max-w-lg mx-auto bg-white shadow">
    <Header />

    <div class="flex justify-between mt-10">
      <Button :operetor="'-'" @fn="handleChandeDecrement" />

      <Button :operetor="'+'" @fn="handleChandeIncrement" />
    </div>

    <div class="my-5">
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        :min="MIN"
        :max="MAX"
        :step="STEP"
        v-model.number="quantity"
      />

      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {{ formatMoney }}
      </p>

      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span class="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        class="
          w-full
          p-2
          mt-5
          bg-white
          border border-gray-300
          rounded-lg
          text-center text-xl
          font-bold
          text-gray-600
        "
        v-model.number="months"
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
    </div>

    <section class="my-5 space-y-3 bg-gray-50 p-5">
      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span class="text-indigo-600">de pagos</span>
      </h2>

      <p class="text-xl text-gray-500 text-center font-bold">
        {{ months }} Meses
      </p>
      <p class="text-xl text-gray-500 text-center font-bold">Total a pagar:</p>
      <p class="text-xl text-gray-500 text-center font-bold">Mensuales:</p>
    </section>
  </div>
</template>


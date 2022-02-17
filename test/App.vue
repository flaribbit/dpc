<template>
  <h1>DPC</h1>
  <h2>Extra O</h2>
  <TDPC v-for="i in extra_O" v-bind="i" />
  <h2>Extra T</h2>
  <TDPC v-for="i in extra_T" v-bind="i" />
  <h2>Extra S</h2>
  <TDPC v-for="i in extra_S" v-bind="i" />
  <h2>Extra Z</h2>
  <TDPC v-for="i in extra_Z" v-bind="i" />
</template>

<script setup lang="ts">
import TDPC from "../src/TDPC.vue";
import { extra_O, extra_T, extra_S, extra_Z } from "../src/data";
</script>

<style>
.vt-field {
  background-color: #f3f3ed;
  border-radius: 4px;
}
@media (max-width: 420px) {
  .fumen-item {
    width: calc(50% - 4px);
  }
  .fumen-item .vt-field {
    width: 100%;
  }
}
</style>

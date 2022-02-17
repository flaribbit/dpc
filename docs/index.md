---
title: DPC
---

## Extra O

<TDPC v-for="i in extra_O" v-bind="i" />

## Extra T

<TDPC v-for="i in extra_T" v-bind="i" />

## Extra S

<TDPC v-for="i in extra_S" v-bind="i" />

## Extra Z

<TDPC v-for="i in extra_Z" v-bind="i" />

<!-- end -->

<script setup>
import TDPC from "../src/TDPC.vue";
import { extra_O, extra_T, extra_S, extra_Z } from "../src/data";
</script>

<style>
.container {
  max-width: 50em !important;
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

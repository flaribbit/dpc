<template>
  <div class="fumen-list">
    <div class="fumen-item" v-for="p,i in pages">
      <VTetrisField :page="p" :height="props.height" :cell_size="props.cell_size" :mirror="props.mirror"/>
      <div>({{ i + 1 }}) {{ p.comment }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { decoder } from "tetris-fumen"
import VTetrisField from "./VTetrisField.vue"
const props = defineProps({
  fumen: { type: String, default: "v115@vhAAgH" },
  height: { type: Number, default: 20 },
  cell_size: { type: Number, default: 20 },
  mirror: { type: Boolean, default: false },
})
const pages = ref(decoder.decode(props.fumen))
</script>

<style>
.fumen-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

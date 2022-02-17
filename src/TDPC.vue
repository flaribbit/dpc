<template>
  <h3>{{ props.name }}</h3>
  <TFumenList
    :fumen="merge_pages([props.build_fumen, props.field_fumen])"
    :height="6"
    :cell_size="18"
    :mirror="props.mirror"
  />
  <TFumenList :fumen="props.solutions_fumen" :height="5" :cell_size="18" :mirror="props.mirror" />
</template>
<script setup lang="ts">
import TFumenList from "./TFumenList.vue"
import { merge_pages } from "./fumen"
const props = withDefaults(defineProps<{
  name: string,
  build_fumen: string,
  field_fumen: string,
  solutions_fumen: string,
  mirror?: boolean,
}>(), { mirror: false })

</script>

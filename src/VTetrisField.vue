<template>
  <canvas class="vt-field" ref="canvas" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, PropType } from "vue"
import type { Page } from "tetris-fumen"
// color constants
const colors = {
  "T": ["#b451ac", "#e56add"],
  "I": ["#41afde", "#43d3ff"],
  "O": ["#f7d33e", "#fff952"],
  "L": ["#ef9535", "#ffbf60"],
  "J": ["#1983bf", "#1ba6f9"],
  "S": ["#66c65c", "#88ee86"],
  "Z": ["#ef624d", "#ff9484"],
  "X": ["#686868", "#949494"],
  "_": ["#686868", "#949494"],
}

const mirrored_colors = {
  "T": ["#b451ac", "#e56add"],
  "I": ["#41afde", "#43d3ff"],
  "O": ["#f7d33e", "#fff952"],
  "J": ["#ef9535", "#ffbf60"],
  "L": ["#1983bf", "#1ba6f9"],
  "Z": ["#66c65c", "#88ee86"],
  "S": ["#ef624d", "#ff9484"],
  "X": ["#686868", "#949494"],
  "_": ["#686868", "#949494"],
}

function get_color()  {
  return props.mirror ? mirrored_colors : colors
}

const props = defineProps({
  page: { type: Object, default: null },
  height: { type: Number, default: 20 },
  cell_size: { type: Number, default: 20 },
  mirror: { type: Boolean, default: false },
})
// variables
var ctx: CanvasRenderingContext2D | null = null
const canvas = ref<HTMLCanvasElement>()
// draw game field
function drawField(ctx: CanvasRenderingContext2D, page: Page) {
  const field = page.field
  const height = props.height - 1
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 10; j++) {
      let idx = props.mirror ? j : 9 - j
      var piece = field.at(idx, i)
      if (piece != "_") {
        ctx.fillStyle = get_color()[piece][0]
        ctx.fillRect(j * props.cell_size, (height - i) * props.cell_size, props.cell_size, props.cell_size)
        ctx.fillStyle = get_color()[piece][1]
        ctx.fillRect(j * props.cell_size, (height - i) * props.cell_size, props.cell_size, -props.cell_size / 5)
      }
    }
  }
  if (!page.operation) return
  const mino = page.mino()
  const pos = mino.positions()
  ctx.lineWidth = 2
  ctx.lineJoin = "round"
  ctx.strokeStyle = get_color()[mino.type][0]
  for (var i = 0; i < 4; i++) {
    ctx.strokeRect(pos[i].x * props.cell_size + props.cell_size / 10, (height - pos[i].y) * props.cell_size + props.cell_size / 10, props.cell_size * 0.8, props.cell_size * 0.8)
    // ctx.fillStyle = colors[mino.type][0] + "7f"
    // ctx.fillRect(pos[i].x * 20, (height - pos[i].y) * 20, 20, 20)
    // if (!pos.find(p => p.x == pos[i].x && p.y == pos[i].y + 1) && field.at(pos[i].x, pos[i].y + 1) == "_") {
    //   ctx.fillStyle = colors[mino.type][1] + "7f"
    //   ctx.fillRect(pos[i].x * 20, (height - pos[i].y) * 20, 20, -4)
    // }
  }
}
onMounted(() => {
  if (!canvas.value) return
  canvas.value.width = 10 * props.cell_size
  canvas.value.height = props.height * props.cell_size
  ctx = canvas.value.getContext("2d")
  if (!ctx) return
  drawField(ctx, props.page as Page)
})
watch(props, () => {
  if (!ctx) return
  ctx.canvas.height = props.height * props.cell_size
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawField(ctx, props.page as Page)
})
</script>

<style>
.vt-field {
  image-rendering: pixelated;
}
</style>

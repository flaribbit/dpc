import { decoder, encoder } from "tetris-fumen"
import { EncodePages } from "tetris-fumen/lib/encoder"

function mirror_name(name: string): string {
  const mirror_map = (c: string) => {
    switch (c) {
      case "Z":
        return "S"
      case "S":
        return "Z"
      case "L":
        return "J"
      case "J":
        return "L"
      default:
        return c
    }
  }

  return [...name].map(x => mirror_map(x)).join('')
}

function merge_pages(pages: Array<string>): string {
  const t = pages.map(x => decoder.decode(x)).flat()
  const res: EncodePages = t.map(x => { return { field: x.field } })
  return encoder.encode(res)
}

function mirror_comments(fumen: string): string {
  const t = decoder.decode(fumen)
  const res: EncodePages = t.map(x => { return { field: x.field, comment: mirror_name(x.comment) } })
  return encoder.encode(res)
}

export { merge_pages, mirror_comments, mirror_name }

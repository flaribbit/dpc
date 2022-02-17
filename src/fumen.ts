import { Page, decoder, encoder } from "tetris-fumen"
import { EncodePages } from "tetris-fumen/lib/encoder"

function merge_pages(pages: Array<string>): string {
  const t = pages.map(x => decoder.decode(x)).flat()
  const res: EncodePages = t.map(x => { return { field: x.field } })
  return encoder.encode(res)
}

function mirror_field(fumen: string): string {
  const t = decoder.decode(fumen)
  const res: EncodePages = t.map(x => { return { field: x.field, flags: { mirror: true } } })
  // console.log(t[0].field.str())
  // console.log(decoder.decode(encoder.encode(res))[0].field.str())
  return encoder.encode(res)
}

export { merge_pages, mirror_field }

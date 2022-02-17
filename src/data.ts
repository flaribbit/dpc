import { merge_pages, mirror_comments, mirror_name } from "./fumen"
interface DPC {
  name: string,
  build_fumen: string,
  field_fumen: string,
  solutions_fumen: string,
  mirror?: boolean
}

function mirror_DPC(d: DPC): DPC {
  let t = { ...d }
  t.name = mirror_name(t.name)
  t.solutions_fumen = mirror_comments(t.solutions_fumen)
  t.mirror = !!!t.mirror
  return t
}

const extra_O: Array<DPC> = [
  {
    name: "O -> J",
    build_fumen: "v115@1gAtGewhBtGewhAtCehli0whRpAeR4glRpg0whRpR4?AeglRpKeAgWaAFLDmClcJSAVDEHBEooRBPoAVBTH8LCqXBA?A",
    field_fumen: "v115@JhA8GeC8GeE8AeC8KeAgH",
    solutions_fumen: "v115@9gRphlywAtg0whRpA8glQ4wwBtg0whC8glR4Ath0wh?E8Q4C8whJeAgWUAYEoABgngHBg3CwBgtjPCaHExC9gRpBty?wR4whRpA8BtwwR4glwhC8i0ilwhE8g0C8whJeAAPUAYBIOB?gngHBg3CwBg9TPCTnjxC9gRphlBti0whRpA8glQ4Btwwg0w?hC8glR4ywwhE8Q4C8whJeAAPUA48nABgngHBg3CwBg99tCa?HUPC9gRpywzhglRpA8wwR4AtilC8R4Bti0E8AtC8g0JeAAP?UAW4nABgngHBg3CwBAfLuCMX9wC9gRpBtzhR4RpA8Btywhl?C8i0wwR4glE8g0C8glJeAAPUA1CwKBgngHBg3CwBAi/wCvH?MMC9gRpBtzhhlRpA8BtywR4C8i0wwR4glE8g0C8glJeAAPU?A1CwKBgngHBg3CwBgs/wCvX8LC9gRpBtR4zhRpA8Bth0wwh?lC8R4g0ywglE8g0C8glJeAAPUAT4f2AgngHBg3CwBACmPCv?HMMC",
  },
  {
    name: "J -> O",
    build_fumen: "v115@0gAtHeBtGewhAtCehlRpg0whRpAeR4glRpg0whRpR4?AeglAeh0whJeAgWaAFLDmClcJSAVDEHBEooRBToAVBPeHgC?sXBAA",
    field_fumen: "v115@IhA8HeB8GeE8AeA8AeC8JeAgH",
    solutions_fumen: "v115@9gilywzhglA8RpwwAth0R4B8RpBtg0R4E8AtA8g0C8?JeAgWUAY4HOBgngHBg3CwBgsPFDP+VWC9gilzhR4AtglA8R?ph0R4BtB8Rpg0ywAtE8g0A8wwC8JeAAPUAY4f2AgngHBg3C?wBA/dgCad9VC9gilAtRpzhglA8BtRph0R4B8Atywg0R4E8w?wA8g0C8JeAAPUA2FIOBgngHBg3CwBgs/wCvn9VC9gilAtRp?whg0R4glA8BtRpwhi0B8AtywwhR4E8wwA8whC8JeAAPUAUB?IOBgngHBg3CwBg9lPCvXstC9gilywwhg0R4glA8RpwwAtwh?i0B8RpBtwhR4E8AtA8whC8JeAAPUAU4f2AgngHBg3CwBgdr?gCqOstC9gilR4Ath0RpglA8R4Btg0wwRpB8zhywE8AtA8g0?C8JeAAPUAT4f2AgngHBg3CwBAeNPCa3TWC9gilwwzhRpglA?8ywQ4BtRpB8i0R4BtE8g0A8Q4C8JeAAPUAyC4UBgngHBg3C?wBgszPCve9VC9gilQ4ywAtRpglA8g0R4wwBtRpB8i0zhE8Q?4A8AtC8JeAAPUAy/f2AgngHBg3CwBgdPFDTHWWC",
  }
]

const extra_T: Array<DPC> = [
  {
    name: "All",
    build_fumen: merge_pages([
      "v115@3gglGeRpglDewhAeAtRphlBeg0whBtR4wwCeg0whAt?R4ywAeh0whJeAgWaAFLDmClcJSAVDEHBEooRBUoAVBTePFD?vCBAA",
      "v115@3gglGeR4glDewhAeR4AthlBeg0whRpBtwwCeg0whRp?AtywAeh0whJeAgWaAFLDmClcJSAVDEHBEooRBUoAVBPePFD?zCBAA"
    ]),
    field_fumen: "v115@LhA8GeC8DeA8AeE8BeB8JeAgH",
    solutions_fumen: "v115@9gwhh0R4Rpilwhg0R4A8Rpywwhg0C8BtglwwA8whE8?BtB8JeAgWUAWBIOBgngHBg3CwBAn9wCPt/VC9gwhh0R4Rpy?wwhg0R4A8Rpilwhg0C8BtglwwA8whE8BtB8JeAAPUAWBIOB?gngHBg3CwBAn9VCPt/wC9gilR4h0ywglAtR4A8g0zhBtC8g?0RpwwA8AtE8RpB8JeAAPUAV+f2AgngHBg3CwBgmbMCKNExC?9gywR4zhAth0R4A8ilBtg0wwC8glRpAtA8g0E8RpB8JeAAP?UAzFgRBgngHBg3CwBgmPFDMNOMC9gilR4i0RpglAtR4A8yw?RpBtC8zhA8AtE8wwg0B8JeAAPUATBIOBgngHBg3CwBgdjxC?PNUPC9gh0ywBtglRpg0R4wwA8ilRpR4C8zhA8g0E8BtB8Je?AAPUATBIOBgngHBg3CwBgtjPCvCmFD9gwhh0R4Btilwhg0R?4A8Rpywwhg0C8RpglwwA8whE8BtB8JeAAPUASEwKBgngHBg?3CwBgW9wCz/TFD9gwhh0R4BtwwRpwhg0R4A8ilRpwhg0C8g?lywA8whE8BtB8JeAAPUASEwKBgngHBg3CwBgtKWCz/lFD9g?h0ywzhAtg0R4wwA8ilBtR4C8glRpAtA8g0E8RpB8JeAAPUA?SBIOBgngHBg3CwBg2jFDsP9wC9gilR4zhAtRpR4A8i0BtRp?C8ywAtA8glE8wwg0B8JeAAPUAx8nABgngHBg3CwBA+aFDKN?8LC",
  },
]

const extra_S: Array<DPC> = [
  {
    name: "O -> S",
    build_fumen: "v115@6gQ4IeR4whQ4hlh0CeQ4whR4glg0BtAeRpwhAeQ4gl?g0AeBtRpwhJeAgWaAFLDmClcJSAVDEHBEooRBPoAVBaentC?MNBAA",
    field_fumen: "v115@OhA8IeC8AeC8AeE8JeAgH",
    solutions_fumen: "v115@9gwhglQ4ywh0RpwhglR4wwAtg0A8RpwhhlQ4Btg0C8?whC8AtE8JeAgWUAYEoABgngHBg3CwBAnFgCqyTxC9gwhBty?wR4Rpwhg0BtwwR4A8Rpwhi0ilC8whC8glE8JeAAPUAYBIOB?gngHBg3CwBAi3LCPtjxC9gwhilR4h0RpwhglwwR4Atg0A8R?pwhywBtg0C8whC8AtE8JeAAPUA48nABgngHBg3CwBAn9wCv?vTWC9gg0zhywRpi0Q4BtwwA8RpilR4BtC8glC8Q4E8JeAAP?UAW4nABgngHBg3CwBAXMgCq+LMC9gBtzhR4Rph0ywR4A8Rp?g0BtwwilC8g0C8glE8JeAAPUA1CwKBgngHBg3CwBAiHgCzu?bMC9gh0zhR4RpBtywR4A8Rpg0BtwwilC8g0C8glE8JeAAPU?A1CwKBgngHBg3CwBAirgCzu3LC9gzhBtR4Rph0wwhlR4A8R?pg0ywglBtC8g0C8glE8JeAAPUAT4f2AgngHBg3CwBACmPCP?tbMC",
  },
  {
    name: "S -> O",
    build_fumen: "v115@2gRpEewhBeRpEewhCeR4Bthlwhg0AeT4Btglwhi0R4?CeglJeAgWaAFLDmClcJSAVDEHBEooRBToAVBqiLuCJHBAA",
    field_fumen: "v115@KhB8EeA8BeB8EeF8CeA8JeAgH",
    solutions_fumen: "v115@9gRpg0zhywRpg0B8Q4hlwwAtA8h0B8R4glBtF8Q4gl?AtA8JeAgWUAW7HOBgngHBg3CwBAXUPCv+LMC9gQ4hlzhywR?4glB8Rpg0wwAtA8Q4glB8Rpg0BtF8h0AtA8JeAAPUA25/DB?gngHBg3CwBA3HgCzCOMC9gili0zhglRpB8g0wwR4AtA8RpB?8ywBtF8R4AtA8JeAAPUA25nABgngHBg3CwBAXegCTe/VC9g?i0zhwwhlBtg0B8Q4ywglA8BtB8R4RpglF8Q4RpA8JeAAPUA?VE4UBgngHBg3CwBg2jFD0SNPC9gi0zhglRpBtg0B8ilRpA8?BtB8ywR4F8wwR4A8JeAAPUAV+f2AgngHBg3CwBgMmFDvSNP?C9gilzhi0glRpB8Q4Btwwg0A8RpB8R4ywF8Q4BtA8JeAAPU?A0FYHBgngHBg3CwBA+bgC6P9VC9gQ4hli0zhR4glB8g0BtR?pA8Q4glB8ywRpF8wwBtA8JeAAPUATE4UBgngHBg3CwBgG+t?CsnNPC9gRpg0zhywRpg0B8Q4BtwwglA8h0B8R4ilF8Q4BtA?8JeAAPUAzCYHBgngHBg3CwBAyjPCaHOMC9gi0zhglR4Btg0?B8ilRpA8BtB8ywRpF8wwR4A8JeAAPUATBgRBgngHBg3CwBg?GmFDMentC9gi0zhQ4hlBtg0B8RpR4glA8BtB8RpwwQ4glF8?ywA8JeAAPUAz5P9AgngHBg3CwBA+aFDzSNPC9gQ4hlzhi0R?4glB8RpBtg0A8Q4glB8RpwwBtF8ywA8JeAAPUAz5P9AgngH?Bg3CwBAurgCzi3LC9gi0zhR4glBtg0B8RpilA8BtB8RpywF?8R4wwA8JeAAPUAT4f2AgngHBg3CwBA+aFDMentC9gBtglzh?ywilB8Rpi0A8BtB8RpR4g0F8R4wwA8JeAAPUASEgRBgngHB?g3CwBg8aPCsXOMC9gQ4hlzhywR4glB8i0RpA8Q4glB8Btg0?RpF8BtwwA8JeAAPUASB4UBgngHBg3CwBAHbPCzCOMC9gi0z?hywBtg0B8Q4hlRpA8BtB8R4glRpF8Q4glwwA8JeAAPUASB4?UBgngHBg3CwBg2TWCae/wC9gi0zhywBtg0B8RpR4glA8BtB?8RpilF8R4wwA8JeAAPUAS73UBgngHBg3CwBAyaFDTe/wC9g?i0zhAtR4ywB8ilRpA8wwg0B8glBtRpF8AtR4A8JeAAPUAS4?f2AgngHBg3CwBgGExC6vLMC9gywzhAtR4i0B8ilRpA8wwg0?B8glBtRpF8AtR4A8JeAAPUAS4f2AgngHBg3CwBgGUPC6+LM?C9gBtglzhRpg0ilB8Q4ywg0A8BtB8R4wwh0F8Q4RpA8JeAA?PUAx8fRBgngHBg3CwBgs/wCsHDMC9gQ4hli0BtRpR4glB8g?0zhA8Q4glB8ywRpF8wwBtA8JeAAPUAR7/DBgngHBg3CwBAe?ltCsvaFD9gBtgli0zhilB8g0R4RpA8BtB8R4wwRpF8ywA8J?eAAPUAR7P9AgngHBg3CwBA+ytCMePFD9gi0zhAtRpywB8il?RpA8wwg0B8glBtR4F8AtR4A8JeAAPTAZlvAAFrvAAlsKBAT?HExC6PdBA",
  }
]

const extra_Z = extra_S.map(x => mirror_DPC(x))

const extra_I: Array<DPC> = [

]

const extra_L: Array<DPC> = [

]

const extra_J = extra_L.map(x => mirror_DPC(x))

export { DPC, extra_O, extra_T, extra_S, extra_Z, extra_J, extra_L, extra_I, mirror_name }

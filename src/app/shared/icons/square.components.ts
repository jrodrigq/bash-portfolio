import { Component } from "@angular/core";

@Component({
  selector: "svg-square",
  template: `<svg
    width="22"
    height="22"
    viewBox="0 0 21 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-square text-white text-[12px]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
    />
  </svg>`,
})
export class SvgSquareComponent {}

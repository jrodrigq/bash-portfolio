import { Component, Input } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: `<span class="text-gray-400 font-semibold">{{ msg }}</span>`,
})
export class NotFoundComponent {
  msg: string = "bash: command not found";
}

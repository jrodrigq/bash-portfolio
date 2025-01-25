import { Component, Input } from "@angular/core";
import { LsComponent } from "src/app/commands/ls/ls.component";
import { NotFoundComponent } from "src/app/commands/not-found/not-found.component";
import { WhoamiComponent } from "src/app/commands/whoami/whoami.component";
import { CmdHistory } from "src/app/shared/interfaces/cmdHistory.interface";

@Component({
  selector: "app-cmd-input",
  templateUrl: "./cmd-input.component.html",
})
export class CmdInputComponent {
  @Input() user: string = "";
  inputCmd: string = "";
  cmdHistory: CmdHistory[] = [];

  constructor() {}
  executeCmd(): void {
    const command = this.inputCmd.trim().toLowerCase();
    const component = this.renderComponent(command);
    component ? this.cmdHistory.push({ command, component }) : null;
    this.inputCmd = "";
    this.scrollToInput();
  }

  scrollToInput() {
    setTimeout(() => {
      const element = document.getElementById("inputCmd")!;
      element.scrollIntoView();
    }, 0);
  }

  renderComponent(command: string) {
    switch (command) {
      case "cat whoami.txt":
        return WhoamiComponent;
      case "ls":
        return LsComponent;
      case "clear":
        this.cmdHistory = [];
        return null;
      default:
        return NotFoundComponent;
    }
  }
}

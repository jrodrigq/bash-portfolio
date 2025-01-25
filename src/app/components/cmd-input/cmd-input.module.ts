import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CmdInputComponent } from "./cmd-input.component";
import { FormsModule } from "@angular/forms";
import { WhoamiModule } from "../../commands/whoami/whoami.module";

@NgModule({
  declarations: [CmdInputComponent],
  exports: [CmdInputComponent],
  imports: [CommonModule, FormsModule, WhoamiModule],
  providers: [],
})
export class CmdInputModule {}

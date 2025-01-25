import { Component, Input } from "@angular/core";
import { CmdListing } from "src/app/shared/interfaces/cmdListing.interface";
@Component({
  selector: "app-ls",
  templateUrl: "./ls.component.html",
})
export class LsComponent {
  cmdList: CmdListing[] = [
    { name: "whoami.txt", isFolder: false },
    { name: "certifications", isFolder: true },
    { name: "socials", isFolder: true },
  ];

  constructor() {}
}

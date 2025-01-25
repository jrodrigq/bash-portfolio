import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadImageModule } from "./components/load-image/load-image.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CmdInputModule } from "./components/cmd-input/cmd-input.module";
import { WhoamiModule } from "./commands/whoami/whoami.module";
import { NotFoundModule } from "./commands/not-found/not-found.module";
import { SvgTerminalComponent } from "./shared/icons/terminal.components";
import { SvgSquareComponent } from "./shared/icons/square.components";
import { SvgMinusComponent } from "./shared/icons/minus.components";
import { SvgXComponent } from "./shared/icons/x.components";
import { LsModule } from "./commands/ls/ls.module";
@NgModule({
  declarations: [
    AppComponent,
    SvgTerminalComponent,
    SvgMinusComponent,
    SvgSquareComponent,
    SvgXComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadImageModule,
    FontAwesomeModule,
    CmdInputModule,
    WhoamiModule,
    NotFoundModule,
    LsModule,
  ],
})
export class AppModule {}

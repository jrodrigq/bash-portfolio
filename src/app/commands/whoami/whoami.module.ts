import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhoamiComponent } from './whoami.component';

@NgModule({
  declarations: [WhoamiComponent],
  exports: [WhoamiComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
})
export class WhoamiModule {}

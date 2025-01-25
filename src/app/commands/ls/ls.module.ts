import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LsComponent } from './ls.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LsComponent],
  exports: [LsComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [],
})
export class LsModule {}

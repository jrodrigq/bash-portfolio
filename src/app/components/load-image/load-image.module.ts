import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadImageComponent } from './load-image.component';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';

@NgModule({
  declarations: [LoadImageComponent],
  exports: [LoadImageComponent],
  imports: [CommonModule, LazyLoadImageModule],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class LoadImageModule {}

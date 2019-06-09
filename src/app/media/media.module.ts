import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaRoutingModule } from './media-routing.module';

@NgModule({
  declarations: [MediaRoutingModule.components],
  imports: [CommonModule, MediaRoutingModule]
})
export class MediaModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeRoutingModule.components],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}

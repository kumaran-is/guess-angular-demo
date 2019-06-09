import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  declarations: [ExampleRoutingModule.components],
  imports: [CommonModule, ExampleRoutingModule]
})
export class ExampleModule {}

import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about.routing';

import { AboutComponent }   from './about.component';

@NgModule({
  imports: [
    AboutRoutingModule
  ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { RecordsComponent,DetailComponent } from './';
import { DetailResolverService, RecordResolverService } from '../../_services';

@NgModule({
  declarations: [
    RecordsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers : [
    RecordResolverService,
    DetailResolverService
  ]
})
export class PostModule { }

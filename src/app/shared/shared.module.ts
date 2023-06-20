import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SentenceCasePipe } from './pipes/sentence-case/sentence-case.pipe';
import { SplitCamelCasePipe } from './pipes/split-camel-case/split-camel-case.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    SentenceCasePipe,
    SplitCamelCasePipe,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoadingSpinnerComponent,
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: 'todos',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

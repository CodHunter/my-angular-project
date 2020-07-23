import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { DocumentReceivedComponent } from './document-received/document-received.component';
import { DocumentStatusComponent } from './document-status/document-status.component';

const routes: Routes = [
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: 'document-status/:id',
    component: DocumentStatusComponent
  },
  {
    path: 'document',
    component: DocumentReceivedComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'status'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

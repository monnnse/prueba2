import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProdPage } from './listar-prod.page';

const routes: Routes = [
  {
    path: '',
    component: ListarProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProdPageRoutingModule {}

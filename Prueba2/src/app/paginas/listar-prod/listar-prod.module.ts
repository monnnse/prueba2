import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarProdPageRoutingModule } from './listar-prod-routing.module';

import { ListarProdPage } from './listar-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarProdPageRoutingModule
  ],
  declarations: [ListarProdPage]
})
export class ListarProdPageModule {}

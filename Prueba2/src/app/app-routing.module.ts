import { NgModule } from '@angular/core';
import { CanActivate, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioPage } from './paginas/registro-usuario/registro-usuario.page';


const routes: Routes = [
  {
    path: '',
    component: RegistroUsuarioPage,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

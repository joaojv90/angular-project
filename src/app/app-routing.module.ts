import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ModalComponent } from './modal/modal.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'inventario', component: InventarioComponent },
  { path: 'ventas', component: VentasComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'modal/:id', component:ModalComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

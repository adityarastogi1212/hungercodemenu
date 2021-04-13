import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuImageComponent } from './menu-image/menu-image.component';

const routes: Routes = [
  {
    path: 'menuimage/:username', component: MenuImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

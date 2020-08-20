import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import {HaircutsComponent} from './haircuts/haircuts.component';
import {SignUpForAHaircutComponent} from './sign-up-for-a-haircut/sign-up-for-a-haircut.component';
import {HaircutsAdminComponent} from './haircuts-admin/haircuts-admin.component';
import {HaircutAdminCreateComponent} from './haircut-admin-create/haircut-admin-create.component';
import {HaircutAdminUpdateComponent} from './haircut-admin-update/haircut-admin-update.component';
import {HaircutAdminDeleteComponent} from './haircut-admin-delete/haircut-admin-delete.component';
import {HaircutAdminListComponent} from './haircut-admin-list/haircut-admin-list.component';
import {ClientAdminComponent} from './client-admin/client-admin.component';
import {ClientAdminListComponent} from './client-admin-list/client-admin-list.component';
import {ClientAdminCreateComponent} from './client-admin-create/client-admin-create.component';
import {ClientAdminUpdateComponent} from './client-admin-update/client-admin-update.component';
import {ClientAdminDeleteComponent} from './client-admin-delete/client-admin-delete.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'home', component : HomeComponent },
  { path: 'navigation', component : NavigationComponent },
  { path : 'footer', component : FooterComponent },
  { path : 'carousel', component : CarouselComponent },
  { path : 'haircuts', component : HaircutsComponent },
  { path : 'sign-up-for-a-haircut', component : SignUpForAHaircutComponent },
  {
    path : 'haircut-admin',
    component : HaircutsAdminComponent,
    children: [
      {path: 'list', component: HaircutAdminListComponent},
      {path: 'create', component: HaircutAdminCreateComponent},
      {path: 'update/:haircutId', component: HaircutAdminUpdateComponent},
      {path: 'delete/:haircutId', component: HaircutAdminDeleteComponent},
    ]
  },
  {
    path : 'client-admin',
    component : ClientAdminComponent,
    children: [
      {path: 'list', component: ClientAdminListComponent},
      {path: 'create', component: ClientAdminCreateComponent},
      {path: 'update/:clientId', component: ClientAdminUpdateComponent},
      {path: 'delete/:clientId', component: ClientAdminDeleteComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

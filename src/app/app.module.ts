import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HaircutsComponent } from './haircuts/haircuts.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SignUpForAHaircutComponent } from './sign-up-for-a-haircut/sign-up-for-a-haircut.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HaircutsAdminComponent } from './haircuts-admin/haircuts-admin.component';
import { HaircutAdminCreateComponent } from './haircut-admin-create/haircut-admin-create.component';
import { HaircutAdminUpdateComponent } from './haircut-admin-update/haircut-admin-update.component';
import { HaircutAdminDeleteComponent } from './haircut-admin-delete/haircut-admin-delete.component';
import { HaircutAdminListComponent } from './haircut-admin-list/haircut-admin-list.component';
import { ClientAdminListComponent } from './client-admin-list/client-admin-list.component';
import { ClientAdminCreateComponent } from './client-admin-create/client-admin-create.component';
import { ClientAdminUpdateComponent } from './client-admin-update/client-admin-update.component';
import { ClientAdminDeleteComponent } from './client-admin-delete/client-admin-delete.component';
import { ClientAdminComponent } from './client-admin/client-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    HaircutsComponent,
    SignUpForAHaircutComponent,
    HaircutsAdminComponent,
    HaircutAdminCreateComponent,
    HaircutAdminUpdateComponent,
    HaircutAdminDeleteComponent,
    HaircutAdminListComponent,
    ClientAdminListComponent,
    ClientAdminCreateComponent,
    ClientAdminUpdateComponent,
    ClientAdminDeleteComponent,
    ClientAdminComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import {HaircutsComponent} from './haircuts/haircuts.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'home', component : HomeComponent },
  { path: 'navigation', component : NavigationComponent },
  { path : 'footer', component : FooterComponent },
  { path : 'carousel', component : CarouselComponent },
  { path : 'haircuts', component : HaircutsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

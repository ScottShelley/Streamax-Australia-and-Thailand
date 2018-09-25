import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OurProductsPageComponent } from './components/our-products-page/our-products-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SolutionPageComponent } from './components/solution-page/solution-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OurSolutionsPageComponent } from './components/our-solutions-page/our-solutions-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { OurPartnersPageComponent } from './components/our-partners-page/our-partners-page.component';
import { CamerasComponent } from './components/cameras/cameras.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { MdvrComponent } from './components/mdvr/mdvr.component';
import { CamerasCategoryComponent } from './components/cameras-category/cameras-category.component';
import { SearchComponent } from './components/search/search.component';
import { CeibaComponent } from './components/ceiba/ceiba.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { N9mPlatformComponent } from './components/n9m-platform/n9m-platform.component';
import { AutoStationReportComponent } from './components/auto-station-report/auto-station-report.component';
import { CmsComponent } from './components/cms/cms.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'our-solutions', component: OurSolutionsPageComponent},
  {path: 'our-solutions/:url', component: SolutionPageComponent},
  {path: 'our-products', component: OurProductsPageComponent},
  {path: 'mdvr', component: MdvrComponent},
  {path: 'mdvr/:url', component: ProductPageComponent},
  {path: 'our-partners', component: OurPartnersPageComponent},
  {path: 'about-us', component: AboutPageComponent},
  {path: 'contact-us', component: ContactPageComponent},
  {path: 'ceiba', component: CeibaComponent},
  {path: 'n9m-platform-firmware', component: N9mPlatformComponent},
  {path: 'auto-station-report', component: AutoStationReportComponent},
  {path: 'central-monitoring-software', component: CmsComponent},
  {path: 'cameras', component: CamerasComponent},
  {path: 'cameras/:category', component: CamerasCategoryComponent},
  {path: 'cameras/:category/:url', component: ProductPageComponent},
  {path: 'analog', redirectTo: 'cameras/analog'},
  {path: 'ip', redirectTo: 'cameras/ip'},
  {path: 'ahd', redirectTo: 'cameras/ahd'},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'accessories/:url', component: ProductPageComponent},
  {path: 'searchfor/:value', component: SearchComponent},
  {path: 'product/:url', component: ProductPageComponent},
  {path: 'searchfor', redirectTo: ''},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

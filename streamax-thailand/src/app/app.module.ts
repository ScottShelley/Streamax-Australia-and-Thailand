import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SolutionPageComponent } from './components/solution-page/solution-page.component';
import { OurProductsPageComponent } from './components/our-products-page/our-products-page.component';
import { OurPartnersPageComponent } from './components/our-partners-page/our-partners-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OurSolutionsPageComponent } from './components/our-solutions-page/our-solutions-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DynamoDbService } from './services/dynamo-db.service';
import { CamerasComponent } from './components/cameras/cameras.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { MdvrComponent } from './components/mdvr/mdvr.component';
import { CamerasCategoryComponent } from './components/cameras-category/cameras-category.component';
import { SearchComponent } from './components/search/search.component';
import { CeibaComponent } from './components/ceiba/ceiba.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { N9mPlatformComponent } from './components/n9m-platform/n9m-platform.component';
import { AutoStationReportComponent } from './components/auto-station-report/auto-station-report.component';
import { EmailsService } from './services/emails.service';
import { SeoService } from './services/seo.service';
import { CmsComponent } from './components/cms/cms.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { LangService } from './services/lang.service';
import { ApiCallsService } from './services/api-calls.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    SolutionPageComponent,
    OurProductsPageComponent,
    OurPartnersPageComponent,
    ProductPageComponent,
    NotFoundComponent,
    OurSolutionsPageComponent,
    ContactComponent,
    ContactPageComponent,
    CamerasComponent,
    AccessoriesComponent,
    MdvrComponent,
    CamerasCategoryComponent,
    SearchComponent,
    CeibaComponent,
    AboutPageComponent,
    N9mPlatformComponent,
    AutoStationReportComponent,
    CmsComponent,
    DisplayProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    DataTablesModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAI-wQ-3NzrnM7yKwhNGuqIVewgcC-YEys'
    }),
  ],
  providers: [
    DynamoDbService,
    EmailsService,
    SeoService,
    LangService,
    CookieService,
    ApiCallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

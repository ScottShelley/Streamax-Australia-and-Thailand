webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_our_products_page_our_products_page_component__ = __webpack_require__("../../../../../src/app/components/our-products-page/our-products-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_product_page_product_page_component__ = __webpack_require__("../../../../../src/app/components/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_solution_page_solution_page_component__ = __webpack_require__("../../../../../src/app/components/solution-page/solution-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_our_solutions_page_our_solutions_page_component__ = __webpack_require__("../../../../../src/app/components/our-solutions-page/our-solutions-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_our_partners_page_our_partners_page_component__ = __webpack_require__("../../../../../src/app/components/our-partners-page/our-partners-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cameras_cameras_component__ = __webpack_require__("../../../../../src/app/components/cameras/cameras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_accessories_accessories_component__ = __webpack_require__("../../../../../src/app/components/accessories/accessories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_mdvr_mdvr_component__ = __webpack_require__("../../../../../src/app/components/mdvr/mdvr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cameras_category_cameras_category_component__ = __webpack_require__("../../../../../src/app/components/cameras-category/cameras-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ceiba_ceiba_component__ = __webpack_require__("../../../../../src/app/components/ceiba/ceiba.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/components/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_n9m_platform_n9m_platform_component__ = __webpack_require__("../../../../../src/app/components/n9m-platform/n9m-platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_auto_station_report_auto_station_report_component__ = __webpack_require__("../../../../../src/app/components/auto-station-report/auto-station-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_cms_cms_component__ = __webpack_require__("../../../../../src/app/components/cms/cms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'our-solutions', component: __WEBPACK_IMPORTED_MODULE_7__components_our_solutions_page_our_solutions_page_component__["a" /* OurSolutionsPageComponent */] },
    { path: 'our-solutions/:url', component: __WEBPACK_IMPORTED_MODULE_5__components_solution_page_solution_page_component__["a" /* SolutionPageComponent */] },
    { path: 'our-products', component: __WEBPACK_IMPORTED_MODULE_3__components_our_products_page_our_products_page_component__["a" /* OurProductsPageComponent */] },
    { path: 'mdvr', component: __WEBPACK_IMPORTED_MODULE_12__components_mdvr_mdvr_component__["a" /* MdvrComponent */] },
    { path: 'mdvr/:url', component: __WEBPACK_IMPORTED_MODULE_4__components_product_page_product_page_component__["a" /* ProductPageComponent */] },
    { path: 'our-partners', component: __WEBPACK_IMPORTED_MODULE_9__components_our_partners_page_our_partners_page_component__["a" /* OurPartnersPageComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_16__components_about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_8__components_contact_page_contact_page_component__["a" /* ContactPageComponent */] },
    { path: 'ceiba', component: __WEBPACK_IMPORTED_MODULE_15__components_ceiba_ceiba_component__["a" /* CeibaComponent */] },
    { path: 'n9m-platform-firmware', component: __WEBPACK_IMPORTED_MODULE_17__components_n9m_platform_n9m_platform_component__["a" /* N9mPlatformComponent */] },
    { path: 'auto-station-report', component: __WEBPACK_IMPORTED_MODULE_18__components_auto_station_report_auto_station_report_component__["a" /* AutoStationReportComponent */] },
    { path: 'central-monitoring-software', component: __WEBPACK_IMPORTED_MODULE_19__components_cms_cms_component__["a" /* CmsComponent */] },
    { path: 'cameras', component: __WEBPACK_IMPORTED_MODULE_10__components_cameras_cameras_component__["a" /* CamerasComponent */] },
    { path: 'cameras/:category', component: __WEBPACK_IMPORTED_MODULE_13__components_cameras_category_cameras_category_component__["a" /* CamerasCategoryComponent */] },
    { path: 'cameras/:category/:url', component: __WEBPACK_IMPORTED_MODULE_4__components_product_page_product_page_component__["a" /* ProductPageComponent */] },
    { path: 'analog', redirectTo: 'cameras/analog' },
    { path: 'ip', redirectTo: 'cameras/ip' },
    { path: 'ahd', redirectTo: 'cameras/ahd' },
    { path: 'accessories', component: __WEBPACK_IMPORTED_MODULE_11__components_accessories_accessories_component__["a" /* AccessoriesComponent */] },
    { path: 'accessories/:url', component: __WEBPACK_IMPORTED_MODULE_4__components_product_page_product_page_component__["a" /* ProductPageComponent */] },
    { path: 'searchfor/:value', component: __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'product/:url', component: __WEBPACK_IMPORTED_MODULE_4__components_product_page_product_page_component__["a" /* ProductPageComponent */] },
    { path: 'searchfor', redirectTo: '' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__components_not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet (deactivate)=\"onDeactivate()\"></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onDeactivate = function () {
        window.scrollTo(0, 0);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_solution_page_solution_page_component__ = __webpack_require__("../../../../../src/app/components/solution-page/solution-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_our_products_page_our_products_page_component__ = __webpack_require__("../../../../../src/app/components/our-products-page/our-products-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_our_partners_page_our_partners_page_component__ = __webpack_require__("../../../../../src/app/components/our-partners-page/our-partners-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_product_page_product_page_component__ = __webpack_require__("../../../../../src/app/components/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_our_solutions_page_our_solutions_page_component__ = __webpack_require__("../../../../../src/app/components/our-solutions-page/our-solutions-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_dynamo_db_service__ = __webpack_require__("../../../../../src/app/services/dynamo-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_cameras_cameras_component__ = __webpack_require__("../../../../../src/app/components/cameras/cameras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_accessories_accessories_component__ = __webpack_require__("../../../../../src/app/components/accessories/accessories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_mdvr_mdvr_component__ = __webpack_require__("../../../../../src/app/components/mdvr/mdvr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_cameras_category_cameras_category_component__ = __webpack_require__("../../../../../src/app/components/cameras-category/cameras-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_ceiba_ceiba_component__ = __webpack_require__("../../../../../src/app/components/ceiba/ceiba.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/components/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_n9m_platform_n9m_platform_component__ = __webpack_require__("../../../../../src/app/components/n9m-platform/n9m-platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_auto_station_report_auto_station_report_component__ = __webpack_require__("../../../../../src/app/components/auto-station-report/auto-station-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_emails_service__ = __webpack_require__("../../../../../src/app/services/emails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_cms_cms_component__ = __webpack_require__("../../../../../src/app/components/cms/cms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_display_products_display_products_component__ = __webpack_require__("../../../../../src/app/components/display-products/display-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_solution_page_solution_page_component__["a" /* SolutionPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_our_products_page_our_products_page_component__["a" /* OurProductsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_our_partners_page_our_partners_page_component__["a" /* OurPartnersPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_product_page_product_page_component__["a" /* ProductPageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_our_solutions_page_our_solutions_page_component__["a" /* OurSolutionsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_contact_page_contact_page_component__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_cameras_cameras_component__["a" /* CamerasComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_accessories_accessories_component__["a" /* AccessoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_mdvr_mdvr_component__["a" /* MdvrComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_cameras_category_cameras_category_component__["a" /* CamerasCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_ceiba_ceiba_component__["a" /* CeibaComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_n9m_platform_n9m_platform_component__["a" /* N9mPlatformComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_auto_station_report_auto_station_report_component__["a" /* AutoStationReportComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_cms_cms_component__["a" /* CmsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_display_products_display_products_component__["a" /* DisplayProductsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAI-wQ-3NzrnM7yKwhNGuqIVewgcC-YEys'
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__services_dynamo_db_service__["a" /* DynamoDbService */],
                __WEBPACK_IMPORTED_MODULE_33__services_emails_service__["a" /* EmailsService */],
                __WEBPACK_IMPORTED_MODULE_34__services_seo_service__["a" /* SeoService */],
                __WEBPACK_IMPORTED_MODULE_37__services_lang_service__["a" /* LangService */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_38__services_api_calls_service__["a" /* ApiCallsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding-top {\n    padding-top: 2em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <h1 class=\"text-center\">\n    <span *ngIf=\"lang.getLang() == 'english'\">About</span>\n    <span *ngIf=\"lang.getLang() == 'thai'\">เกี่ยวกับเรา</span>\n    Streamax Thailand\n  </h1>\n  <div class=\"row\">\n    <div class=\"col-md-6 padding-top\" *ngIf=\"lang.getLang() == 'english'\">\n      <p>Streamax Thailand has been a market leader in the Mobile Digital Video Recording (MDVR) industry in Thailand for many years. We Pride ourselves on our technical resources and after sales service. We aim to provide an efficient, effective and informative service to all our customers.</p>\n      <p>Our products and services offer solutions to suit the needs from the smallest to largest of fleet operators.</p>\n    </div>\n    <div class=\"col-md-6 padding-top\" *ngIf=\"lang.getLang() == 'thai'\">\n        <p>Streamax Thailand เป็นผู้นำในอุตสาหกรรมการบันทึกวิดีโอดิจิตอล (MDVR) ในประเทศไทยเป็นเวลาหลายปี เราภูมิใจในทรัพยากรทางเทคนิคและบริการหลังการขายของเรา เรามุ่งมั่นที่จะให้บริการที่มีประสิทธิภาพมีประสิทธิภาพและให้ข้อมูลแก่ลูกค้าของเรา</p>\n        <p>ผลิตภัณฑ์และบริการของเรานำเสนอโซลูชั่นเพื่อตอบสนองความต้องการจากผู้ประกอบการเรือรายเล็กที่สุดและใหญ่ที่สุด</p>\n    </div>\n    <div class=\"col-md-6\">\n      <img class=\"max-width\" src=\"assets/img/b92603_0b73179d542f491eaa661234aa4b1413~mv2.jpg\" alt=\"About Us Image\">\n    </div>\n  </div> \n</main>\n<section class=\"container\">\n  <h2 class=\"text-center\">Streamax Technology</h2>\n  <p *ngIf=\"lang.getLang() == 'english'\">Streamax Technology is a leading mobile surveillance solution provider with global perspective. Founded in 2002 and strongly committed to competitive mobile surveillance, Streamax continues to create maximum value for international end users, as well as distribution and installation companies.</p>\n  <p *ngIf=\"lang.getLang() == 'thai'\">Streamax Technology เป็นผู้ให้บริการโซลูชั่นการเฝ้าระวังมือถือชั้นนำที่มีมุมมองทั่วโลก ก่อตั้งขึ้นในปีพ. ศ. 2545 และให้ความสำคัญกับการเฝ้าระวังด้านโทรศัพท์มือถือที่มีความสามารถในการแข่งขัน Streamax ยังคงสร้างมูลค่าสูงสุดให้กับผู้ใช้ปลายทางสากลรวมทั้ง บริษัท จัดจำหน่ายและติดตั้ง</p>\n  <p *ngIf=\"lang.getLang() == 'english'\">Building on the intelligence of 300 dedicated engineers, the company has become a leader in technology innovation – along our recent history, Streamax has received over 100 exclusive patents, as well as a large number of awards.</p>\n  <p *ngIf=\"lang.getLang() == 'thai'\">จากประสบการณ์ด้านวิศวกร 300 คน บริษัท ได้กลายเป็นผู้นำนวัตกรรมด้านเทคโนโลยี - ตามประวัติล่าสุดของเรา Streamax ได้รับสิทธิบัตรมากกว่า 100 ฉบับรวมทั้งรางวัลมากมาย</p>\n  <div class=\"row\">\n    <div class=\"col-md\">\n      <img class=\"w-100\" src=\"assets/img/streamax/550a6680f206a.jpg\" alt=\"Streamax Technology\">\n    </div>\n    <div class=\"col-md\">\n      <img class=\"w-100\" src=\"assets/img/streamax/550a669a57598.jpg\" alt=\"Streamax Technology\">\n    </div>\n    <div class=\"col-md\">\n      <img class=\"w-100\" src=\"assets/img/streamax/550a66ac5635e.jpg\" alt=\"Streamax Technology\">\n    </div>\n    <div class=\"col-md\">\n      <img class=\"w-100\" src=\"assets/img/streamax/550a66c19f8cf.jpg\" alt=\"Streamax Technology\">\n    </div>\n  </div>\n  <p *ngIf=\"lang.getLang() == 'english'\">Our solutions have been deployed worldwide, with over 800,000 installations applied to public transportation and taxi services, law enforcement vehicles, school buses, private fleets, logistics management, railway, metro and other areas. Our most noteworthy success stories include providing surveillance systems for the 2008 Beijing Olympics and Shanghai EXPO 2010. The company has also successfully presented itself across international milestone projects like the Ecuador Public Transportation, USA Yellow School Buses, Singapore Buses and others.</p>\n  <p *ngIf=\"lang.getLang() == 'thai'\">โซลูชันของเราได้รับการติดตั้งทั่วโลกโดยมีการติดตั้งมากกว่า 800,000 ชุดสำหรับการขนส่งสาธารณะและบริการรถแท็กซี่ยานพาหนะเพื่อการบังคับใช้กฎหมายรถโรงเรียนรถโดยสารส่วนตัวการจัดการโลจิสติกรถไฟรถไฟใต้ดินและพื้นที่อื่น ๆ เรื่องราวความสำเร็จที่สำคัญที่สุดของเรา ได้แก่ การจัดหาระบบเฝ้าระวังสำหรับการแข่งขันกีฬาโอลิมปิก 2008 Beijing Olympics และ Shanghai EXPO 2010 นอกจากนี้ บริษัท ยังประสบความสำเร็จในการนำเสนอโครงการต่าง ๆ เช่นโครงการ Ecuador Public Transportation, USA Yellow Busets, Singapore Buses และอื่น ๆ</p>\n  <p *ngIf=\"lang.getLang() == 'english'\">We continue to enjoy rapid and steady growth and would like to invite you to be part of our global success.</p>\n  <p *ngIf=\"lang.getLang() == 'thai'\">เรายังคงเพลิดเพลินกับการเติบโตอย่างรวดเร็วและมั่นคงและขอเชิญคุณเข้าร่วมเป็นส่วนหนึ่งของความสำเร็จระดับโลกของเรา</p>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(seo, lang) {
        this.seo = seo;
        this.lang = lang;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "About Us" });
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-page',
            template: __webpack_require__("../../../../../src/app/components/about-page/about-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_2__services_lang_service__["a" /* LangService */]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/accessories/accessories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/accessories/accessories.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item active\">Accessories</li>\n</ol>\n<section class=\"container\">\n  <h1 class=\"text-center\">Accessories</h1>\n  <hr>\n  <app-display-products *ngIf=\"products\" [products]=\"products\"></app-display-products>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/accessories/accessories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccessoriesComponent = /** @class */ (function () {
    function AccessoriesComponent(service, seo) {
        this.service = service;
        this.seo = seo;
    }
    AccessoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seo.import({ title: "Accessories" });
        this.service.getProducts("accessories")
            .subscribe(function (res) {
            _this.products = res;
        });
    };
    AccessoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-accessories',
            template: __webpack_require__("../../../../../src/app/components/accessories/accessories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/accessories/accessories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */]])
    ], AccessoriesComponent);
    return AccessoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auto-station-report/auto-station-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auto-station-report/auto-station-report.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item active\">Auto Station Report</li>\n</ol>\n<main class=\"container\">\n  <h1 class=\"text-center\">Auto Station Report</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Software overview:</p>\n      <ul>\n        <li>It is an essential and convenient tool for public bus to report station.The software can pack</li>\n        <li>all the information needed in a special format, such as route information, station details, MPS file(to report station), speed limit, service greetings etc..After the file is imported into the mobile </li>\n        <li>DVR, it can report the station automatically. With this software, passenger can get off the bus in time when hearing station report</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Features:</p>\n      <ul>\n        <li>Simple: click the mouse to set parameters</li>\n        <li>Fast: it takes less time to make route file.(There is a format for user to fill in the information needed.)</li>\n        <li>Intelligent: user can import the black box data, then mark the right station on the map to make the exact stop</li>\n      </ul>\n    </div>\n  </div>\n</main>\n<section class=\"container\">\n  <h3 class=\"text-center\">Screenshots</h3>\n  <p>Basic information: to edit the rout name, to import voice file...</p>\n  <img src=\"assets/img/567d0d8bb92dc.png\" alt=\"Auto Station Report Screeshots\" class=\"w-100\">\n  <p>Speech set: To set different language to report station, such as Chinese, English, Spanish, Russian...</p>\n  <hr>\n  <img src=\"assets/img/567d0e02415ba-1.png\" alt=\"Auto Station Report Screeshots\" class=\"w-100\">\n  <p>Station set: To import all the stations of the route.(There is a format for user to fill in the information needed.)</p>\n  <hr>\n  <img src=\"assets/img/567d0e60c3ad5.png\" alt=\"Auto Station Report Screeshots\" class=\"w-100\">\n  <p>Manage point set: To set the parking place, service center, gas station and around the station</p>\n  <hr>\n  <img src=\"assets/img/567d103aaa826.png\" alt=\"Auto Station Report Screeshots\" class=\"w-100\">\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/auto-station-report/auto-station-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoStationReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoStationReportComponent = /** @class */ (function () {
    function AutoStationReportComponent(seo) {
        this.seo = seo;
    }
    AutoStationReportComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "Auto Station Report" });
    };
    AutoStationReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auto-station-report',
            template: __webpack_require__("../../../../../src/app/components/auto-station-report/auto-station-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auto-station-report/auto-station-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */]])
    ], AutoStationReportComponent);
    return AutoStationReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cameras-category/cameras-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cameras-category/cameras-category.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/cameras\">Cameras</a></li>\n  <li class=\"breadcrumb-item active text-uppercase\">{{ category }}</li>\n</ol>\n<div class=\"container\" *ngIf=\"products\">\n  <h1 class=\"text-center text-uppercase\">Cameras {{ category }}</h1>\n  <hr>\n  <app-display-products *ngIf=\"products\" [products]=\"products\"></app-display-products>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cameras-category/cameras-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamerasCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CamerasCategoryComponent = /** @class */ (function () {
    function CamerasCategoryComponent(route, service, seo) {
        this.route = route;
        this.service = service;
        this.seo = seo;
    }
    CamerasCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (data) {
            _this.category = data.params.category;
            _this.seo.import({ title: "Cameras " + _this.category.toUpperCase() });
            _this.service.getProducts(_this.category)
                .subscribe(function (res) {
                _this.products = res;
            });
        });
    };
    CamerasCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cameras-category',
            template: __webpack_require__("../../../../../src/app/components/cameras-category/cameras-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cameras-category/cameras-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_2__services_seo_service__["a" /* SeoService */]])
    ], CamerasCategoryComponent);
    return CamerasCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cameras/cameras.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cameras/cameras.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item active\">Cameras</li>\n</ol>\n<section class=\"container\">\n  <h1 class=\"text-center\">Our Cameras</h1>\n  <div class=\"row\">\n    <article class=\"col-md-4\">\n      <h2 class=\"text-center\">IP Cameras</h2>\n      <img class=\"d-block w-100\" src=\"assets/img/ip-camera.jpg\" alt=\"IP Cameras\">\n      <p class=\"text-center\"><a routerLink=\"ip\" class=\"btn btn-outline-primary\">See our IP Products</a></p>\n    </article>\n    <article class=\"col-md-4\">\n      <h2 class=\"text-center\">Analog Cameras</h2>\n      <img class=\"d-block w-100\" src=\"assets/img/analog-camera.jpg\" alt=\"Analog Cameras\">\n      <p class=\"text-center\"><a routerLink=\"analog\" class=\"btn btn-outline-primary\">See our Analog Products</a></p>\n      \n    </article>\n    <article class=\"col-md-4\">\n      <h2 class=\"text-center\">AHD Cameras</h2>\n      <img class=\"d-block w-100\" src=\"assets/img/ahd-camera.jpg\" alt=\"AHD Cameras\">\n      <p class=\"text-center\"><a routerLink=\"ahd\" class=\"btn btn-outline-primary\">See our AHD PRoducts</a></p>\n    </article>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/cameras/cameras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamerasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CamerasComponent = /** @class */ (function () {
    function CamerasComponent(seo) {
        this.seo = seo;
    }
    CamerasComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "Cameras" });
    };
    CamerasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cameras',
            template: __webpack_require__("../../../../../src/app/components/cameras/cameras.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cameras/cameras.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */]])
    ], CamerasComponent);
    return CamerasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/ceiba/ceiba.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ceiba/ceiba.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item active\">CEIBA 2</li>\n</ol>\n<div class=\"container\">\n  <div class=\"row\">\n    <main class=\"col-md-6\">\n      <h1 class=\"text-center\">CEIBA 2</h1>\n      <p class=\"lead\">CEIBA 2 Overview</p>\n      <p *ngIf=\"lang.getLang() == 'english'\">Streamax Thailand cloud based server solution with GPS, video, and metadata, offers exceptional value, in comparison to GPS only tracking solutions offered by our competitors</p>\n      <p *ngIf=\"lang.getLang() == 'thai'\">โซลูชันเซิร์ฟเวอร์ของ Streamax Thailand cloud ที่ใช้ระบบ GPS, วิดีโอและเมตาดาต้ามีค่าที่โดดเด่นเมื่อเปรียบเทียบกับโซลูชันการติดตามข้อมูล GPS เฉพาะที่นำเสนอโดยคู่แข่งของเรา</p>\n      <p>Features:</p>\n      <ul>\n        <li>GPS Tracking</li>\n        <li>Live View</li>\n        <li>Heirarchial multi-vehicle monitoring</li>\n        <li>Local and remote recording footage</li>\n        <li>Evidence Management</li>\n        <li>Alarm creation, configuration and monitoring</li>\n        <li>Geo-Fencing</li>\n        <li>Search criteria based automatic downloading</li>\n        <li>Reporting</li>\n        <li>Telemetry recording and playback</li>\n      </ul>\n    </main>\n    <div class=\"col-md-6\">\n      <img class=\"d-block w-100\" src=\"assets/img/b92603_0b73179d542f491eaa661234aa4b1413~mv2.jpg\" alt=\"CEIBA 2\">\n    </div>\n  </div>\n  <img src=\"assets/img/5711fa73b5dde.jpg\" alt=\"CEIBA 2 Overview\" class=\"max-width\">\n  <img src=\"assets/img/5711fb1bd68df.png\" alt=\"CEIBA 2 Features\" class=\"max-width\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/ceiba/ceiba.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeibaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CeibaComponent = /** @class */ (function () {
    function CeibaComponent(seo, lang) {
        this.seo = seo;
        this.lang = lang;
    }
    CeibaComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "Ceiba 2" });
    };
    CeibaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ceiba',
            template: __webpack_require__("../../../../../src/app/components/ceiba/ceiba.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/ceiba/ceiba.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_2__services_lang_service__["a" /* LangService */]])
    ], CeibaComponent);
    return CeibaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cms/cms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cms/cms.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item active\">Central Monitoring Software</li>\n</ol>\n<main class=\"container\">\n  <h1 class=\"text-center\">Central Monitoring Software</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Software overview:</p>\n      <ul>\n        <li>Mult-channel live view based on 3G/4G</li>\n        <li>Shows the vehicle, GPS, alarm, log information clearly</li>\n        <li>Supports to lock alarm vehicle automatically</li>\n        <li>Supports PTZ control and MDVR remote configuration</li>\n        <li>Supports remote recording</li>\n        <li>Supports download and playback video file</li>\n        <li>Vehicle management</li>\n        <li>Database supported and GPS route playback</li>\n        <li>Supports to export the report</li>\n        <li>Different user level management</li>\n        <li>WEB client login supported; iOS and android mobile phone client supported</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <img src=\"assets/img/52df6c09ecad2.jpg\" alt=\"Central Monitoring Software\" class=\"w-100\">\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/cms/cms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CmsComponent = /** @class */ (function () {
    function CmsComponent(seo) {
        this.seo = seo;
    }
    CmsComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "Central Monitoring Software" });
    };
    CmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cms',
            template: __webpack_require__("../../../../../src/app/components/cms/cms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cms/cms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */]])
    ], CmsComponent);
    return CmsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <h1 class=\"text-center\">\n    <span *ngIf=\"lang.getLang() == 'english'\">Contact Us!</span>\n    <span *ngIf=\"lang.getLang() == 'thai'\">ติดต่อเรา</span>\n  </h1>\n  <app-contact></app-contact>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent(seo, lang) {
        this.seo = seo;
        this.lang = lang;
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "Contact Us" });
    };
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-page',
            template: __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_2__services_lang_service__["a" /* LangService */]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 300px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <p class=\"text-danger lead text-center\" *ngIf=\"message\">{{ message }}</p>\n    <p class=\"text-success lead text-center\" *ngIf=\"error\">{{ error }}</p>\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" *ngIf=\"lang.getLang() == 'english'\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name <span class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter First and Surname Name, E.G. John Smith\" formControlName=\"name\">\n          <p class=\"text-danger\" *ngIf=\"!form.controls['name'].valid && form.controls['name'].touched\">Name is Required!</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email <span class=\"text-danger\">*</span></label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\" formControlName=\"email\">\n            <div *ngIf=\"form.get('email').touched && form.get('email').invalid\" class=\"text-danger\">\n              <p *ngIf=\"form.controls['email'].errors.required\">Email is required</p>\n              <p *ngIf=\"form.controls['email'].errors.email\">This email is not a valid email address</p>\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"subject\">Subject <span class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"\" formControlName=\"subject\">\n          <p class=\"text-danger\" *ngIf=\"!form.controls['subject'].valid && form.controls['subject'].touched\">Subject is Required!</p>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"message\">Message <span class=\"text-danger\">*</span></label>\n          <textarea class=\"form-control\" id=\"message\" formControlName=\"message\"></textarea>\n          <p class=\"text-danger\" *ngIf=\"!form.controls['message'].valid && form.controls['message'].touched\">Message is Required!</p>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Submit</button>\n        <button type=\"button\" (click)=\"form.reset()\" class=\"btn btn-secondary\">Reset</button>\n      </form>\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" *ngIf=\"lang.getLang() == 'thai'\">\n        <div class=\"form-group\">\n          <label for=\"name\">ชื่อ <span class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"ป้อนชื่อนามสกุลและนามสกุล\" formControlName=\"name\">\n          <p class=\"text-danger\" *ngIf=\"!form.controls['name'].valid && form.controls['name'].touched\">ต้องระบุชื่อ</p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">อีเมล <span class=\"text-danger\">*</span></label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ป้อนอีเมล\" formControlName=\"email\">\n            <div *ngIf=\"form.get('email').touched && form.get('email').invalid\" class=\"text-danger\">\n              <p *ngIf=\"form.controls['email'].errors.required\">จำเป็นต้องใช้อีเมล</p>\n              <p *ngIf=\"form.controls['email'].errors.email\">อีเมลนี้ไม่ใช่ที่อยู่อีเมลที่ถูกต้อง</p>\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"subject\">เรื่อง <span class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"\" formControlName=\"subject\">\n          <p class=\"text-danger\" *ngIf=\"!form.controls['subject'].valid && form.controls['subject'].touched\">ต้องระบุหัวเรื่อง</p>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"message\">ข่าวสาร <span class=\"text-danger\">*</span></label>\n          <textarea class=\"form-control\" id=\"message\" formControlName=\"message\"></textarea>\n          <p class=\"text-danger\" *ngIf=\"!form.controls['message'].valid && form.controls['message'].touched\">จำเป็นต้องมีข้อความ</p>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">เสนอ</button>\n        <button type=\"button\" (click)=\"form.reset()\" class=\"btn btn-secondary\">รีเซ็ต</button>\n      </form>\n  </div>\n  <div class=\"col-md-6\">\n    <p class=\"text-center\">\n      <span *ngIf=\"lang.getLang() == 'english'\">Phone:</span>\n      <span *ngIf=\"lang.getLang() == 'thai'\">โทรศัพท์:</span>\n      <a href=\"tel:+66(0)818018298\">+66(0)818018298</a>\n    </p>\n    <p class=\"text-center\">\n      <span *ngIf=\"lang.getLang() == 'english'\">Email:</span>\n      <span *ngIf=\"lang.getLang() == 'thai'\">อีเมล:</span>\n      <a href=\"mailto:info@streamaxthailand.co.th\">info@streamaxthailand.co.th</a>\n    </p>\n    <p class=\"text-center\">\n      <span *ngIf=\"lang.getLang() == 'english'\">Address:</span>\n      <span *ngIf=\"lang.getLang() == 'thai'\">ที่อยู่:</span>\n      25/34 Moo.13 King Keow 25/1, Rachatewa, Bangplee, SamutPrakan 10540 Thailand\n    </p>\n    <agm-map [latitude]=\"13.681295\" [longitude]=\"100.714085\">\n      <agm-marker [latitude]=\"13.681295\" [longitude]=\"100.714085\">\n        <agm-info-window>25/34 Moo.13 King Keow 25/1, Rachatewa, Bangplee, SamutPrakan 10540 Thailand</agm-info-window>\n      </agm-marker>\n    </agm-map>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_emails_service__ = __webpack_require__("../../../../../src/app/services/emails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, service, lang) {
        this.fb = fb;
        this.service = service;
        this.lang = lang;
        this.form = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email])],
            'subject': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'message': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.form.value);
        this.service.sendEmail(this.form.value)
            .subscribe(function (res) {
            console.log(res);
            if (res === true) {
                _this.form.reset();
                _this.message = "Successfully Sent!";
            }
            else {
                _this.error = "Something when wrong! Call us or Email us instead.";
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_emails_service__["a" /* EmailsService */], __WEBPACK_IMPORTED_MODULE_3__services_lang_service__["a" /* LangService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/display-products/display-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-link {\n    padding: 0;\n    border: 0;\n}\n\n.middle-btn {\n    padding: 0 0.5em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/display-products/display-products.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p class=\"float-right\">\n  View By:\n  <button type=\"button\" (click)=\"toggle(0)\" class=\"btn btn-link\" [disabled]=\"isSelected[0]\">Grid</button>\n  <button type=\"button\" (click)=\"toggle(1)\" class=\"btn btn-link middle-btn\" [disabled]=\"isSelected[1]\">List</button>\n  <button type=\"button\" (click)=\"toggle(2)\" class=\"btn btn-link\" [disabled]=\"isSelected[2]\">Table</button>\n</p>\n<p>Total: {{ products.Count }}</p>\n<hr>\n<div class=\"row\" *ngIf=\"isSelected[0]\">\n  <article class=\"col-md-6\" *ngFor=\"let item of products.Items | paginate: { itemsPerPage: 4, currentPage: p }\">\n    <a [routerLink]=\"item.URL.S\">\n      <h2 class=\"text-center\">{{ item.Name.S }}</h2>\n      <img class=\"d-block w-100\" [src]=\"item.ImgUrl.S\" [alt]=\"'Image of ' + item.Name.S\">\n    </a>\n    <p class=\"text-center\"><a [routerLink]=\"item.URL.S\" class=\"btn btn-outline-info\">Learn More</a></p>\n  </article>\n  <div class=\"col-12\">\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isSelected[1]\">\n  <article class=\"col-12\" *ngFor=\"let item of products.Items | paginate: { itemsPerPage: 3, currentPage: p }\">\n    <h2 class=\"text-center\"><a [routerLink]=\"item.URL.S\">{{ item.Name.S }}</a></h2>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"card\">\n          <div class=\"card_img\">\n            <a [routerLink]=\"item.URL.S\">\n              <img class=\"d-block w-100\" [src]=\"item.ImgUrl.S\" [alt]=\"'Image of ' + item.Name.S\">\n              <div class=\"hover-overlay effect-scale\">\n                <div class=\"img_overlay-container\">\n                  <div class=\"img_overlay-icon\">\n                    <p class=\"text-center\">\n                      <a class=\"btn btn-primary\" [routerLink]=\"item.URL.S\">\n                        <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n                        <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n                      </a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <p *ngIf=\"lang.getLang() == 'english'\">{{ item.Description.S }}</p>\n        <p *ngIf=\"lang.getLang() == 'thai'\">{{ item.ThaiDescription.S }}</p>\n        <p class=\"text-center\">\n          <a [routerLink]=\"item.URL.S\" class=\"btn btn-outline-primary\">\n              <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n              <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </article>\n  <div class=\"col-12\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n</div>\n\n<div *ngIf=\"isSelected[2]\">\n  <table datatable class=\"table table-hover\">\n    <thead>\n      <tr *ngIf=\"lang.getLang() == 'english'\">\n        <th>Name</th>\n        <th>Description</th>\n        <th>Image</th>\n      </tr>\n      <tr *ngIf=\"lang.getLang() == 'thai'\">\n        <th>ชื่อ</th>\n        <th>ลักษณะ</th>\n        <th>ภาพ</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of products.Items\">\n        <th><a [routerLink]=\"item.URL.S\">{{ item.Name.S }}</a></th>\n        <td *ngIf=\"lang.getLang() == 'english'\">{{ item.Description.S }}</td>\n        <td *ngIf=\"lang.getLang() == 'thai'\">{{ item.ThaiDescription.S }}</td>\n        <td>\n            <img class=\"max-width\" [src]=\"item.ImgUrl.S\" [alt]=\"'Image of ' + item.Name.S\">\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/display-products/display-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayProductsComponent = /** @class */ (function () {
    function DisplayProductsComponent(lang) {
        this.lang = lang;
        this.isSelected = [true, false, false];
        this.p = 1;
    }
    DisplayProductsComponent.prototype.ngOnInit = function () {
    };
    DisplayProductsComponent.prototype.toggle = function (index) {
        this.isSelected = [false, false, false];
        this.isSelected[index] = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('products'),
        __metadata("design:type", Object)
    ], DisplayProductsComponent.prototype, "products", void 0);
    DisplayProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display-products',
            template: __webpack_require__("../../../../../src/app/components/display-products/display-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/display-products/display-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_lang_service__["a" /* LangService */]])
    ], DisplayProductsComponent);
    return DisplayProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    margin-top: 1em;\n    padding: 2em 0;\n    background-color: rgb(66, 66, 66);\n    color: azure;\n}\n\ni {\n    font-size: 3em;\n}\n\n.fa-twitter {\n    margin: 0 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md\">\n            <img src=\"assets/img/streamax-logo.png\" alt=\"\" class=\"w-100\">\n            <p *ngIf=\"lang.getLang() == 'english'\">Streamax Thailand specializes in Mobile Digital Video Recording (MDVR) including cameras and accessories.</p>\n            <p *ngIf=\"lang.getLang() == 'thai'\">Streamax Thailand เชี่ยวชาญด้าน Mobile Video Video Recording (MDVR) รวมทั้งกล้องและอุปกรณ์เสริม</p>\n            <p class=\"text-center\">\n                <a href=\"https://www.facebook.com/streamaxaustralia.com.au/\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>\n                <a href=\"https://twitter.com/StreamaxAust\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n                <a href=\"https://www.instagram.com/streamax_australia/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a>\n            </p>\n        </div>\n        <div class=\"col-md\">\n            <p class=\"text-center\"><a href=\"tel:+66(0)818018298\">+66(0)818018298</a></p>\n            <p class=\"text-center\"><a href=\"mailto:info@streamaxthailand.co.th\">info@streamaxthailand.co.th</a></p>\n            <p class=\"text-center\">25/34 Moo.13 King Keow 25/1, Rachatewa, Bangplee, SamutPrakan 10540 Thailand</p>\n        </div>\n        <div class=\"col-lg\">\n            <nav class=\"nav flex-column nav-pills\">\n                <a class=\"nav-link text-center\" routerLinkActive=\"active\" routerLink=\"/our-solutions\">\n                    <span *ngIf=\"lang.getLang() == 'english'\">Our Solutions</span>\n                    <span *ngIf=\"lang.getLang() == 'thai'\">โซลูชั่นของเรา</span>\n                </a>\n                <a class=\"nav-link text-center\" routerLinkActive=\"active\" routerLink=\"/our-products\">\n                    <span *ngIf=\"lang.getLang() == 'english'\">Our Products</span>\n                    <span *ngIf=\"lang.getLang() == 'thai'\">ผลิตภัณฑ์ของเรา</span>\n                </a>\n                <a class=\"nav-link text-center\" routerLinkActive=\"active\" routerLink=\"/mdvr\">MDVRs</a>\n                <a class=\"nav-link text-center\" routerLinkActive=\"active\" routerLink=\"/cameras\">\n                    <span *ngIf=\"lang.getLang() == 'english'\">Cameras</span>\n                    <span *ngIf=\"lang.getLang() == 'thai'\">กล้อง</span>\n                </a>\n                <a class=\"nav-link text-center\" routerLinkActive=\"active\" routerLink=\"/accessories\">\n                    <span *ngIf=\"lang.getLang() == 'english'\">Accessories</span>\n                    <span *ngIf=\"lang.getLang() == 'thai'\">อุปกรณ์</span>\n                </a>\n                <a class=\"nav-link text-center\" routerLinkActive=\"active\" routerLink=\"/about-us\">\n                    <span *ngIf=\"lang.getLang() == 'english'\">About Us</span>\n                    <span *ngIf=\"lang.getLang() == 'thai'\">เกี่ยวกับเรา</span>\n                </a>\n                <a class=\"nav-link text-center\" routerLinkActive=\"active\" routerLink=\"/contact-us\">\n                    <span *ngIf=\"lang.getLang() == 'english'\">Contact Us</span>\n                    <span *ngIf=\"lang.getLang() == 'thai'\">ติดต่อเรา</span>\n                </a>\n            </nav>\n        </div>\n    </div>\n    <hr>\n    <p class=\"text-center\">This website was created by <a href=\"http://shelleysoftwaredevelopment.com.au\" target=\"_blank\">Shelley Software Development</a></p>\n    <p class=\"text-center\">&copy; {{ year }} - Streamax Thailand</p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(lang) {
        this.lang = lang;
        this.d = new Date();
        this.year = this.d.getFullYear();
    }
    ;
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_lang_service__["a" /* LangService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n    margin: 2em 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide1.jpg\" alt=\"Slide Show 1\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide2.jpg\" alt=\"Slide Show 2\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide3.jpg\" alt=\"Slide Show 3\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide4.jpg\" alt=\"Slide Show 4\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/slide5.jpg\" alt=\"Slide Show 5\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-about {\n    background-color: rgb(245, 245, 245);\n    padding: 2em 0;\n}\n\n.section-solutions {\n    margin: 2em 0;\n}\n\n.section-products {\n    margin: 2em 0;\n}\n\n.section-products > article {\n    margin: 1em 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-none d-xl-block d-lg-block d-md-block\">\n  <app-header></app-header>\n</div>\n<main class=\"main-about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'english'\">\n        <h2>About Us</h2>\n        <p>Streamax Thailand has been a market leader in the Mobile Digital Video Recording (MDVR) industry in Thailand for many years. We Pride ourselves on our technical resources and after sales service. We aim to provide an efficient, effective and informative service to all our customers.</p>\n        <p>Our products and services offer solutions to suit the needs from the smallest to largest of fleet operators.</p>\n      </div>\n      <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'thai'\">\n        <h2>เกี่ยวกับเรา</h2>\n        <p>Streamax Thailand เป็นผู้นำในอุตสาหกรรมการบันทึกวิดีโอดิจิตอล (MDVR) ในประเทศไทยเป็นเวลาหลายปี เราภูมิใจในทรัพยากรทางเทคนิคและบริการหลังการขายของเรา เรามุ่งมั่นที่จะให้บริการที่มีประสิทธิภาพมีประสิทธิภาพและให้ข้อมูลแก่ลูกค้าของเรา</p>\n        <p>ผลิตภัณฑ์และบริการของเรานำเสนอโซลูชั่นเพื่อตอบสนองความต้องการจากผู้ประกอบการเรือรายเล็กที่สุดและใหญ่ที่สุด</p>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card_img\">\n            <a routerLink=\"mdvr\">\n              <img class=\"max-width\" src=\"assets/img/b92603_0b73179d542f491eaa661234aa4b1413~mv2.jpg\" alt=\"About Us Image\">\n              <div class=\"hover-overlay effect-scale\">\n                <div class=\"img_overlay-container\">\n                  <div class=\"img_overlay-icon\">\n                    <p class=\"text-center\">\n                      <a class=\"btn btn-primary\" routerLink=\"/about-us\">\n                        <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n                        <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n                      </a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n</main>\n<div class=\"container\">\n  <section class=\"section-products\">\n    <h2 class=\"text-center\"><a routerLink=\"/our-products\">\n      <span *ngIf=\"lang.getLang() == 'english'\">Our Products</span>\n      <span *ngIf=\"lang.getLang() == 'thai'\">ผลิตภัณฑ์ของเรา</span>\n    </a></h2>\n    <article>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card_img\">\n              <a routerLink=\"mdvr\">\n                <img class=\"w-100\" src=\"https://s3-ap-southeast-2.amazonaws.com/streamax-bucket/products/x7-e1608-1.png\" alt=\"Image of a MDVR\">\n                <div class=\"hover-overlay effect-scale\">\n                  <div class=\"img_overlay-container\">\n                    <div class=\"img_overlay-icon\">\n                      <p class=\"text-center\">\n                        <a class=\"btn btn-primary\" routerLink=\"/mdvr\">\n                          <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n                          <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h3 class=\"text-center\">MDVRs</h3>\n          <p>\n            <span *ngIf=\"lang.getLang() == 'english'\">Streamax Thailand is a significant player in the industry. We’ve been supplying our goods to well known local and global companies for years, and have developed an excellent reputation within the community.</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">Streamax Thailand เป็นผู้มีบทบาทสำคัญในอุตสาหกรรมนี้ เราได้รับการจัดหา บริษัท ในประเทศและทั่วโลกเป็นเวลาหลายปีและได้มีการพัฒนาชื่อเสียงที่ยอดเยี่ยมภายในชุมชน</span>\n          </p>\n          <p>\n            <span *ngIf=\"lang.getLang() == 'english'\">A team of highly trained professionals firmly supports our engineers, and ensure that all of our products embody the latest design, technological and usability breakthroughs.</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">ทีมงานมืออาชีพที่ได้รับการฝึกอบรมมาเป็นอย่างดีสนับสนุนวิศวกรของเราและมั่นใจได้ว่าผลิตภัณฑ์ทั้งหมดของเรามีการออกแบบเทคโนโลยีและนวัตกรรมการใช้งานล่าสุด</span>\n          </p>\n          <p class=\"text-center\"><a routerLink=\"/mdvr\" class=\"btn btn-outline-primary\">\n            <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n          </a></p>\n        </div>\n      </div>\n    </article>\n    <article>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h3 class=\"text-center\">\n            <span *ngIf=\"lang.getLang() == 'english'\">Cameras</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">กล้อง</span>\n          </h3>\n          <p>\n            <span *ngIf=\"lang.getLang() == 'english'\">Streamax Thailand offers a broad variety of cameras in analog, AHD, and IP to suit your requirements. We have a selection of cameras ranging from those for interior use, through to IP69K cameras for heavy-duty exterior use. <br> Explore here to find the perfect camera to suit your needs.</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">Streamax Thailand ให้บริการกล้องอะนาล็อก, AHD และ IP ที่หลากหลายเพื่อตอบสนองความต้องการของคุณ กล้องสำหรับใช้ภายนอกที่มีกำลังแรง <br> นี่คุณอยู่ที่นี่:</span>\n          </p>\n          <p class=\"text-center\"><a routerLink=\"/cameras\" class=\"btn btn-outline-primary\">\n            <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n          </a></p>  \n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card_img\">\n              <a routerLink=\"/cameras\">\n                <img class=\"w-100\" src=\"assets/img/SE9-Black-2.jpg\" alt=\"Image of a Cameras\">\n                <div class=\"hover-overlay effect-scale\">\n                  <div class=\"img_overlay-container\">\n                    <div class=\"img_overlay-icon\">\n                      <p class=\"text-center\">\n                        <a class=\"btn btn-primary\" routerLink=\"/cameras\">\n                          <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n                          <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>\n    <article>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card_img\">\n              <a routerLink=\"/accessories\">\n                <img class=\"w-100\" src=\"https://s3-ap-southeast-2.amazonaws.com/streamax-bucket/products/accessories/cp4-touch-panel.png\" alt=\"Image of a Accessories\">\n                <div class=\"hover-overlay effect-scale\">\n                  <div class=\"img_overlay-container\">\n                    <div class=\"img_overlay-icon\">\n                      <p class=\"text-center\">\n                        <a class=\"btn btn-primary\" routerLink=\"/accessories\">\n                          <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n                          <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h3 class=\"text-center\">\n            <span *ngIf=\"lang.getLang() == 'english'\">Accessories</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">อุปกรณ์</span>\n          </h3>\n          <p>\n            <span *ngIf=\"lang.getLang() == 'english'\">Streamax Thailand offers a wide range of accessories to complete your Mobile Digital Video Recording Systems and requirements. Our accessories range from hard drives, POE switches, and cables to touch screen display units, power supplies, and disk readers.</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">Streamax Thailand นำเสนออุปกรณ์เสริมหลากหลายรูปแบบเพื่อให้ระบบบันทึกภาพดิจิตอลเคลื่อนที่ของคุณสมบูรณ์แบบและความต้องการ สวิตช์ POE สายไฟและเครื่องอ่านดิสก์</span>\n          </p>\n          <p class=\"text-center\"><a routerLink=\"/accessories\" class=\"btn btn-outline-primary\">\n            <span *ngIf=\"lang.getLang() == 'english'\">Learn More</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">เรียนรู้เพิ่มเติม</span>\n          </a></p>\n        </div>\n      </div>\n    </article>\n    <div>\n      <hr>\n      <h3 class=\"text-center\">\n        <span *ngIf=\"lang.getLang() == 'english'\">Software</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">ซอฟต์แวร์</span>\n      </h3>\n      <p class=\"lead text-center text-primary\">\n        <span *ngIf=\"lang.getLang() == 'english'\">Check out our software that can provide to you!</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">ตรวจสอบซอฟต์แวร์ของเราที่สามารถให้กับคุณได้!</span>\n      </p>\n      <div class=\"row\">\n        <article class=\"col-6 col-md\">\n          <a routerLink=\"/ceiba\">\n            <h5 class=\"text-center\">CEIBA 2</h5>\n            <img class=\"w-100\" src=\"assets/img/554872b6d0a1b.png\" alt=\"CEIBA 2\">\n          </a>\n        </article>\n        <article class=\"col-6 col-md\">\n          <a routerLink=\"/n9m-platform-firmware\">\n            <h5 class=\"text-center\">N9M Platform Firmware</h5>\n            <img class=\"w-100\" src=\"assets/img/55486b2d5637b.png\" alt=\"N9M Platform Firmware\">\n          </a>\n        </article>\n        <article class=\"col-6 col-md\">\n          <a routerLink=\"/auto-station-report\">\n            <h5 class=\"text-center\">Auto Station Report</h5>\n            <img class=\"w-100\" src=\"assets/img/567d0c4033938.jpg\" alt=\"Auto Station Report\">\n          </a>\n        </article>\n        <article class=\"col-6 col-md\">\n          <a routerLink=\"/central-monitoring-software\">\n            <h5 class=\"text-center\">Central Monitoring Software</h5>\n            <img class=\"w-100\" src=\"assets/img/52df6c09ecad2.jpg\" alt=\"Central Monitoring Software\">\n          </a>\n        </article>\n      </div>\n    </div>\n  </section>\n  <hr>\n  <section class=\"section-solutions\">\n    <h2 class=\"text-center\">\n      <span *ngIf=\"lang.getLang() == 'english'\">Solutions</span>\n      <span *ngIf=\"lang.getLang() == 'thai'\">การแก้ปัญหา</span>\n    </h2>\n    <div class=\"row\" *ngFor=\"let solution of service.solutions\">\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card_img\">\n            <a [routerLink]=\"'our-solutions/' + solution.URL.S\">\n              <img class=\"max-width\" [src]=\"solution.ImgUrl.S\" [alt]=\"'Image of ' + solution.Name.S\">\n              <div class=\"hover-overlay effect-scale\">\n                <div class=\"img_overlay-container\">\n                  <div class=\"img_overlay-icon\">\n                    <p class=\"text-center\">\n                      <a class=\"btn btn-primary\" [routerLink]=\"'our-solutions/' + solution.URL.S\">\n                        <span *ngIf=\"lang.getLang() == 'english'\">Check Here for Details</span>\n                        <span *ngIf=\"lang.getLang() == 'thai'\">ตรวจสอบที่นี่สำหรับรายละเอียด</span>\n                      </a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n        \n      </div>\n      <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'english'\">\n        <h3 class=\"text-center\">{{ solution.Name.S }}</h3>\n        <p>{{ solution.Description.S }}</p>\n        <p class=\"text-center\">\n          <a [routerLink]=\"'/our-solutions/' + solution.URL.S\" class=\"btn btn-outline-primary\">Check Here for Details</a>\n        </p>\n      </div>\n      <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'thai'\">\n        <h3 class=\"text-center\">{{ solution.ThaiName.S }}</h3>\n        <p>{{ solution.ThaiDescription.S }}</p>\n        <p class=\"text-center\">\n          <a [routerLink]=\"'/our-solutions/' + solution.URL.S\" class=\"btn btn-outline-primary\">ตรวจสอบที่นี่สำหรับรายละเอียด</a>\n        </p>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2 class=\"text-center\">\n        <span *ngIf=\"lang.getLang() == 'english'\">Contact Us!</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">ติดต่อเรา</span>\n    </h2>\n    <app-contact></app-contact>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(service, seo, lang) {
        this.service = service;
        this.seo = seo;
        this.lang = lang;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "Home" });
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_2__services_lang_service__["a" /* LangService */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/mdvr/mdvr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mdvr/mdvr.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item active\">MDVR</li>\n</ol>\n<section class=\"container\">\n  <h1 class=\"text-center\">MDVR</h1>\n  <p *ngIf=\"lang.getLang() == 'english'\">As a leading manufacturer of quality products, Streamax Thailand is a major player in the industry. We’ve been supplying our goods to well-known local and global companies for years, and have developed an excellent reputation within the community. Our engineers are closely supported by a team of highly trained professionals, and ensure that all of our products embody the latest design, technological and usability breakthroughs.</p>\n  <p *ngIf=\"lang.getLang() == 'thai'\">ในฐานะผู้ผลิตชั้นนำด้านผลิตภัณฑ์ที่มีคุณภาพ Streamax Thailand เป็นผู้ผลิตรายใหญ่ของอุตสาหกรรม เราได้จัดหาสินค้าของเราให้แก่ บริษัท ท้องถิ่นและ บริษัท ที่มีชื่อเสียงทั่วโลกเป็นเวลาหลายปีและได้มีการพัฒนาชื่อเสียงที่ยอดเยี่ยมภายในชุมชน วิศวกรของเราได้รับการสนับสนุนอย่างใกล้ชิดโดยทีมงานมืออาชีพที่ได้รับการฝึกฝนมาเป็นอย่างดีและมั่นใจได้ว่าผลิตภัณฑ์ทั้งหมดของเรามีการออกแบบใหม่ล่าสุดเทคโนโลยีและการใช้งานที่ก้าวล้ำ</p>\n  <hr>\n  <app-display-products *ngIf=\"products\" [products]=\"products\"></app-display-products>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/mdvr/mdvr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdvrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MdvrComponent = /** @class */ (function () {
    function MdvrComponent(service, seo, lang) {
        this.service = service;
        this.seo = seo;
        this.lang = lang;
    }
    MdvrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seo.import({ title: "MDVR" });
        this.service.getProducts("mdvr")
            .subscribe(function (res) {
            _this.products = res;
        });
    };
    MdvrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mdvr',
            template: __webpack_require__("../../../../../src/app/components/mdvr/mdvr.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/mdvr/mdvr.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_3__services_lang_service__["a" /* LangService */]])
    ], MdvrComponent);
    return MdvrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/n9m-platform/n9m-platform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/n9m-platform/n9m-platform.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb container\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n  <li class=\"breadcrumb-item active\">N9M Platform Firmware</li>\n</ol>\n<main class=\"container\">\n  <h1 class=\"text-center\">N9M Platform Firmware</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Easy Operation:</p>\n      <ul>\n        <li>The brand new GUI design (more user friendly)</li>\n        <li>Optimize booting up process  to make the system boot up faster</li>\n        <li>Supports multiple languages</li>\n        <li>Single package for the recording file for one day. Playback by time bar for easy operation</li>\n        <li>The special design according to the video file characters, easy to find out the video files from the mass data storage</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <img class=\"d-block w-100\" src=\"assets/img/554868c5d1099.png\" alt=\"N9M Platform Firmware\">\n    </div>\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Special Data Record Mode:</p>\n      <ul>\n        <li>Support recording dual data backup function to secure the data</li>\n        <li>Supports maximum 1 hour pre-recording</li>\n        <li>Supports synchronous decoding & encoding, synchronous recording & playback to avoid any video data loss</li>\n        <li>Supports the key frame option to save the hard disk capacity and longer the life span</li>\n        <li>Supports alarm video locking function to secure that the data  are not be recovered in certain period</li>\n        <li>Supports positioning, black box data storage to provide the proof for case analysis</li>\n        <li>The exported video files will be saved as the general format which can be played in the PC directly.</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Easy Check:</p>\n      <ul>\n        <li>Upgrade package: Upgrade the firmware, MCU and CP4 together</li>\n        <li>Supports the remote firmware upgrade for bulk of MDVRs</li>\n        <li>Support Centre server time checking (no GPS and NTP)</li>\n        <li>Supports EASY CHECK to check the MDR system working status to decrease the failure rate for the system</li>\n        <li>Support the protection for the MDVR system when the power is disconnection during the firmware upgrading</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Easy for Integration:</p>\n      <ul>\n        <li>Upgrade package: Upgrade the firmware, MCU and CP4 together</li>\n        <li>Supports the remote firmware upgrade for bulk of MDVRs</li>\n        <li>Support Centre server time checking (no GPS and NTP)</li>\n        <li>Supports EASY CHECK to check the MDR system working status to decrease the failure rate for the system</li>\n        <li>Support the protection for the MDVR system when the power is disconnection during the firmware upgrading</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <p class=\"lead\">Special Features:</p>\n      <ul>\n        <li>Supports different alarm type and each alarm can support the output respectively</li>\n        <li>Support triple streams</li>\n      </ul>\n    </div>\n  </div>\n  <h3 class=\"text-center\">Screenshots</h3>\n  <img src=\"assets/img/5548690ff19d3.png\" alt=\"N9M Platform Firmware Screeshots\" class=\"w-100\">\n  <hr>\n  <img src=\"assets/img/5548694688a4f.png\" alt=\"N9M Platform Firmware Screeshots\" class=\"w-100\">\n  <hr>\n  <img src=\"assets/img/55486966ceddf.png\" alt=\"N9M Platform Firmware Screeshots\" class=\"w-100\">\n  <hr>\n  <img src=\"assets/img/55486983dfd9c.png\" alt=\"N9M Platform Firmware Screeshots\" class=\"w-100\">\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/n9m-platform/n9m-platform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N9mPlatformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var N9mPlatformComponent = /** @class */ (function () {
    function N9mPlatformComponent(seo) {
        this.seo = seo;
    }
    N9mPlatformComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "N9M Platform Firmware" });
    };
    N9mPlatformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-n9m-platform',
            template: __webpack_require__("../../../../../src/app/components/n9m-platform/n9m-platform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/n9m-platform/n9m-platform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */]])
    ], N9mPlatformComponent);
    return N9mPlatformComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fas {\n    font-size: 2em;\n}\n\n.dropdown:hover > .dropdown-menu {\n    display: block;\n}\n\n.nav-bg-colour {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#c1c1c1), color-stop(60%, #e9ecef), to(#6395bf));\n    background-image: linear-gradient(#c1c1c1, #e9ecef 60%, #6395bf);\n}\n\n.nav-link {\n    color: #000 !important;\n}\n\n.active > .nav-link {\n    color: #2FA4E7 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light nav-bg-colour\">\n  <a class=\"navbar-brand\" routerLink=\"\">\n    <img src=\"assets/img/streamax-logo.png\" alt=\"Logo\" class=\"d-inline-block align-top max-width\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"float-right d-md-none\">\n    <a class=\"mobile-a\" href=\"mailto:info@streamaxaustralia.com.au\">\n        <i class=\"fas fa-envelope-square\"></i>\n    </a>\n    <a class=\"mobile-a\" href=\"tel:1300 822 986\">\n        <i class=\"fas fa-phone-square\"></i>\n    </a>  \n  </div>\n  \n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"/our-solutions\">\n          <span *ngIf=\"lang.getLang() == 'english'\">Our Solutions</span>\n          <span *ngIf=\"lang.getLang() == 'thai'\">โซลูชั่นของเรา</span>\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" *ngFor=\"let item of service.solutions\" routerLink=\"/our-solutions/{{item.URL.S}}\">\n            <span *ngIf=\"lang.getLang() == 'english'\">{{item.Name.S}}</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">{{item.ThaiName.S}}</span>\n          </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"/our-products\">\n          <span *ngIf=\"lang.getLang() == 'english'\">Our Products</span>\n          <span *ngIf=\"lang.getLang() == 'thai'\">ผลิตภัณฑ์ของเรา</span>\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" routerLink=\"/mdvr\">MDVRs</a>\n          <a class=\"dropdown-item\" routerLink=\"/cameras\">\n            <span *ngIf=\"lang.getLang() == 'english'\">Cameras</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">กล้อง</span>\n          </a>\n          <a class=\"dropdown-item\" routerLink=\"/ceiba\">CEIBA 2</a>\n          <a class=\"dropdown-item\" routerLink=\"/n9m-platform-firmware\">N9M Platform Firmware</a>\n          <a class=\"dropdown-item\" routerLink=\"/auto-station-report\">Auto Station Report</a>\n          <a class=\"dropdown-item\" routerLink=\"/central-monitoring-software\">Central Monitoring Software</a>\n          <a class=\"dropdown-item\" routerLink=\"/accessories\">\n            <span *ngIf=\"lang.getLang() == 'english'\">Accessories</span>\n            <span *ngIf=\"lang.getLang() == 'thai'\">อุปกรณ์</span>\n          </a>\n        </div>\n      </li>\n      <!-- <li class=\"nav-item\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"/our-partners\">Our Partners</a>\n      </li> -->\n      <li class=\"nav-item\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"/about-us\">\n          <span *ngIf=\"lang.getLang() == 'english'\">About Us</span>\n          <span *ngIf=\"lang.getLang() == 'thai'\">เกี่ยวกับเรา</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"/contact-us\">\n          <span *ngIf=\"lang.getLang() == 'english'\">Contact Us</span>\n          <span *ngIf=\"lang.getLang() == 'thai'\">ติดต่อเรา</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <select class=\"nav-link form-control\" (change)=\"onLangChange($event.target.value)\">\n          <option value=\"english\" [selected]=\"lang.getLang() == 'english'\">English</option>\n          <option value=\"thai\" [selected]=\"lang.getLang() == 'thai'\">Thai</option>\n        </select>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\" [formGroup]=\"form\" (ngSubmit)=\"submit()\" *ngIf=\"lang.getLang() == 'english'\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search for Products\" formControlName=\"search\">\n      <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\" [disabled]=\"form.invalid\">Search</button>\n    </form>\n    <form class=\"form-inline my-2 my-lg-0\" [formGroup]=\"form\" (ngSubmit)=\"submit()\" *ngIf=\"lang.getLang() == 'thai'\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"ค้นหาผลิตภัณฑ์\" formControlName=\"search\">\n      <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\" [disabled]=\"form.invalid\">ค้นหา</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = /** @class */ (function () {
    function NavComponent(fb, router, service, lang) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.lang = lang;
        this.form = fb.group({
            'search': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.submit = function () {
        console.log(this.form.value.search);
        this.router.navigateByUrl("searchfor/" + this.form.value.search);
    };
    NavComponent.prototype.onLangChange = function (value) {
        this.lang.setLang(value);
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_3__services_lang_service__["a" /* LangService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    margin: 3em 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1 class=\"text-center text-danger\">Page Not Found</h1>\n      <p>The requested URL could not be found.</p>\n      <p>Check the URL: {{ url }}</p>\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n        <div class=\"form-group\">\n          <label for=\"url\">URL</label>\n          <input type=\"text\" class=\"form-control\" id=\"url\" formControlName=\"url\">\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">Try Again</button>\n        <a class=\"btn btn-secondary\" routerLink=\"/\">Back to Home</a>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n      <img class=\"w-100\" src=\"assets/img/error-1349562_1280.png\" alt=\"404 error\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.url = "";
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.url = this.router.url;
        this.form = this.fb.group({
            'url': [this.url, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    NotFoundComponent.prototype.submit = function () {
        console.log(this.form.value.url);
        this.router.navigateByUrl("" + this.form.value.url);
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/our-partners-page/our-partners-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/our-partners-page/our-partners-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  our-partners-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/our-partners-page/our-partners-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurPartnersPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurPartnersPageComponent = /** @class */ (function () {
    function OurPartnersPageComponent() {
    }
    OurPartnersPageComponent.prototype.ngOnInit = function () {
    };
    OurPartnersPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-our-partners-page',
            template: __webpack_require__("../../../../../src/app/components/our-partners-page/our-partners-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/our-partners-page/our-partners-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OurPartnersPageComponent);
    return OurPartnersPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/our-products-page/our-products-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    margin-top: 2em;\n}\n\narticle {\n    margin: 2em 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/our-products-page/our-products-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <main>\n    <h1 class=\"text-center\">\n      <span *ngIf=\"lang.getLang() == 'english'\">Our Products</span>\n      <span *ngIf=\"lang.getLang() == 'thai'\">ผลิตภัณฑ์ของเรา</span>\n    </h1>\n    <p *ngIf=\"lang.getLang() == 'english'\">As a leading manufacturer of quality products, Streamax Thailand is a major player in the industry. We’ve been supplying our goods to well-known local and global companies for years, and have developed an excellent reputation within the community. Our engineers are closely supported by a team of highly trained professionals, and ensure that all of our products embody the latest design, technological and usability breakthroughs.</p>\n    <p *ngIf=\"lang.getLang() == 'thai'\">ในฐานะผู้ผลิตชั้นนำด้านผลิตภัณฑ์ที่มีคุณภาพ Streamax Thailand เป็นผู้ผลิตรายใหญ่ของอุตสาหกรรม เราได้รับการจัดหา บริษัท ในประเทศและทั่วโลกเป็นเวลาหลายปีและได้มีการพัฒนาชื่อเสียงที่ยอดเยี่ยมภายในชุมชน วิศวกรของเราได้รับการสนับสนุนอย่างใกล้ชิดโดยทีมงานมืออาชีพที่ได้รับการฝึกอบรมมาอย่างดีและมั่นใจได้ว่าเราทุกคนจะได้รับการออกแบบใหม่ล่าสุดเทคโนโลยีและนวัตกรรมที่ใช้งานได้</p>\n  </main>\n  <section>\n    <article>\n      <h2 class=\"text-center\">MDVRs</h2>\n      <p *ngIf=\"lang.getLang() == 'english'\">Our MDVRs have been used by the biggest transport companies in both Thailand and New Zealand  for years.  Developed to suit your specific needs by our talented technical team, these products are truly one-of-a-kind. With a large and comprehensive range, we have products to suit the needs of the smallest to the largest of transport companies.</p>\n      <p *ngIf=\"lang.getLang() == 'thai'\">MDVRs ของเราถูกใช้โดย บริษัท ที่ใหญ่ที่สุดทั้งในไทยและนิวซีแลนด์มาหลายปีแล้ว ผลิตภัณฑ์เหล่านี้เป็นจริงอย่างหนึ่งของชนิด เรามีข้อกำหนดดังต่อไปนี้</p>\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let item of products\">\n          <a routerLink=\"/mdvr/{{ item.URL.S }}\">\n            <p class=\"lead text-center\">{{ item.Name.S }}</p>\n            <img class=\"w-100\" [src]=\"item.ImgUrl.S\" [alt]=\"item.Name.S\">\n          </a>\n        </div>\n      </div>\n      <p class=\"text-center margin-top-1em\"><a routerLink=\"/mdvr\" class=\"btn btn-primary\">\n        <span *ngIf=\"lang.getLang() == 'english'\">View all our MDVRs</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">ดู MDVR ทั้งหมดของเรา</span>\n      </a></p>\n    </article>\n    <hr>\n    <article>\n      <h2 class=\"text-center\">\n        <span *ngIf=\"lang.getLang() == 'english'\">Cameras</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">กล้อง</span>\n      </h2>\n      <p *ngIf=\"lang.getLang() == 'english'\">Our vast stock of IP, Analog and AHD cameras are specifically chosen and designed to create a wide range of choices for transport companies as well as having cameras tailored to your particular vehicle.</p>\n      <p *ngIf=\"lang.getLang() == 'thai'\">กล้อง IP, Analog และ AHD จำนวนมากได้รับการออกแบบมาเป็นพิเศษสำหรับคุณ</p>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <a routerLink=\"/cameras/ip\">\n            <h2 class=\"text-center\">IP Cameras</h2>\n            <img class=\"d-block w-100\" src=\"assets/img/ip-camera.jpg\" alt=\"IP Cameras\">\n          </a>\n        </div>\n        <div class=\"col-md-4\">\n          <a routerLink=\"/cameras/ipanalog\">\n            <h2 class=\"text-center\">Analog Cameras</h2>\n            <img class=\"d-block w-100\" src=\"assets/img/analog-camera.jpg\" alt=\"Analog Cameras\">  \n          </a>\n        </div>\n        <div class=\"col-md-4\">\n          <a routerLink=\"/cameras/ahd\">\n            <h2 class=\"text-center\">AHD Cameras</h2>\n            <img class=\"d-block w-100\" src=\"assets/img/ahd-camera.jpg\" alt=\"AHD Cameras\">\n          </a>\n        </div>\n      </div>\n      <p class=\"text-center\"><a routerLink=\"/cameras\" class=\"btn btn-primary\">\n        <span *ngIf=\"lang.getLang() == 'english'\">View our Cameras</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">ดูกล้องของเรา</span>\n      </a></p>\n    </article>\n    <hr>\n    <article>\n      <h2 class=\"text-center\">\n        <span *ngIf=\"lang.getLang() == 'english'\">Software</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">ซอฟต์แวร์</span>\n      </h2>\n      <p *ngIf=\"lang.getLang() == 'english'\">Our Cloud-based server CEIBA 2 software with  GPS, video, and metadata, offers exceptional value, in comparison to GPS only tracking solutions offered by our competitors.</p>\n      <p *ngIf=\"lang.getLang() == 'thai'\">ซอฟต์แวร์เซิร์ฟเวอร์ CEIBA 2 ที่ใช้ระบบคลาวด์ของเรากับ GPS วิดีโอและข้อมูลเมตามีค่าที่โดดเด่นเมื่อเทียบกับโซลูชันการติดตาม GPS เฉพาะที่นำเสนอโดยคู่แข่งของเรา</p>\n      <div class=\"row\">\n        <div class=\"col-md\">\n          <a routerLink=\"/ceiba\">\n            <h3 class=\"text-center\">CEIBA 2</h3>\n            <img class=\"w-100\" src=\"assets/img/554872b6d0a1b.png\" alt=\"CEIBA 2\">\n          </a>\n        </div>\n        <div class=\"col-md\">\n          <a routerLink=\"/n9m-platform-firmware\">\n            <h3 class=\"text-center\">N9M Platform Firmware</h3>\n            <img class=\"w-100\" src=\"assets/img/55486b2d5637b.png\" alt=\"N9M Platform Firmware\">\n          </a>\n        </div>\n        <div class=\"col-md\">\n          <a routerLink=\"/auto-station-report\">\n            <h3 class=\"text-center\">Auto Station Report</h3>\n            <img class=\"w-100\" src=\"assets/img/567d0c4033938.jpg\" alt=\"Auto Station Report\">\n          </a>\n        </div>\n        <div class=\"col-md\">\n          <a routerLink=\"/central-monitoring-software\">\n            <h3 class=\"text-center\">Central Monitoring Software</h3>\n            <img class=\"w-100\" src=\"assets/img/52df6c09ecad2.jpg\" alt=\"Central Monitoring Software\">\n          </a>\n        </div>\n      </div>\n    </article>\n    <hr>\n    <article>\n      <h2 class=\"text-center\">\n        <span *ngIf=\"lang.getLang() == 'english'\">Accessories</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">อุปกรณ์</span>\n      </h2>\n      <p *ngIf=\"lang.getLang() == 'english'\">As well as our infamous MDVRs and Camera options, we offer a wide range of accesories to complete your Mobile Digital Video Recording Systems and requirements. Our accesories range from hard drives, POE switches and cables to touch screen display units, power supplies and disk readers.</p>\n      <p *ngIf=\"lang.getLang() == 'thai'\">MDVR และตัวเลือกกล้องที่น่าอับอายของเราทำให้เราสามารถเข้าถึงระบบบันทึกวิดีโอดิจิตอลสำหรับมือถือและความต้องการได้หลากหลาย อุปกรณ์เสริมของเรามีตั้งแต่ฮาร์ดไดร์ฟสวิตช์ POE และสายเคเบิ้ลเพื่อสัมผัสหน้าจออุปกรณ์ไฟฟ้าและเครื่องอ่านดิสก์</p>\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let item of accessories\">\n          <a routerLink=\"/accessories/{{ item.URL.S }}\">\n            <p class=\"lead text-center\">{{ item.Name.S }}</p>\n            <img class=\"w-100\" [src]=\"item.ImgUrl.S\" [alt]=\"item.Name.S\">\n          </a>\n        </div>\n      </div>\n      <p class=\"text-center\"><a routerLink=\"/accessories\" class=\"btn btn-primary\">\n        <span *ngIf=\"lang.getLang() == 'english'\">View all our Accessories</span>\n        <span *ngIf=\"lang.getLang() == 'thai'\">ดูอุปกรณ์เสริมทั้งหมดของเรา</span>\n      </a></p>\n    </article>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/our-products-page/our-products-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurProductsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dynamo_db_service__ = __webpack_require__("../../../../../src/app/services/dynamo-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurProductsPageComponent = /** @class */ (function () {
    function OurProductsPageComponent(service, seo, lang) {
        this.service = service;
        this.seo = seo;
        this.lang = lang;
        this.products = [];
        this.accessories = [];
    }
    OurProductsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seo.import({ title: "Our Products" });
        var params = {
            ExpressionAttributeNames: {
                "#N": "Name",
                "#C": "Category",
                "#U": "URL",
                "#I": "ImgUrl",
            },
            ExpressionAttributeValues: {
                ":v1": {
                    S: "mdvr"
                }
            },
            FilterExpression: "Category = :v1",
            ProjectionExpression: "#N, #C, #U, #I",
            TableName: "Products",
            Limit: 25
        };
        this.service.getDynamoDB().scan(params, function (err, data) {
            console.log(err);
            console.log(data);
            _this.products = data.Items;
        });
        params.ExpressionAttributeValues = {
            ":v1": {
                S: "accessories"
            }
        };
        params.Limit = 12;
        this.service.getDynamoDB().scan(params, function (err, data) {
            console.log(err);
            console.log(data);
            _this.accessories = data.Items;
        });
    };
    OurProductsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-our-products-page',
            template: __webpack_require__("../../../../../src/app/components/our-products-page/our-products-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/our-products-page/our-products-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dynamo_db_service__["a" /* DynamoDbService */], __WEBPACK_IMPORTED_MODULE_2__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_3__services_lang_service__["a" /* LangService */]])
    ], OurProductsPageComponent);
    return OurProductsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/our-solutions-page/our-solutions-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/our-solutions-page/our-solutions-page.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <h1 class=\"text-center\" *ngIf=\"lang.getLang() == 'english'\">Solutions</h1>\n  <h1 class=\"text-center\" *ngIf=\"lang.getLang() == 'thai'\">โซลูชั่น</h1>\n  <div class=\"row\" *ngFor=\"let solution of service.solutions\">\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card_img\">\n            <a [routerLink]=\"'/our-solutions/' + solution.URL.S\">\n              <img class=\"max-width\" [src]=\"solution.ImgUrl.S\" [alt]=\"'Image of ' + solution.Name.S\">\n              <div class=\"hover-overlay effect-scale\">\n                <div class=\"img_overlay-container\">\n                  <div class=\"img_overlay-icon\">\n                    <p class=\"text-center\">\n                      <a class=\"btn btn-primary\" [routerLink]=\"'/our-solutions/' + solution.URL.S\">\n                        <span *ngIf=\"lang.getLang() == 'english'\">Check Here for Details</span>\n                        <span *ngIf=\"lang.getLang() == 'thai'\">ตรวจสอบที่นี่สำหรับรายละเอียด</span>\n                      </a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n        \n      </div>\n      <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'english'\">\n        <h3 class=\"text-center\">{{ solution.Name.S }}</h3>\n        <p>{{ solution.Description.S }}</p>\n        <p class=\"text-center\">\n          <a [routerLink]=\"'/our-solutions/' + solution.URL.S\" class=\"btn btn-outline-primary\">Check Here for Details</a>\n        </p>\n      </div>\n      <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'thai'\">\n        <h3 class=\"text-center\">{{ solution.ThaiName.S }}</h3>\n        <p>{{ solution.ThaiDescription.S }}</p>\n        <p class=\"text-center\">\n          <a [routerLink]=\"'/our-solutions/' + solution.URL.S\" class=\"btn btn-outline-primary\">ตรวจสอบที่นี่สำหรับรายละเอียด</a>\n        </p>\n      </div>\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/our-solutions-page/our-solutions-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurSolutionsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurSolutionsPageComponent = /** @class */ (function () {
    function OurSolutionsPageComponent(service, seo, lang) {
        this.service = service;
        this.seo = seo;
        this.lang = lang;
    }
    OurSolutionsPageComponent.prototype.ngOnInit = function () {
        this.seo.import({ title: "Solutions" });
    };
    OurSolutionsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-our-solutions-page',
            template: __webpack_require__("../../../../../src/app/components/our-solutions-page/our-solutions-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/our-solutions-page/our-solutions-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_1__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_3__services_lang_service__["a" /* LangService */]])
    ], OurSolutionsPageComponent);
    return OurSolutionsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product-page/product-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-page/product-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"product\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"\">Home</a></li>\n    <li class=\"breadcrumb-item\"><a routerLink=\"/our-products\">Our Products</a></li>\n    <li class=\"breadcrumb-item text-uppercase\"><a [routerLink]=\"'/' + product.Category.S\">{{ product.Category.S }}</a></li>\n    <li class=\"breadcrumb-item active text-uppercase\">{{ product.Name.S }}</li>\n  </ol>\n  <div *ngIf=\"product.Category.S != 'accessories'; else accessories\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#Overview\">Overview</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Specifications\">Specifications</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Dimensions\">Dimensions</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Downloads\">Downloads</a>\n      </li>\n    </ul>\n    <h2>{{ product.Name.S }}</h2>\n    <div id=\"myTabContent\" class=\"tab-content\">\n      <div class=\"tab-pane fade active show\" id=\"Overview\">\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'english'\" [innerHtml]=\"product.HTML.S\"></div>\n          <div class=\"col-md-6\" *ngIf=\"lang.getLang() == 'thai'\" [innerHtml]=\"product.ThaiHTML.S\"></div>\n          <div class=\"col-md-6\">\n            <img class=\"d-block w-100\" [src]=\"product.ImgUrl.S\" [alt]=\"'Image of ' + product.Name.S\">\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane fade\" id=\"Specifications\">\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Key</th>\n                <th>Value</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of product.Specifications.L\">\n                <td>{{ item.M.Key.S }}</td>\n                <td>{{ item.M.Value.S }}</td>\n              </tr>\n            </tbody>\n          </table>\n      </div>\n      <div class=\"tab-pane fade\" id=\"Dimensions\">\n        <img class=\"d-block w-100\" *ngFor=\"let item of product.Dimensions.L\" [src]=\"item.M.ImgUrl.S\" alt=\"Image of Dimensions\">\n      </div>\n      <div class=\"tab-pane fade\" id=\"Downloads\">\n        <div class=\"row\" *ngIf=\"product.Downloads.L.length > 0; else elseBlock\">\n          <div class=\"col-6\" *ngFor=\"let item of product.Downloads.L\">\n            <a [href]=\"item.M.File.S\" download>\n              <img src=\"assets/img/40d80b8089c8418a961cb75d96d491f7.png\" alt=\"PDF Image\">\n              <span>{{ item.M.Name.S }}</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <pdf-viewer [src]=\"product.Downloads.L[0].M.File.S\" style=\"display: block;\"></pdf-viewer>\n  </div>\n\n  <ng-template #accessories>\n    <main>\n      <h2>{{ product.Name.S }}</h2>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div *ngIf=\"lang.getLang() == 'english'\" [innerHtml]=\"product.HTML.S\"></div>\n          <div *ngIf=\"lang.getLang() == 'thai'\" [innerHtml]=\"product.ThaiHTML.S\"></div>\n          <a [href]=\"product.SpecificationsFile.S\" download>\n              <img src=\"assets/img/40d80b8089c8418a961cb75d96d491f7.png\" alt=\"PDF Image\">\n              <span>{{ product.Name.S }} PDF</span>\n            </a>\n        </div>\n        <div class=\"col-md-6\">\n          <img class=\"d-block w-100\" [src]=\"product.ImgUrl.S\" [alt]=\"'Image of ' + product.Name.S\">\n        </div>\n        <div class=\"col-12\">\n            <pdf-viewer [src]=\"product.SpecificationsFile.S\" style=\"display: block;\"></pdf-viewer>\n        </div>\n      </div>\n    </main>\n  </ng-template>\n\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/product-page/product-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(route, service, seo, lang) {
        this.route = route;
        this.service = service;
        this.seo = seo;
        this.lang = lang;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (data) {
            _this.service.getProduct(data.params.url)
                .subscribe(function (res) {
                console.log(res);
                _this.product = res.Item;
            });
        });
    };
    ProductPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-page',
            template: __webpack_require__("../../../../../src/app/components/product-page/product-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product-page/product-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_2__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_4__services_lang_service__["a" /* LangService */]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"products\">\n    <h1 class=\"text-center\">Search Result</h1>\n    <hr>\n    <div class=\"row\" *ngIf=\"products.Items.length > 0; else noResult\">\n      <article class=\"col-md-6\" *ngFor=\"let item of products.Items\">\n        <a [routerLink]=\"'/product/' + item.URL.S\">\n          <h2 class=\"text-center\">{{ item.Name.S }}</h2>\n          <img class=\"d-block w-100\" [src]=\"item.ImgUrl.S\" [alt]=\"'Image of ' + item.Name.S\">\n        </a>\n        <p class=\"text-center\"><a [routerLink]=\"'/product/' + item.URL.S\" class=\"btn btn-outline-info\">Learn More</a></p>\n      </article>\n    </div>\n    <ng-template #noResult>\n      <p class=\"lead text-center\">There was no result for {{ search }}</p>\n    </ng-template>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dynamo_db_service__ = __webpack_require__("../../../../../src/app/services/dynamo-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, service) {
        this.route = route;
        this.service = service;
        this.products = {
            Items: []
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (data) {
            _this.search = data.params.value;
            var params = {
                ExpressionAttributeNames: {
                    "#N": "Name",
                    "#C": "Category",
                    "#U": "URL",
                    "#I": "ImgUrl",
                },
                ExpressionAttributeValues: {
                    ":v2": {
                        S: data.params.value
                    }
                },
                FilterExpression: "contains(#N, :v2)",
                ProjectionExpression: "#N, #C, #U, #I",
                TableName: "Products"
            };
            _this.service.getDynamoDB().scan(params, function (err, data) {
                console.log(err);
                console.log(data.Items);
                _this.products = data;
            });
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_dynamo_db_service__["a" /* DynamoDbService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/solution-page/solution-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/solution-page/solution-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"solution\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-8\" *ngIf=\"lang.getLang() == 'english'\">\n      <img class=\"full-width\" [src]=\"solution.ImgUrl.S\" [alt]=\"solution.Name.S\">\n      <h2>{{ solution.Name.S }}</h2>\n      <p>{{ solution.Description.S }}</p>\n      <p class=\"lead\">Call us today to discuss the solution that's best for you:<br>+66(0)818018298</p>\n    </div>\n    <div class=\"col-md-8\" *ngIf=\"lang.getLang() == 'thai'\">\n      <img class=\"full-width\" [src]=\"solution.ImgUrl.S\" [alt]=\"solution.Name.S\">\n      <h2>{{ solution.ThaiName.S }}</h2>\n      <p>{{ solution.ThaiDescription.S }}</p>\n      <p class=\"lead\">โทรหาเราวันนี้เพื่อหารือเกี่ยวกับโซลูชันที่ดีที่สุดสำหรับคุณ:<br>+66(0)818018298</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/solution-page/solution-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_seo_service__ = __webpack_require__("../../../../../src/app/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__ = __webpack_require__("../../../../../src/app/services/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lang_service__ = __webpack_require__("../../../../../src/app/services/lang.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SolutionPageComponent = /** @class */ (function () {
    function SolutionPageComponent(route, service, seo, lang) {
        this.route = route;
        this.service = service;
        this.seo = seo;
        this.lang = lang;
    }
    SolutionPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (data) {
            _this.service.getSolution(data.params.url)
                .subscribe(function (res) {
                console.log(res);
                _this.solution = res.Item;
            });
        });
    };
    SolutionPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-solution-page',
            template: __webpack_require__("../../../../../src/app/components/solution-page/solution-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/solution-page/solution-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_2__services_seo_service__["a" /* SeoService */], __WEBPACK_IMPORTED_MODULE_4__services_lang_service__["a" /* LangService */]])
    ], SolutionPageComponent);
    return SolutionPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/api-calls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCallsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Origin': '*'
    })
};
var ApiCallsService = /** @class */ (function () {
    function ApiCallsService(http) {
        var _this = this;
        this.http = http;
        this.solutions = [];
        this.getSolutions()
            .subscribe(function (res) {
            console.log(res);
            _this.solutions = res.Items.reverse();
        });
    }
    ApiCallsService.prototype.getSolutions = function () {
        return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-solutions');
    };
    ApiCallsService.prototype.getSolution = function (url) {
        return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-solutions/' + url);
    };
    ApiCallsService.prototype.getProducts = function (category) {
        return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-products/?category=' + category);
    };
    ApiCallsService.prototype.getProduct = function (url) {
        return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-products/' + url);
    };
    ApiCallsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiCallsService);
    return ApiCallsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/dynamo-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamoDbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__ = __webpack_require__("../../../../aws-sdk/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_dynamodb__ = __webpack_require__("../../../../aws-sdk/clients/dynamodb.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_dynamodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_dynamodb__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamoDbService = /** @class */ (function () {
    function DynamoDbService() {
        // AWS.config.update({
        //   region: 'ap-southeast-2',
        //   accessKeyId: 'AKIAITOY6FTC5RAQPCGQ',
        //   secretAccessKey: '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'
        // });
        __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__["config"].update({
            region: 'ap-southeast-2',
            accessKeyId: 'AKIAJ73HNIZFHVAEEXUQ',
            secretAccessKey: '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'
        });
        this.dynamoDB = new __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_dynamodb__({
            apiVersion: '2012-08-10'
        });
    }
    DynamoDbService.prototype.getDynamoDB = function () {
        return this.dynamoDB;
    };
    DynamoDbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DynamoDbService);
    return DynamoDbService;
}());



/***/ }),

/***/ "../../../../../src/app/services/emails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailsService = /** @class */ (function () {
    function EmailsService(http) {
        this.http = http;
    }
    EmailsService.prototype.sendEmail = function (data) {
        return this.http.post("https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/send-email", JSON.stringify(data));
    };
    EmailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmailsService);
    return EmailsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/lang.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LangService = /** @class */ (function () {
    function LangService(cookieService) {
        this.cookieService = cookieService;
        this.lang = "english";
        if (cookieService.check("lang")) {
            switch (cookieService.get("lang")) {
                case "english":
                    this.lang = cookieService.get("lang");
                    break;
                case "thai":
                    this.lang = cookieService.get("lang");
                    break;
                default:
                    break;
            }
        }
    }
    LangService.prototype.getLang = function () {
        return this.lang;
    };
    LangService.prototype.setLang = function (value) {
        switch (value) {
            case "english":
                this.lang = "english";
                this.cookieService.set("lang", "english");
                break;
            case "thai":
                this.lang = "thai";
                this.cookieService.set("lang", "thai");
                break;
            default:
                this.lang = "english";
                this.cookieService.set("lang", "english");
                break;
        }
    };
    LangService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_ngx_cookie_service__["a" /* CookieService */]])
    ], LangService);
    return LangService;
}());



/***/ }),

/***/ "../../../../../src/app/services/seo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeoService = /** @class */ (function () {
    function SeoService(meta, title) {
        this.meta = meta;
        this.title = title;
    }
    SeoService.prototype.import = function (config) {
        this.title.setTitle(config.title + " | Streamax Thailand");
    };
    SeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Meta */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]])
    ], SeoService);
    return SeoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map
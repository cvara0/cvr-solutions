import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/a-home-comps/home/home.component';
import { HeaderComponent } from './components/b-header-comps/header/header.component';
import {APP_ROUTING } from './app.routes';
import { MainSoftComponent } from "./components/c-main-comps/main-soft-comp/main-soft.component";
import { MainDesignComponent } from "./components/c-main-comps/main-design-comp/main-design/main-design.component";
import { MainWebComponent } from './components/c-main-comps/main-soft-comp/main-web-comp/main-web/main-web.component';
import { MainMobileComponent } from './components/c-main-comps/main-soft-comp/main-mobile-comp/main-mobile/main-mobile.component';
import { MainIndustrialComponent } from './components/c-main-comps/main-design-comp/main-design/main-industrial-comp/main-industrial/main-industrial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ABtnComponent } from './components/e-buttons-comps/a-btn-comp/a-btn/a-btn.component';
import { BBtnComponent } from './components/e-buttons-comps/b-btn-comp/b-btn/b-btn.component';
import { CBtnComponent } from './components/e-buttons-comps/c-btn-comp/c-btn/c-btn.component';
import { DBtnComponent } from './components/f-buttons-comps/d-btn-comp/d-btn/d-btn.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        MainSoftComponent,
        MainWebComponent,
        MainMobileComponent,
        MainDesignComponent,
        MainIndustrialComponent,
        ABtnComponent,
        BBtnComponent,
        CBtnComponent,
        DBtnComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        APP_ROUTING,
        NgbModule,
        
    ]
})
export class AppModule { }

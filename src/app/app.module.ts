import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/a-home-comps/home/home.component';
import { HeaderComponent } from './components/b-header-comps/header/header.component';
import { FooterComponent } from './components/d-footer-comps/footer/footer.component';
import {APP_ROUTING } from './app.routes';
import { CircleMComponent } from './components/e-other-comps/circle-m-comp/circle-m/circle-m.component';
import { CircleSComponent } from './components/e-other-comps/circle-s-comp/circle-s/circle-s.component';
import { CircleBComponent } from './components/e-other-comps/circle-b-comp/circle-b/circle-b.component';
import { MainSoftComponent } from "./components/c-main-comps/main-soft-comp/main-soft.component";
import { MainWebComponent } from './components/c-main-comps/main-soft-comp/main-web-comp/main-web/main-web.component';
import { MainMobileComponent } from './components/c-main-comps/main-soft-comp/main-mobile-comp/main-mobile/main-mobile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CircleMComponent,
        CircleSComponent,
        CircleBComponent,
        MainSoftComponent,
        MainWebComponent,
        MainMobileComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        APP_ROUTING,
        
    ]
})
export class AppModule { }

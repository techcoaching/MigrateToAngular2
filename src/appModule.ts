import { NgModule, Component } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {UpgradeModule} from "@angular/upgrade/static";
import { RouterOutlet, RouterModule} from "@angular/router";
import { FormsModule } from "@angular/forms";
import {SecurityModule} from "./security/securityModule";
import {DefaultComponent} from "./defaultComponent";
import {AppRoute} from "./appRoute";


@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule, UpgradeModule, AppRoute, SecurityModule],
    declarations: [DefaultComponent],
    bootstrap:[DefaultComponent],
    providers:[UpgradeModule],
})
export class AppModule { }
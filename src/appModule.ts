/// <reference path="extensions.d.ts" />
import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UpgradeModule } from "@angular/upgrade/static";
import { RouterOutlet, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SecurityModule } from "./security/securityModule";
import { DefaultComponent } from "./defaultComponent";
import { AppRoute } from "./appRoute";
import { GroupService } from "./security/groupService";
import { downgradeInjectable, downgradeComponent } from "@angular/upgrade/static";
import { CategoryPreview } from "./security/categoryPreview";

window.angular.module('angular1').factory("groupService", downgradeInjectable(GroupService));
window.angular.module('angular1').directive('categoryPreview', downgradeComponent({ component: CategoryPreview,inputs: ['item'] }) as window.angular.IDirectiveFactory);

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule, UpgradeModule, AppRoute, SecurityModule],
    declarations: [DefaultComponent],
    bootstrap: [DefaultComponent],
    providers: [UpgradeModule],
    entryComponents: [CategoryPreview]
})
export class AppModule { }

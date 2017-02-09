import { NgModule, Component } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {UpgradeModule} from "@angular/upgrade/static";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"default",
    template:"<div ng-view></div>"
})
export class DefaultComponent{}

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule, FormsModule, UpgradeModule],
    declarations: [DefaultComponent],
    bootstrap:[DefaultComponent],
    providers:[UpgradeModule]
})
export class AppModule { }
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Groups } from "./groups";
import {SecurityRoute} from "./securityRoute";
@NgModule({
    imports: [
        BrowserModule,
        SecurityRoute
    ],
    declarations: [Groups],
    bootstrap: [Groups]
})
export class SecurityModule { }
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {Groups} from "./groups";

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        Groups
    ],
    bootstrap:[Groups]
})
export class SecurityModule{}
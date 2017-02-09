import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { Groups } from "./groups";
import { GroupService } from "./groupService";
import { CategoryPreview } from "./categoryPreview";

// export const MenuModule = window.angular.module('MenuModule', ['ngRoute']);
// MenuModule.component('groups', Groups);
// MenuModule.config(($routeProvider: any) => {
//     $routeProvider.when('/groups', {
//              templateUrl: 'src/security/groups.html',
//              controller: Groups
//          });
// });
//@NgModule({})
//export class SecurityModule{}
// let routes: Routes = [
//     { path: "groups", component: Groups }
// ];
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [Groups, CategoryPreview],
    //exports: [RouterModule],
    bootstrap: [Groups],
    providers: [GroupService]
})
export class SecurityModule { }
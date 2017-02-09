import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { Groups } from "./groups";


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
        //RouterModule.forChild(routes)
    ],
    declarations: [Groups],
    //exports: [RouterModule],
    bootstrap: [Groups]
})
export class SecurityModule { }
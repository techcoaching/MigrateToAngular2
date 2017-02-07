import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Groups } from "./groups";

let routes: Routes = [
    { path: 'security/groups', component: Groups }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SecurityRoute { }
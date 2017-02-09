import { Groups } from "./security/groups";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
let routes: Routes = [
    { path: "groups", component: Groups }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoute { }
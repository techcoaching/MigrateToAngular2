import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { Groups } from "./groups";
import { GroupService } from "./groupService";
import { CategoryPreview } from "./categoryPreview";
import { UserPreview } from "./userPreview";
import {HightlightBaseOnFirstName} from "./hightlightBaseOnFirstName";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [Groups, CategoryPreview, UserPreview, HightlightBaseOnFirstName],
    bootstrap: [Groups],
    providers: [GroupService]
})
export class SecurityModule { }
import { GroupService } from "./groupService";
import { Component } from "@angular/core";
@Component({
    templateUrl: "src/security/groups.html"
})
export class Groups {
    public groups: Array<any> = [];
    public selectedCategory: any = null;
    constructor(groupService: GroupService) {
        this.groups = groupService.getAllGroups();
    }
    public onPreviewCategoryClicked(item: any) {
        this.selectedCategory = item;
    }
}
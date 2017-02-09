import { Component, Input } from "@angular/core";
@Component({
    selector: "category-preview",
    templateUrl: "src/security/categoryPreview.html"
})
export class CategoryPreview {
    @Input() item: any = null;
}
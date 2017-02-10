import { Directive, ElementRef, Injector, Input } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";
@Directive({
    selector: "[user-preview]"
})
export class UserPreview extends UpgradeComponent {
    @Input() user: any = null
    constructor(elementRef: ElementRef, injector: Injector) {
        super("userPreview", elementRef, injector);
    }
}
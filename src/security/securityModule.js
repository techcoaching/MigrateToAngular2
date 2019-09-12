System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./groups", "./groupService", "./categoryPreview", "./userPreview"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, forms_1, router_1, groups_1, groupService_1, categoryPreview_1, userPreview_1;
    var SecurityModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (groups_1_1) {
                groups_1 = groups_1_1;
            },
            function (groupService_1_1) {
                groupService_1 = groupService_1_1;
            },
            function (categoryPreview_1_1) {
                categoryPreview_1 = categoryPreview_1_1;
            },
            function (userPreview_1_1) {
                userPreview_1 = userPreview_1_1;
            }],
        execute: function() {
            //import {HightlightBaseOnFirstName} from "./hightlightBaseOnFirstName";
            SecurityModule = class SecurityModule {
            };
            SecurityModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                        forms_1.FormsModule
                    ],
                    declarations: [groups_1.Groups, categoryPreview_1.CategoryPreview, userPreview_1.UserPreview],
                    bootstrap: [groups_1.Groups],
                    providers: [groupService_1.GroupService]
                }), 
                __metadata('design:paramtypes', [])
            ], SecurityModule);
            exports_1("SecurityModule", SecurityModule);
        }
    }
});
//# sourceMappingURL=securityModule.js.map
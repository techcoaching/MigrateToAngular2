System.register(["./groupService", "@angular/core"], function(exports_1, context_1) {
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
    var groupService_1, core_1;
    var Groups;
    return {
        setters:[
            function (groupService_1_1) {
                groupService_1 = groupService_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Groups = class Groups {
                constructor(groupService) {
                    this.groups = [];
                    this.selectedCategory = null;
                    this.groups = groupService.getAllGroups();
                }
                onPreviewCategoryClicked(item) {
                    this.selectedCategory = item;
                }
            };
            Groups = __decorate([
                core_1.Component({
                    templateUrl: "src/security/groups.html"
                }), 
                __metadata('design:paramtypes', [groupService_1.GroupService])
            ], Groups);
            exports_1("Groups", Groups);
        }
    }
});
//# sourceMappingURL=groups.js.map
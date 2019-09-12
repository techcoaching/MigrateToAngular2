System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GroupService;
    return {
        setters:[],
        execute: function() {
            GroupService = class GroupService {
                getAllGroups() {
                    return GroupService.groups;
                }
            };
            GroupService.groups = [
                { id: 1, name: "category 1", description: "Desription" },
                { id: 2, name: "category 2", description: "Desription 2" },
            ];
            exports_1("GroupService", GroupService);
        }
    }
});
//# sourceMappingURL=groupService.js.map
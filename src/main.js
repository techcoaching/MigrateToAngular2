System.register(["@angular/platform-browser-dynamic", "@angular/upgrade/static", "./appModule"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, static_1, appModule_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            },
            function (appModule_1_1) {
                appModule_1 = appModule_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(appModule_1.AppModule).then((ref) => {
                let upgrade = ref.injector.get(static_1.UpgradeModule);
                upgrade.bootstrap(document.body, ["angular1"]);
            });
        }
    }
});
//# sourceMappingURL=main.js.map
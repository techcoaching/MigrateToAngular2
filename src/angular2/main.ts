import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {UpgradeModule} from "@angular/upgrade/static";
import {Angular2AppModule} from "./angular2AppModule";
platformBrowserDynamic().bootstrapModule(Angular2AppModule).then((ref: any) => {
    let upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ["angular1"]);
});
// import {upgradeAdapter} from './upgradeAdapter';
// upgradeAdapter.bootstrap(document.body, ['angular1']);
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {UpgradeModule} from "@angular/upgrade/static";
import {AppModule} from "./appModule";
platformBrowserDynamic().bootstrapModule(AppModule).then((ref: any) => {
    let upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ["angular1"]);
});
import {upgradeAdapter} from './upgradeAdapter';
import {MigrateModule} from "./migrateModule";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(MigrateModule).then(() => {
    upgradeAdapter.bootstrap(document.body, ['angular1']);
    // const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    // upgrade.bootstrap(document.body, ['heroApp'], {strictDi: true});
});




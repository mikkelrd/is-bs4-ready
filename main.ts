// declare let require: any; // webpack typings do not currently include the context method for some reason
// require.context('./assets/', true, /^\.\/.*\.*/); // require all assets, so webpack can transfer them all over to build

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModule, Component } from '@angular/core';

@Component({
})
class App {
}


@NgModule({
})

platformBrowserDynamic().bootstrapModule(AppModule);
enableProdMode();

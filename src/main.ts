import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let plantPrice= 50;
let grammPrice= 1.5;
let ernte = 1;
let plants = 2;
let allPlants = plantPrice * plants
let verkaufErnte = ernte * grammPrice;
let gewinn = verkaufErnte - allPlants;
let steuerSatz = 0.3;


function beReChnen(){

  console.log("Du Bist Gay")
}
let x = beReChnen()
